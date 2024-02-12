"use client";

import { cookies } from "next/headers";
import { useRouter, usePathname } from "next/navigation";

export function AuthProvider({ children }) {
	const router = useRouter();
	const pathname = usePathname();

	const cookieStore = cookies();
	const sessionCookie = cookieStore.get("pmks-client-session");
	if (sessionCookie) {
		return <>{children}</>;
	} else {
		if (pathname === "/login/client" || pathname === "/register/client") {
			return <>{children}</>;
		} else {
			router.push("/login/client");
		}
		return <>No Access allowed!</>;
	}
}
