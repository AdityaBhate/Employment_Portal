"use client";

import { TextField, Grid, Chip, Button } from "@mui/material";
import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { indianStates } from "../../../../utils/states";
import { labourCategory } from "../../../../utils/labour-category";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import CircularProgress from "@mui/material/CircularProgress";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import axios from "axios";

function LabourRegister() {
	const router = useRouter();

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
	const [labourType, setLabourType] = useState("");
	const [state, setState] = useState("");
	const [bankName, setBankName] = useState("");
	const [branchName, setBranchName] = useState("");
	const [accountName, setAccountName] = useState("");
	const [ifscCode, setIfscCode] = useState("");
	const [accountNumber, setAccountNumber] = useState("");
	const [referedBy, setReferedBy] = useState("");

	const [loading, setLoading] = useState(false);
	const [data, setData] = useState([]);

	const validateForm = () => {
		let isValid = true;

		if (labourName === "") {
			isValid = false;
		}
		if (state === "") {
			isValid = false;
		}

		if (fatherName === "") {
			isValid = false;
		}
		if (gender === "") {
			isValid = false;
		}
		if (dob === "") {
			isValid = false;
		}
		if (caste === "") {
			isValid = false;
		}
		if (mobileNumber === "") {
			isValid = false;
		}
		if (aadharNumber === "") {
			isValid = false;
		}
		if (districtName === "") {
			isValid = false;
		}
		if (residentialAddress === "") {
			isValid = false;
		}
		if (education === "") {
			isValid = false;
		}
		if (labourType === "") {
			isValid = false;
		}
		if (bankName === "") {
			isValid = false;
		}
		if (branchName === "") {
			isValid = false;
		}
		if (accountName === "") {
			isValid = false;
		}
		if (ifscCode === "") {
			isValid = false;
		}
		if (accountNumber === "") {
			isValid = false;
		}
		return isValid;
	};

	const registerLabour = async () => {
		setLoading(true);
		if (validateForm()) {
			const payload = {
				labourName,
				fatherName,
				gender,
				dob,
				caste,
				mobileNumber,
				aadharNumber,
				districtName,
				residentialAddress,
				education,
				labourType,
				state,
				bankName,
				branchName,
				accountName,
				ifscCode,
				accountNumber,
				referedBy,
			};
			axios
				.post("/api/auth/register/labour", payload)
				.then((response) => {
					setData(response.data);
					setLoading(false);
					toast.success("Labour registered successfully!");
					router.push("/labour");
				})
				.catch((error) => {
					setLoading(false);
					toast.error(error.message);
				});
		} else {
			setLoading(false);
			toast.error("Please fill all required fields correctly.");
		}
	};

	return (
		<>
			<div className='flex items-center justify-center h-full'>
				<div className='shadow-md py-6 px-4 w-[85%]'>
					<span className='text-white font-semibold text-xl p-2 bg-orange-500 rounded'>
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
							<FormControl className='w-[90%]'>
								<InputLabel id='demo-simple-select-label'>
									Labour Type
								</InputLabel>
								<Select
									labelId='demo-simple-select-label'
									id='demo-simple-select'
									label='Labour Type'
									value={labourType}
									onChange={(e) => setLabourType(e.target.value)}>
									{labourCategory?.map((type) => (
										<MenuItem key={type} value={type}>
											{type}
										</MenuItem>
									))}
								</Select>
							</FormControl>
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
									{indianStates?.map((state) => (
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
					<div className='mt-6 mb-4'>
						<Chip label='Broker Code (Optional)' />
					</div>
					<Grid className='m-2 mx-4' container spacing={2}>
						<Grid item xs={12} sm={4}>
							<TextField
								className='w-[90%]'
								label='Referral Broker Code'
								placeholder='Enter Referred Broker Code'
								variant='outlined'
								value={referedBy}
								onChange={(e) => setReferedBy(e.target.value)}
							/>
						</Grid>
					</Grid>
					<div className='flex items-center justify-center mx-4 my-6 w-full'>
						<Button
							className='bg-orange-400 text-black w-[90%] hover:bg-orange-600/50'
							variant='contained'
							color='success'
							disabled={loading}
							onClick={() => registerLabour()}>
							{loading ? <CircularProgress /> : "Submit"}
						</Button>
					</div>
				</div>
			</div>
		</>
	);
}

export default LabourRegister;
