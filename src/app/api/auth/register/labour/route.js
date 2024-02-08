import { NextResponse } from "next/server";

export const POST = async () => {
	return NextResponse.json({ data: "this shit is working" });
};

export const GET = async (req, res) => {
	return NextResponse.json({ route: "auth/register/labour" });
};
