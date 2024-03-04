"use client";

import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import ClientTable from "../../../../components/ClientTable";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";

const ClientPage = () => {
	const [clients, setClients] = useState([]);
	const [search, setSearch] = useState("");
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			const response = await axios.get("/api/dashboard/client-all");
			setClients(response?.data?.clients);
			setLoading(false);
		};

		fetchData();
	}, []);

	const handleSearch = (e) => {
		setSearch(e.target.value);
	};

	const filteredClient = clients.filter((client) =>
		client.clientName.toLowerCase().includes(search.toLowerCase())
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
				<h1 className='text-xl'>Client Details</h1>
				<TextField
					label='Search by name'
					variant='standard'
					value={search}
					onChange={handleSearch}
				/>
			</div>
			{clients.length > 0 ? (
				<ClientTable clients={filteredClient} />
			) : (
				<p>No Clients Exists</p>
			)}
		</div>
	);
};

export default ClientPage;
