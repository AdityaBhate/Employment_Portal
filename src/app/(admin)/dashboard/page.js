"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { CircularProgress } from "@mui/material";

function DashboardPage() {
	const [metrics, setMetrics] = useState(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		async function getMetrics() {
			try {
				setLoading(true);
				const metrics = await axios.get("/api/dashboard/metrics");
				setMetrics(metrics?.data);
				setLoading(false);
			} catch (error) {
				console.error("Error fetching metrics:", error);
			}
		}

		getMetrics();
	}, []);

	if (loading) {
		return (
			<div className='flex items-center justify-center'>
				<CircularProgress />
			</div>
		);
	}

	return (
		<div className='container mx-auto mt-8 px-4'>
			<h1 className='text-3xl font-bold text-left mb-4'>PM Kalyan Dashboard</h1>
			<div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
				<div className='bg-white rounded-lg shadow-md p-4 border-2 border-zinc-300'>
					<h2 className='text-lg font-semibold mb-2'>Labour Count</h2>
					<p className='text-xl'>{metrics?.labours}</p>
				</div>
				<div className='bg-white rounded-lg shadow-md p-4 border-2 border-zinc-300'>
					<h2 className='text-lg font-semibold mb-2'>Client Count</h2>
					<p className='text-xl'>{metrics?.clients}</p>
				</div>
				<div className='bg-white rounded-lg shadow-md p-4 border-2 border-zinc-300'>
					<h2 className='text-lg font-semibold mb-2'>Broker Count</h2>
					<p className='text-xl'>{metrics?.allBrokers}</p>
				</div>
			</div>
		</div>
	);
}

export default DashboardPage;
