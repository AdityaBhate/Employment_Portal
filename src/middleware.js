import { redirect } from "next/dist/server/api-utils";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export default function middleware(request) {
	const cookieStore = cookies();
	const clientSessionCookie = cookieStore.get("pmks-client-session");
	const labourSessionCookie = cookieStore.get("pmks-labour-session");
	if (!clientSessionCookie && request.nextUrl.pathname.startsWith("/client")) {
		return NextResponse.redirect(new URL("/login/client", request.url));
	}
	if (!labourSessionCookie && request.nextUrl.pathname.startsWith("/labour")) {
		return NextResponse / redirect(new URL("/login/labour", request.url));
	}
}
