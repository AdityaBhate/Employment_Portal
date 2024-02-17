import { db } from "./db";

export const getUser = async (id, type) => {
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
		} else {
			return null;
		}
	} catch (error) {
		console.log("[Get User]: " + error);
		return null;
	}
	try {
		if (type === "labour") {
			const user = await db.labour.findFirst({
				where: {
					id: id,
				},
			});
			if (user) {
				return user;
			}
		} else {
			return null;
		}
	} catch (error) {
		console.log("[Get USer]: " + error);
		return null;
	}
};
