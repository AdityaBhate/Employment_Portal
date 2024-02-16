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
		workEfficiency,
		state,
		bankName,
		branchName,
		accountName,
		ifscCode,
		accountNumber,
		brokerCode,
		isBroker,
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

	try {
		const labour = await db.labour.create({
			data: {
				labourName: sanitizedLabourName,
				fatherName: sanitizedFatherName,
				gender,
				dob,
				caste,
				mobileNumber: sanitizedMobileNumber,
				aadharNumber,
				districtName,
				residentialAddress: sanitizedResidentialAddress,
				education,
				workEfficiency,
				state,
				bankName,
				branchName,
				accountName,
				ifscCode,
				accountNumber,
				brokerCode,
				isBroker,
				referedBy,
			},
		});

		return NextResponse.json({ status: "success", data: labour });
	} catch (error) {
		console.error("Error registering labour:", error);
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
