export const dynamic = "force-dynamic";

import { db } from "../../../../utils/db";
import { NextResponse } from "next/server";

export async function POST(req) {
	const { id } = await req.json();
	const user = await db.labour.findFirst({
		where: {
			id: id,
		},
	});
	if (user) {
		return NextResponse.json({ user }, { status: 200 });
	} else {
		return NextResponse.json({ error: "User not found" }, { status: 404 });
	}
}
