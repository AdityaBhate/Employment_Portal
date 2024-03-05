"use client";

import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import LabourTable from "../../../../components/LabourTable";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";

const LabourPage = ({ params }) => {
	const [labours, setLabours] = useState([]);
	const [search, setSearch] = useState("");
	const [loading, setLoading] = useState(false);
	const code = params.id;
	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			const response = await axios.get("/api/dashboard/labour");
			const allLabours = response?.data?.labours;
			setLabours(
				allLabours.filter(
					(labour) => labour.referedBy === code && labour.brokerCode !== code
				)
			);
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
				<h1 className='text-xl'>All Labours Referred by {code}</h1>
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
				<p>No Labours Exists</p>
			)}
		</div>
	);
};

export default LabourPage;
