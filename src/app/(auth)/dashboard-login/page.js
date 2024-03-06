"use client";

import React, { useState } from "react";
import { TextField, Grid, Chip, Button } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import toast from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";

function ClientLogin() {
	const router = useRouter();

	const [username, setUserName] = useState("");
	const [password, setPassword] = useState("");

	const [loading, setLoading] = useState(false);

	const validateForm = () => {
		if (username.trim() === "") {
			return false;
		}
		if (password.trim() === "") {
			return false;
		}
		return true;
	};

	const handleSubmit = () => {
		setLoading(true);
		if (validateForm()) {
			const payload = {
				username,
				password,
			};
			axios
				.post("/api/auth/admin", payload)
				.then((response) => {
					if (response.status === 200 && !response?.data.error) {
						setLoading(false);
						toast.success("Admin Logged in successfully!");
						router.push("/dashboard");
					} else {
						setLoading(false);
						if (response.status === 401) {
							toast.error("Invalid username or password");
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
						Admin Login
					</span>
					<div className='my-4'>
						<Chip label='Login to your admin account' />
					</div>

					<div className='flex flex-col items-center justify-between gap-4'>
						<TextField
							className='w-[70%]'
							id='client-name'
							required
							value={username}
							onChange={(e) => setUserName(e.target.value)}
							label='Username'
							placeholder='Enter Admin username'
							variant='outlined'
						/>

						<TextField
							className='w-[70%]'
							required
							type='password'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							label='Password'
							placeholder='Enter your Registered Password'
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
