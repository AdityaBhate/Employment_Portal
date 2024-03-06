import { db } from "../../../../../utils/db";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req) {
	const {
		labourName,
		fatherName,
		gender,
		dob,
		caste,
		mobileNumber,
		aadharNumber,
		districtName,
		residentialAddress,
		education,
		labourType,
		state,
		bankName,
		branchName,
		accountName,
		ifscCode,
		accountNumber,
		referedBy,
	} = await req.json();

	const errors = [];

	if (!labourName) {
		errors.push("Name is required.");
	}

	if (!fatherName) {
		errors.push("Father's name is required.");
	}

	if (!mobileNumber) {
		errors.push("Mobile number is required.");
	}

	if (!aadharNumber) {
		errors.push("aadhar number is required.");
	}

	if (!residentialAddress) {
		errors.push("Address is required.");
	}

	if (errors.length > 0) {
		return NextResponse.json({ errors });
	}

	const sanitizedLabourName = sanitize(labourName);
	const sanitizedFatherName = sanitize(fatherName);
	const sanitizedMobileNumber = sanitize(mobileNumber);
	const sanitizedResidentialAddress = sanitize(residentialAddress);

	const isLabourExist = await db.labour.findUnique({
		where: { aadharNumber: aadharNumber },
	});

	if (isLabourExist) {
		return NextResponse.json(
			{
				error: "Labour already exist",
			},
			{
				status: 401,
			}
		);
	}

	try {
		const labour = await db.labour.create({
			data: {
				labourName: sanitizedLabourName,
				fatherName: sanitizedFatherName,
				gender: gender,
				dob: dob,
				caste: caste,
				mobileNumber: sanitizedMobileNumber,
				aadharNumber: aadharNumber,
				districtName: districtName,
				residentialAddress: sanitizedResidentialAddress,
				education: education,
				labourType: labourType,
				state: state,
				bankName: bankName,
				branchName: branchName,
				accountName: accountName,
				ifscCode: ifscCode,
				accountNumber: accountNumber,
				referedBy: referedBy,
			},
		});
		console.log("Labour registered successfully");

		cookies().set("pmks-labour-session", labour.id, {
			httpOnly: true,
			secure: process.env.NODE_ENV === "production",
			maxAge: 60 * 60 * 24 * 7,
			path: "/",
		});
		return NextResponse.json({ data: labour });
	} catch (error) {
		console.error("Error registering labour:", error);
		return NextResponse.json({ error: error });
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
