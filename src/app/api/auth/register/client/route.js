import { NextResponse } from "next/server";

export const POST = async () => {};

export const GET = async (req, res) => {
	return NextResponse.json({ route: "auth/register/client" });
};
