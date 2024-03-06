// const Razorpay = require("razorpay");
// const shortid = require("shortid");

// export async function POST(req, res) {
// 	// Initialize razorpay object
// 	const razorpay = new Razorpay({
// 		key_id: process.env.RAZORPAY_KEY,
// 		key_secret: process.env.RAZORPAY_SECRET,
// 	});

// 	// Create an order -> generate the OrderID -> Send it to the Front-end
// 	// Also, check the amount and currency on the backend (Security measure)
// 	const payment_capture = 1;
// 	const amount = 4;
// 	const currency = "INR";
// 	const options = {
// 		amount: (amount * 100).toString(),
// 		currency,
// 		receipt: shortid.generate(),
// 		payment_capture,
// 	};

// 	try {
// 		const response = await razorpay.orders.create(options);
// 		res.status(200).json({
// 			id: response.id,
// 			currency: response.currency,
// 			amount: response.amount,
// 		});
// 	} catch (err) {
// 		console.log(err);
// 		res.status(400).json(err);
// 	}
// }

import { NextResponse } from "next/server";

export async function GET(req) {
	return NextResponse.json({ message: "Test payment route" }, { status: 200 });
}
