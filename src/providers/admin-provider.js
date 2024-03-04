import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { db } from "../utils/db";

export async function AuthProvider({ children }) {
	const cookieStore = cookies();
	const clientSessionCookie = cookieStore.get("pmks-client-session");
	const labourSessionCookie = cookieStore.get("pmks-labour-session");
	if (clientSessionCookie) {
		let user = await verifyUser(clientSessionCookie.value, "client");
		console.log(user);
		if (user) {
			return <>{children}</>;
		} else {
			console.log("invalid user");
			return redirect("/login/client");
		}
	}
	if (labourSessionCookie) {
		console.log(labourSessionCookie.value);
		let user = await verifyUser(labourSessionCookie.value, "labour");
		console.log(user);
		if (user) {
			return <>{children}</>;
		} else {
			console.log("invalid user");
			return redirect("/login/labour");
		}
	}
	return redirect("/");
}

const verifyUser = async (id, type) => {
	try {
		if (type === "client") {
			const user = await db.client.findFirst({
				where: {
					id: id,
				},
			});
			if (user) {
				return user;
			}
		} else if (type === "labour") {
			const user = await db.labour.findFirst({
				where: {
					id: id,
				},
			});
			if (user) {
				return user;
			}
		}
	} catch (error) {
		console.log("[Auth provider]: " + error);
		return null;
	}
	return null;
};
