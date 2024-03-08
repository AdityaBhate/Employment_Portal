import Razorpay from "razorpay";
import shortid from "shortid";
import { NextResponse } from "next/server";

const razorpay = new Razorpay({
	key_id: process.env.RAZORPAY_KEY,
	key_secret: process.env.RAZORPAY_SECRET,
});

export async function POST(req) {
	try {
		const payment_capture = 1;
		const amount = 49;
		const currency = "INR";
		const options = {
			amount: (amount * 100).toString(),
			currency,
			receipt: shortid.generate(),
			payment_capture,
		};
		const payment = await razorpay.orders.create(options);

		return NextResponse.json({
			id: payment.id,
			currency: payment.currency,
			amount: payment.amount,
		});
	} catch (error) {
		console.error(error);
		return NextResponse.json({ message: "Internal server error" });
	}
}
