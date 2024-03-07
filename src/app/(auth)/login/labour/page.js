"use client";

import React, { useState } from "react";
import { TextField, Grid, Chip, Button } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import toast from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";

function ClientLogin() {
	const router = useRouter();

	const [labourName, setLabourName] = useState("");
	const [aadharNumber, setAadharNumber] = useState("");

	const [loading, setLoading] = useState(false);

	const validateForm = () => {
		if (labourName.trim() === "") {
			return false;
		}
		if (aadharNumber.trim() === "") {
			return false;
		}

		return true;
	};

	const handleSubmit = () => {
		setLoading(true);
		if (validateForm()) {
			const payload = {
				labourName: labourName.trim(),
				aadharNumber: aadharNumber.trim(),
			};
			axios
				.post("/api/auth/login/labour", payload)
				.then((response) => {
					if (response.status === 200 && !response?.data.error) {
						setLoading(false);
						toast.success("Labour Logged in successfully!");
						router.push("/labour");
					} else {
						setLoading(false);
						if (response.status === 401) {
							toast.error("Invalid aadharNumber or Name");
						} else {
							toast.error("Error Logging In");
						}
					}
				})
				.catch((error) => {
					setLoading(false);
					toast.error(error.message);
				});
		} else {
			setLoading(false);
			toast.error("Please fill the form correctly!");
		}
		setLoading(false);
	};

	return (
		<>
			<div className='flex items-center justify-center h-full'>
				<div className='shadow-md py-6 px-4 w-[85%]'>
					<span className='text-white font-semibold text-xl p-2 bg-orange-500 rounded'>
						Labour Login
					</span>
					<div className='my-4'>
						<Chip label='Login to your Labour account' />
					</div>

					<div className='flex flex-col items-center justify-between gap-4'>
						<TextField
							className='w-[70%]'
							required
							value={labourName}
							onChange={(e) => setLabourName(e.target.value)}
							label='Name'
							placeholder='Enter your Registered Name'
							variant='outlined'
						/>
						<TextField
							className='w-[70%]'
							required
							value={aadharNumber}
							onChange={(e) => setAadharNumber(e.target.value)}
							label='Aadhar Number'
							placeholder='Enter your Registered aadhar number'
							variant='outlined'
						/>
					</div>

					<div className='flex justify-center my-3'>
						<Button
							className='bg-orange-400 text-black w-[70%] hover:bg-orange-600/50'
							variant='contained'
							disabled={loading}
							onClick={() => {
								handleSubmit();
							}}>
							{loading ? <CircularProgress /> : "Login"}
						</Button>
					</div>
				</div>
			</div>
		</>
	);
}

export default ClientLogin;
