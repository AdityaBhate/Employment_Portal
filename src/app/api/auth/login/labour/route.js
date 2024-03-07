export const dynamic = "force-dynamic";

import { db } from "../../../../../utils/db";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req) {
	const { labourName, aadharNumber } = await req.json();
	const errors = [];

	if (!aadharNumber) {
		errors.push("aadhar number is required.");
	}

	if (!labourName) {
		errors.push("Name is required.");
	}

	try {
		const labour = await db.labour.findUnique({
			where: { aadharNumber: aadharNumber },
		});

		if (!labour || labourName !== labour.labourName) {
			return NextResponse.json(
				{
					error: "Invalid name or aadharNumber",
				},
				{
					status: 401,
				}
			);
		}

		cookies().set("pmks-labour-session", labour.id, {
			httpOnly: true,
			secure: process.env.NODE_ENV === "production",
			maxAge: 60 * 60 * 24 * 7,
			path: "/",
		});

		return NextResponse.json({ status: "success", data: labour });
	} catch (error) {
		console.error("Error Login client:", error);
		return NextResponse.json({ status: "failed", error: error });
	}
}
