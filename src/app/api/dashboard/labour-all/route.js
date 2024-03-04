import { db } from "../../../../utils/db";
import { NextResponse } from "next/server";

export async function GET(req) {
	try {
		const allLabours = await db.labour.findMany({
			where: { isBroker: false },
		});
		if (allLabours.length > 0) {
			return NextResponse.json({ labours: allLabours }, { status: 200 });
		} else {
			return NextResponse.json({ labours: [] }, { status: 200 });
		}
	} catch (error) {
		console.error("Error retrieving labours:", error);
		return NextResponse.json(
			{ error: "Internal Server Error" },
			{ status: 500 }
		);
	}
}
