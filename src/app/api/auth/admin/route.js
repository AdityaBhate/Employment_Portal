export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { db } from "../../../../utils/db";
import { cookies } from "next/headers";

export async function POST(req) {
	const { username, password } = await req.json();
	if (!username || !password) {
		return NextResponse.json({ error: "Invalid Data Format" });
	}
	try {
		const admin = await db.admin.findFirst({
			where: { username: username },
		});

		if (!admin || admin.password !== password) {
			return NextResponse.json(
				{
					error: "Invalid username or password",
				},
				{
					status: 401,
				}
			);
		}

		cookies().set("pmks-admin-session", admin.id, {
			httpOnly: true,
			secure: process.env.NODE_ENV === "production",
			maxAge: 60 * 60 * 24 * 7,
			path: "/",
		});

		return NextResponse.json({ data: "logged in" }, { status: 200 });
	} catch (error) {
		console.error("Error Login client:", error);
		return NextResponse.json({ error: error }, { status: 500 });
	}
}
