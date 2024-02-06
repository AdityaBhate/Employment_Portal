"use client";

import { TextField, Grid, Paper, Chip, Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { indianStates } from "@/utils/states";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import toast from "react-hot-toast";

function LabourRegister() {
	const [labourName, setLabourName] = useState("");
	const [fatherName, setFatherName] = useState("");
	const [gender, setGender] = useState("");
	const [dob, setDob] = useState("");
	const [caste, setCaste] = useState("");
	const [mobileNumber, setMobileNumber] = useState("");
	const [aadharNumber, setAadharNumber] = useState("");
	const [districtName, setDistrictName] = useState("");
	const [residentialAddress, setResidentialAddress] = useState("");
	const [education, setEducation] = useState("");
	const [workEfficiency, setWorkEfficiency] = useState("");
	const [state, setState] = useState("");
	const [bankName, setBankName] = useState("");
	const [branchName, setBranchName] = useState("");
	const [accountName, setAccountName] = useState("");
	const [ifscCode, setIfscCode] = useState("");
	const [accountNumber, setAccountNumber] = useState("");

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
						Labour Registration Form
					</span>
					<div className='mt-6 mb-4'>
						<Chip label='Personal Details' />
					</div>
					<Grid className='m-2 mx-4' container spacing={2}>
						<Grid item xs={12} sm={4}>
							<TextField
								className='w-[90%]'
								required
								value={labourName}
								onChange={(e) => setLabourName(e.target.value)}
								label='Labour Name'
								placeholder='Enter Full Name'
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
								placeholder="Enter Father's Name"
								variant='outlined'
							/>
						</Grid>
						<Grid item xs={12} sm={4}>
							<FormControl className='w-[90%]'>
								<InputLabel id='demo-simple-select-label'>Gender</InputLabel>
								<Select
									labelId='demo-simple-select-label'
									id='demo-simple-select'
									value={gender}
									onChange={(e) => setGender(e.target.value)}
									label='Gender'>
									<MenuItem value={"male"}>Male</MenuItem>
									<MenuItem value={"female"}>Female</MenuItem>
									<MenuItem value={"Other"}>Other</MenuItem>
								</Select>
							</FormControl>
						</Grid>
						<Grid item xs={12} sm={4}>
							<DatePicker
								label='Date of Birth'
								className='w-[90%]'
								required
								value={dob}
								onChange={(newValue) => setDob(newValue)}
								placeholder='DD/MM/YYYY'
								variant='outlined'
							/>
						</Grid>
						<Grid item xs={12} sm={4}>
							<TextField
								className='w-[90%]'
								label='Caste'
								placeholder='Enter your caste'
								variant='outlined'
								value={caste}
								onChange={(e) => setCaste(e.target.value)}
							/>
						</Grid>
						<Grid item xs={12} sm={4}>
							<TextField
								className='w-[90%]'
								required
								label='Mobile Number'
								placeholder='Enter your mobile number'
								variant='outlined'
								value={mobileNumber}
								onChange={(e) => setMobileNumber(e.target.value)}
							/>
						</Grid>
						<Grid item xs={12} sm={4}>
							<TextField
								className='w-[90%]'
								required
								label='Aadhar Number'
								placeholder='Enter your aadhar number'
								variant='outlined'
								value={aadharNumber}
								onChange={(e) => setAadharNumber(e.target.value)}
							/>
						</Grid>
						<Grid item xs={12} sm={4}>
							<TextField
								className='w-[90%]'
								required
								label='District Name'
								placeholder='Enter your District Name'
								variant='outlined'
								value={districtName}
								onChange={(e) => setDistrictName(e.target.value)}
							/>
						</Grid>
						<Grid item xs={12} sm={4}>
							<TextField
								className='w-[90%]'
								required
								multiline
								rows={3}
								label='Residential Address'
								placeholder='Enter your complete address'
								variant='outlined'
								value={residentialAddress}
								onChange={(e) => setResidentialAddress(e.target.value)}
							/>
						</Grid>
						<Grid item xs={12} sm={4}>
							<TextField
								className='w-[90%]'
								label='Education'
								placeholder='Enter your education'
								variant='outlined'
								value={education}
								onChange={(e) => setEducation(e.target.value)}
							/>
						</Grid>
						<Grid item xs={12} sm={4}>
							<TextField
								className='w-[90%]'
								required
								label='Labour Work Efficiency'
								placeholder='Work Efficiency'
								variant='outlined'
								value={workEfficiency}
								onChange={(e) => setWorkEfficiency(e.target.value)}
							/>
						</Grid>
						<Grid item xs={12} sm={4}>
							<FormControl className='w-[90%]'>
								<InputLabel id='demo-simple-select-label'>State</InputLabel>
								<Select
									labelId='demo-simple-select-label'
									id='demo-simple-select'
									label='State'
									value={state}
									onChange={(e) => setState(e.target.value)}>
									{indianStates.map((state) => (
										<MenuItem key={state} value={state}>
											{state}
										</MenuItem>
									))}
								</Select>
							</FormControl>
						</Grid>
					</Grid>

					<div className='mt-6 mb-4'>
						<Chip label='Labour Bank Details' />
					</div>
					<Grid className='m-2 mx-4' container spacing={2}>
						<Grid item xs={12} sm={4}>
							<TextField
								className='w-[90%]'
								required
								label='Bank Name'
								placeholder='State Bank of India'
								variant='outlined'
								value={bankName}
								onChange={(e) => setBankName(e.target.value)}
							/>
						</Grid>
						<Grid item xs={12} sm={4}>
							<TextField
								className='w-[90%]'
								required
								label='Branch Name(Bank)'
								placeholder='Enter Branch Name'
								variant='outlined'
								value={branchName}
								onChange={(e) => setBranchName(e.target.value)}
							/>
						</Grid>
						<Grid item xs={12} sm={4}>
							<TextField
								className='w-[90%]'
								required
								label='Account Name(Labour)'
								placeholder='Enter account name'
								variant='outlined'
								value={accountName}
								onChange={(e) => setAccountName(e.target.value)}
							/>
						</Grid>
						<Grid item xs={12} sm={4}>
							<TextField
								className='w-[90%]'
								required
								label='IFSC Code'
								placeholder='Enter IFSC Code'
								variant='outlined'
								value={ifscCode}
								onChange={(e) => setIfscCode(e.target.value)}
							/>
						</Grid>
						<Grid item xs={12} sm={4}>
							<TextField
								className='w-[90%]'
								required
								label='Account Number'
								placeholder='Enter Account Number'
								variant='outlined'
								value={accountNumber}
								onChange={(e) => setAccountNumber(e.target.value)}
							/>
						</Grid>
					</Grid>
					<div className='flex items-center justify-center mx-4 my-6 w-full'>
						<Button
							className='bg-green-400 text-black w-[90%]'
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

export default LabourRegister;
