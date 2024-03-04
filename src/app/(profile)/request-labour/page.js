"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { TextField, Button } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import toast from "react-hot-toast";

function RequestLabourPage() {
	const [loading, setLoading] = useState(false);
	const [comment, setComment] = useState("");

	const handleSubmit = async () => {
		try {
			setLoading(true);
			const response = await axios.post("/api/dashboard/create-requests", {
				comment,
			});
			if (response.status === 200) {
				toast.success("Request submitted successfully");
				setComment("");
			} else {
				toast.error("Failed to submit request");
			}
			setLoading(false);
		} catch (error) {
			toast.error("Failed to submit request");
		}
	};

	return (
		<>
			<div className='flex items-center justify-center h-full'>
				<div className='shadow-md py-6 px-4 w-[85%]'>
					<div className='mb-4 flex flex-col items-start justify-center gap-2'>
						<span className='text-white font-semibold text-xl p-2 bg-black rounded'>
							Requests Labours
						</span>
						<span>
							Please specify the quantity, type, and reason for requiring labor
							in the comment box.
						</span>
					</div>

					<div className='flex flex-col items-center justify-between gap-4'>
						<TextField
							className='w-[70%]'
							required
							multiline
							rows={3}
							value={comment}
							onChange={(e) => setComment(e.target.value)}
							label='Type your Request'
							placeholder='Enter your Request here...'
							variant='outlined'
						/>
					</div>

					<div className='flex justify-center my-3'>
						<Button
							className='bg-orange-400 text-black w-[70%] hover:bg-orange-600/50'
							variant='contained'
							disabled={loading}
							onClick={handleSubmit}>
							{loading ? <CircularProgress /> : "Submit"}
						</Button>
					</div>
				</div>
			</div>
		</>
	);
}

export default RequestLabourPage;
