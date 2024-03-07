export const dynamic = "force-dynamic";

import { db } from "../../../../utils/db";
import { NextResponse } from "next/server";

export async function GET(req) {
	try {
		const allRequests = await db.requests.findMany();
		if (allRequests.length > 0) {
			return NextResponse.json({ requests: allRequests }, { status: 200 });
		} else {
			return NextResponse.json({ error: "No requests found" }, { status: 404 });
		}
	} catch (error) {
		return NextResponse.json(
			{ error: "Internal Server Error" },
			{ status: 500 }
		);
	}
}
