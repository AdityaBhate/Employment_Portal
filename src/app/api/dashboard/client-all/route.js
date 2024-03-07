export const dynamic = "force-dynamic";

import { db } from "../../../../utils/db";
import { NextResponse } from "next/server";

export async function GET(req) {
	try {
		const allClient = await db.client.findMany();
		if (allClient.length > 0) {
			return NextResponse.json({ clients: allClient }, { status: 200 });
		} else {
			return NextResponse.json({ clients: [] }, { status: 200 });
		}
	} catch (error) {
		console.error("Error retrieving Clients:", error);
		return NextResponse.json(
			{ error: "Internal Server Error" },
			{ status: 500 }
		);
	}
}
