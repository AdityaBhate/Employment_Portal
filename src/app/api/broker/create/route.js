export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { db } from "../../../../utils/db";

export async function POST(req) {
	const { id } = await req.json();

	const existingLabour = await db.labour.findUnique({
		where: { id },
	});

	if (!existingLabour) {
		return NextResponse.json(
			{ error: "Labour not found" },
			{
				status: 404,
			}
		);
	}

	const hasBrokerCode = existingLabour.brokerCode !== "";

	if (hasBrokerCode) {
		return NextResponse.json(
			{ error: "Labour already has a code" },
			{
				status: 400,
			}
		);
	}

	let uniqueCode;
	while (true) {
		uniqueCode = Math.random().toString().slice(2, 8);
		const existingCode = await db.labour.findFirst({
			where: { brokerCode: uniqueCode },
		});
		if (!existingCode) {
			break;
		}
	}

	// Update labour with generated code
	await db.labour.update({
		where: { id },
		data: { brokerCode: uniqueCode, isBroker: true },
	});

	return NextResponse.json(
		{ message: "Broker code generated successfully!" },
		{
			status: 200,
		}
	);
}
