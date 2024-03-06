"use client";

import React from "react";
import { useRouter } from "next/navigation";

function ReferralButton({ code }) {
	const router = useRouter();
	return (
		<>
			<hr className='mt-8 mb-4' />
			<h1 className='text-2xl text-orange-600 font-bold mb-4 '>
				Shram Saathi Details
			</h1>
			<div className='grid grid-cols-2 gap-4 justify-center'>
				<div className='col-span-2 md:col-span-1'>
					<label className='block text-gray-700 text-base font-bold mb-1'>
						Shram Saathi Code
					</label>
					<p className='text-gray-700 text-base'>{code}</p>
				</div>
				<div className='col-span-2 md:col-span-1'>
					<button
						onClick={() => router.push(`/broker/${code}`)}
						className='px-4 py-2 bg-orange-400 color-white rounded-md'>
						See All Referrals
					</button>
				</div>
			</div>
		</>
	);
}

export default ReferralButton;
