export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { db } from "../../../../utils/db";

export async function POST(req) {
	const { id } = await req.json();

	const Labour = await db.labour.findUnique({
		where: { id },
	});

	if (!Labour) {
		return NextResponse.json(
			{ error: "Labour not found" },
			{
				status: 404,
			}
		);
	}

	const labourCode = Labour.brokerCode;

	try {
		const referredLabours = await db.labour.findMany({
			where: {
				referedBy: labourCode,
				NOT: {
					id: Labour.id,
				},
			},
		});
		return NextResponse.json({ referredLabours });
	} catch (error) {
		console.error("Error retrieving referred labours:", error);
		return NextResponse.json(
			{ error: "Error retrieving referred labours" },
			{
				status: 500,
			}
		);
	}
}
