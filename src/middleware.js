import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export default function middleware(request) {
	const cookieStore = cookies();
	const sessionCookie = cookieStore.get("pmks-client-session");
	if (!sessionCookie && request.nextUrl.pathname.startsWith("/dashboard")) {
		return NextResponse.redirect(new URL("/", request.url));
	}
}
