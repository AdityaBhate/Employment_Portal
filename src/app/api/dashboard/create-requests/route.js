export const dynamic = "force-dynamic";

import { db } from "../../../../utils/db";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req) {
	const { comment } = await req.json();

	const cookieStore = cookies();
	const clientId = cookieStore.get("pmks-client-session");

	const existingClient = await db.client.findUnique({
		where: { id: clientId.value },
	});

	if (!existingClient) {
		return NextResponse.json(
			{ error: "Client not found" },
			{
				status: 404,
			}
		);
	}

	try {
		let newRequest = await db.requests.create({
			data: {
				comment: comment,
				name: existingClient.clientName,
				mobileNo: existingClient.mobileNumber,
				clientID: clientId.value,
			},
		});
		return NextResponse.json(
			{ message: newRequest },
			{
				status: 200,
			}
		);
	} catch (error) {
		console.error("Error in sending requests:", error);
		return NextResponse.json(
			{ error: "Internal Server Error" },
			{ status: 500 }
		);
	}
}
