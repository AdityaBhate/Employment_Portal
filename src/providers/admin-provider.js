import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { db } from "../utils/db";

export async function AdminProvider({ children }) {
	const cookieStore = cookies();
	const adminSessionCookie = cookieStore.get("pmks-admin-session");

	if (adminSessionCookie) {
		let user = await verifyAdmin(adminSessionCookie.value);
		if (user) {
			return <>{children}</>;
		} else {
			console.log("invalid user");
			return redirect("/dashboard-login");
		}
	}

	return redirect("/");
}

const verifyAdmin = async (id) => {
	try {
		const user = await db.admin.findFirst({
			where: {
				id: id,
			},
		});
		if (user) {
			return user;
		}
	} catch (error) {
		console.log("[Admin provider]: " + error);
		return null;
	}
	return null;
};
