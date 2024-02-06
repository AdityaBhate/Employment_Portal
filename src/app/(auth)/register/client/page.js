"use client";

import React, { useState, useEffect } from "react";
import { TextField, Grid, Paper, Chip, Button } from "@mui/material";

function ClientRegister() {
	const [clientName, setClientName] = useState("");
	const [fatherName, setFatherName] = useState("");
	const [companyName, setCompanyName] = useState("");
	const [labourCategory, setLabourCategory] = useState("");
	const [mobileNumber, setMobileNumber] = useState("");
	const [emailId, setEmailId] = useState("");
	const [residentialAddress, setResidentialAddress] = useState("");

	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [success, setSuccess] = useState(false);
	const [message, setMessage] = useState("");
	const [data, setData] = useState([]);

	useEffect(() => {}, []);

	return (
		<>
			<div className='flex items-center justify-center h-full'>
				<div className='shadow-md py-6 px-4 w-[85%]'>
					<span className='text-white font-semibold text-xl p-2 bg-black rounded'>
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
					</Grid>
					<div className='flex justify-center my-3'>
						<Button
							className='bg-green-400 text-black'
							variant='contained'
							color='success'>
							Submit
						</Button>
					</div>
				</div>
			</div>
		</>
	);
}

export default ClientRegister;
