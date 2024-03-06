// components/RazorpayButton.js

import React, { useEffect } from "react";

const RazorpayButton = () => {
	return (
		<div>
			<form>
				<script
					src='https://checkout.razorpay.com/v1/payment-button.js'
					data-payment_button_id='pl_Nj5ortpY9NeVkc'
					async></script>
			</form>
		</div>
	);
};

export default RazorpayButton;
