import { db } from "../../../../../utils/db";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req) {
	const {
		clientName,
		companyName,
		emailId,
		fatherName,
		labourCategory,
		password,
		mobileNumber,
		residentialAddress,
	} = await req.json();

	const errors = [];

	if (!clientName) {
		errors.push("Name is required.");
	}

	if (!fatherName) {
		errors.push("Father's name is required.");
	}

	if (!emailId) {
		errors.push("Email is required.");
	} else if (!emailId.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
		errors.push("Invalid email format.");
	}

	if (!companyName) {
		errors.push("Company name is required.");
	}

	if (!mobileNumber) {
		errors.push("Mobile number is required.");
	}

	if (!residentialAddress) {
		errors.push("Address is required.");
	}

	if (!labourCategory) {
		errors.push("labourCategory is required.");
	}

	if (!password) {
		errors.push("password is required.");
	}

	if (errors.length > 0) {
		return NextResponse.json({ errors });
	}

	const sanitizedName = sanitize(clientName);
	const sanitizedFatherName = sanitize(fatherName);
	const sanitizedEmail = sanitize(emailId);
	const sanitizedCompanyName = sanitize(companyName);
	const sanitizedMobileNumber = sanitize(mobileNumber);
	const sanitizedAddress = sanitize(residentialAddress);
	const sanitizedLabourCategory = sanitize(labourCategory);
	const sanitizedPassword = sanitize(password);

	//! check if user already exists
	const userExists = await db.client.findFirst({
		where: {
			emailId: sanitizedEmail,
		},
	});
	if (userExists) {
		return NextResponse.json({
			status: "failed",
			error: "User already exists",
		});
	}

	try {
		//! Create User
		const client = await db.client.create({
			data: {
				clientName: sanitizedName,
				emailId: sanitizedEmail,
				fatherName: sanitizedFatherName,
				companyName: sanitizedCompanyName,
				mobileNumber: sanitizedMobileNumber,
				residentialAddress: sanitizedAddress,
				labourCategory: sanitizedLabourCategory,
				password: sanitizedPassword,
			},
		});

		cookies().set("pmks-client-session", "loggedin", {
			httpOnly: true,
			secure: process.env.NODE_ENV === "production",
			maxAge: 60 * 60 * 24 * 7,
			path: "/",
		});

		return NextResponse.json({ status: "success", data: client });
	} catch (error) {
		console.error("Error registering client:", error);
		return NextResponse.json({ status: "failed", error: error });
	}
}

function sanitize(text) {
	const escapedText = text
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&#039;");
	return escapedText;
}

export const GET = async (req, res) => {
	return NextResponse.json({ route: "auth/register/client" });
};
