"use client";

import React from "react";
import { useRouter } from "next/navigation";

function RequestLabourButton() {
	const router = useRouter();
	return (
		<>
			<div className='grid grid-cols-2 gap-4 justify-center'>
				<div className='col-span-2 md:col-span-1'>
					<label className='block text-gray-700 text-base font-bold mb-1'>
						Request Labours from us
					</label>
				</div>
				<div className='col-span-2 md:col-span-1'>
					<button
						onClick={() => router.push("/request-labour")}
						className='px-4 py-2 bg-orange-400 color-white rounded-md'>
						Request Labours
					</button>
				</div>
			</div>
		</>
	);
}

export default RequestLabourButton;
