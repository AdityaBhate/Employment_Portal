"use client";

import { useState, useEffect } from "react";
import axios from "axios";

function Page() {
	const [requests, setRequests] = useState([]);
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		const fetchRequests = async () => {
			setLoading(true);
			try {
				const response = await axios.get("/api/dashboard/view-requests");
				if (response.status === 200) {
					setRequests(response.data.requests);
				}
			} catch (error) {
				console.error("Error in fetching requests:", error);
			}
			setLoading(false);
		};
		fetchRequests();
	}, []);

	return (
		<div className='container mx-auto mt-8 px-4'>
			<h1 className='text-3xl font-bold text-left mb-4'>All Labour Requests</h1>
			<div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
				{requests.map((request, key) => (
					<div
						key={key}
						className='bg-white rounded-lg shadow-md p-4 border-2 border-zinc-300'>
						<h2 className='text-lg font-light'>{request.name}</h2>
						<h2 className='text-lg font-light mb-2'>{request.mobileNo}</h2>
						<p className='text-xl font-semibold'>{request.comment}</p>
					</div>
				))}
			</div>
		</div>
	);
}

export default Page;
