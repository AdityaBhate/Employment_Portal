"use client";
import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import LabourTable from "../../../../components/LabourTable";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";

const LabourPage = () => {
	const [labours, setLabours] = useState([]);
	const [search, setSearch] = useState("");
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			const response = await axios.get("/api/dashboard/broker-all");
			setLabours(response?.data?.labours);
			setLoading(false);
		};
		fetchData();
	}, []);

	const handleSearch = (e) => {
		setSearch(e.target.value);
	};

	const filteredLabours = labours.filter((labour) =>
		labour.labourName.toLowerCase().includes(search.toLowerCase())
	);

	if (loading) {
		return (
			<div className='flex items-center justify-center'>
				<CircularProgress />
			</div>
		);
	}

	return (
		<div className='p-2'>
			<div className='flex items-center justify-between  mb-6'>
				<h1 className='text-xl'>Labour Details</h1>
				<TextField
					label='Search by name'
					variant='standard'
					value={search}
					onChange={handleSearch}
				/>
			</div>
			{labours.length > 0 ? (
				<LabourTable labours={filteredLabours} />
			) : (
				<p>No Brokers available</p>
			)}
		</div>
	);
};

export default LabourPage;
