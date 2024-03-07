export const dynamic = "force-dynamic";

import { db } from "../../../../../utils/db";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import bcrypt from "bcrypt";

export async function POST(req) {
	const { emailId, password } = await req.json();

	const errors = [];
	if (!emailId) {
		errors.push("Email is required.");
	} else if (!emailId.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
		errors.push("Invalid email format.");
	}

	if (!password) {
		errors.push("password is required.");
	}

	if (errors.length > 0) {
		return NextResponse.json({ error: "Invalid Data Format" });
	}

	const sanitizedEmail = sanitize(emailId);
	const sanitizedPassword = sanitize(password);

	try {
		const client = await db.client.findUnique({
			where: { emailId: sanitizedEmail },
		});

		if (
			!client ||
			!(await bcrypt.compare(sanitizedPassword, client.password))
		) {
			return NextResponse.json(
				{
					error: "Invalid email or password",
				},
				{
					status: 401,
				}
			);
		}

		cookies().set("pmks-client-session", client.id, {
			httpOnly: true,
			secure: process.env.NODE_ENV === "production",
			maxAge: 60 * 60 * 24 * 7,
			path: "/",
		});

		return NextResponse.json({ data: client }, { status: 200 });
	} catch (error) {
		console.error("Error Login client:", error);
		return NextResponse.json({ error: error }, { status: 500 });
	}
}

function sanitize(text) {
	const escapedText = text
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&#039;");
	return escapedText;
}
