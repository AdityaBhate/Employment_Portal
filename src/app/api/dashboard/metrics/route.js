import { NextResponse } from "next/server";
import { db } from "../../../../utils/db";

export async function GET(req) {
	try {
		let allLabours = await db.labour.findMany({
			where: { isBroker: false },
		});
		let allClients = await db.client.findMany({});

		let allBrokers = await db.labour.findMany({
			where: { isBroker: true },
		});

		return NextResponse.json(
			{
				labours: allLabours.length,
				clients: allClients.length,
				allBrokers: allBrokers.length,
			},
			{ status: 200 }
		);
	} catch (error) {
		return NextResponse.json(
			{ error: "Internal Server Error" },
			{ status: 500 }
		);
	}
}
