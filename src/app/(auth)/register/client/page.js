"use client";

import React, { useState } from "react";
import { TextField, Grid, Chip, Button } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import toast from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";

function ClientRegister() {
	const router = useRouter();

	const [clientName, setClientName] = useState("");
	const [fatherName, setFatherName] = useState("");
	const [companyName, setCompanyName] = useState("");
	const [labourCategory, setLabourCategory] = useState("");
	const [mobileNumber, setMobileNumber] = useState("");
	const [emailId, setEmailId] = useState("");
	const [residentialAddress, setResidentialAddress] = useState("");
	const [password, setPassword] = useState("");

	const [confirmPassword, setConfirmPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState([]);

	const confirmPasswordCheck = (password, confirmPassword) => {
		if (password.length < 8 || confirmPassword.length < 8) {
			toast.error("Password must be at least 8 characters long.");
			return false;
		}

		if (password !== confirmPassword) {
			toast.error("Password and Confirm Password do not match.");
			setConfirmPassword("");
			setPassword("");
			return false;
		}

		return true;
	};

	const validateForm = () => {
		if (clientName.trim() === "") {
			return false;
		}
		if (fatherName.trim() === "") {
			return false;
		}
		if (companyName.trim() === "") {
			return false;
		}
		if (labourCategory.trim() === "") {
			return false;
		}
		if (mobileNumber.trim() === "") {
			return false;
		}
		if (emailId.trim() === "") {
			return false;
		}
		if (residentialAddress.trim() === "") {
			return false;
		}

		return true;
	};

	const handleSubmit = () => {
		setLoading(true);
		if (validateForm()) {
			if (confirmPasswordCheck(confirmPassword, password)) {
				const payload = {
					clientName,
					fatherName,
					emailId,
					password,
					mobileNumber,
					residentialAddress,
					companyName,
					labourCategory,
				};
				axios
					.post("/api/auth/register/client", payload)
					.then((response) => {
						setData(response.data);
						setLoading(false);
						toast.success("Client registered successfully!");
						router.push("/client");
					})
					.catch((error) => {
						setLoading(false);
						toast.error(error.message);
					});
			}
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
						Client Registration Form
					</span>
					<div className='my-4'>
						<Chip label='Personal Details' />
					</div>
					<Grid className='m-2 mx-4' container spacing={2}>
						<Grid item xs={12} sm={4}>
							<TextField
								className='w-[90%]'
								id='client-name'
								required
								value={clientName}
								onChange={(e) => setClientName(e.target.value)}
								label='Client Name'
								placeholder='Enter your Full Name'
								variant='outlined'
							/>
						</Grid>
						<Grid item xs={12} sm={4}>
							<TextField
								className='w-[90%]'
								id='father-name'
								required
								value={fatherName}
								onChange={(e) => setFatherName(e.target.value)}
								label="Father's Name"
								placeholder="Enter your Father's Name"
								variant='outlined'
							/>
						</Grid>
						<Grid item xs={12} sm={4}>
							<TextField
								className='w-[90%]'
								id='company-name'
								label='Company Name'
								value={companyName}
								onChange={(e) => setCompanyName(e.target.value)}
								placeholder='Enter your Company Name'
								variant='outlined'
							/>
						</Grid>
						<Grid item xs={12} sm={4}>
							<TextField
								className='w-[90%]'
								id='labour-category'
								required
								value={labourCategory}
								onChange={(e) => setLabourCategory(e.target.value)}
								label='Labour Category'
								placeholder='Mention Labour Category'
								variant='outlined'
							/>
						</Grid>
						<Grid item xs={12} sm={4}>
							<TextField
								className='w-[90%]'
								required
								type='number'
								value={mobileNumber}
								onChange={(e) => setMobileNumber(e.target.value)}
								label='Mobile Number'
								placeholder='Enter your Mobile Number'
								variant='outlined'
							/>
						</Grid>
						<Grid item xs={12} sm={4}>
							<TextField
								className='w-[90%]'
								required
								type='email'
								value={emailId}
								onChange={(e) => setEmailId(e.target.value)}
								label='Email Id'
								placeholder='Enter your email address'
								variant='outlined'
							/>
						</Grid>
						<Grid item xs={12} sm={4}>
							<TextField
								className='w-[90%]'
								required
								multiline
								rows={3}
								value={residentialAddress}
								onChange={(e) => setResidentialAddress(e.target.value)}
								label='Residential Address'
								placeholder='Enter your complete address'
								variant='outlined'
							/>
						</Grid>
						<Grid item xs={12} sm={4}>
							<TextField
								className='w-[90%]'
								required
								type='password'
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								label='Password'
								placeholder='Set your Password'
								variant='outlined'
							/>
						</Grid>
						<Grid item xs={12} sm={4}>
							<TextField
								className='w-[90%]'
								required
								type='password'
								value={confirmPassword}
								onChange={(e) => setConfirmPassword(e.target.value)}
								label='Confirm Your Password'
								placeholder='Confirm your Password'
								variant='outlined'
							/>
						</Grid>
					</Grid>
					<div className='flex justify-center items-center my-3'>
						<Button
							className='bg-orange-400 text-black w-[90%] hover:bg-orange-600/50'
							variant='contained'
							// color='success'
							disabled={loading}
							onClick={() => {
								handleSubmit();
							}}>
							{loading ? <CircularProgress /> : "Submit"}
						</Button>
					</div>
				</div>
			</div>
		</>
	);
}

export default ClientRegister;
