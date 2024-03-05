"use client";

import moment from "moment";
import { useState, useEffect } from "react";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

function LabourDetails({ params }) {
	const router = useRouter();
	const [user, setUser] = useState({});
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			const response = await axios.post(`/api/dashboard/labour-detail`, {
				id: params.id,
			});
			setUser(response?.data?.user);
			setLoading(false);
		};
		fetchData();
	}, []);

	const makeBroker = async (id) => {
		const response = await axios.post(`/api/broker/create`, {
			id,
		});
		toast.success(response?.data?.message);
	};

	if (loading) {
		<div className='flex items-center justify-center'>
			<CircularProgress />
		</div>;
	}

	return (
		<div className='container mx-auto mt-10 p-4'>
			<div className='mb-4 text-left'>
				<h1 className='text-3xl text-orange-600 font-bold mb-4'>
					Labour Profile
				</h1>
			</div>
			<div className='bg-white border-2 shadow-md rounded px-8 pt-6 pb-8 mb-4'>
				<h1 className='text-2xl text-orange-600 font-bold mb-4'>
					Personal Details
				</h1>
				<div className='grid grid-cols-2 gap-4 justify-center'>
					<div className='col-span-2 md:col-span-1'>
						<label className='block text-gray-700 text-base font-bold mb-1'>
							Labour Name
						</label>
						<p className='text-gray-700 text-base'>{user.labourName}</p>
					</div>
					<div className='col-span-2 md:col-span-1'>
						<label className='block text-gray-700 text-base font-bold mb-1'>
							Father Name
						</label>
						<p className='text-gray-700 text-base'>{user.fatherName}</p>
					</div>
					<div className='col-span-2 md:col-span-1'>
						<label className='block text-gray-700 text-base font-bold mb-1'>
							Gender
						</label>
						<p className='text-gray-700 text-base'>{user.gender}</p>
					</div>
					<div className='col-span-2 md:col-span-1'>
						<label className='block text-gray-700 text-base font-bold mb-1'>
							Date of Birth
						</label>
						<p className='text-gray-700 text-base'>
							{moment(user.dob).format("MM/DD/YYYY")}
						</p>
					</div>
					<div className='col-span-2 md:col-span-1'>
						<label className='block text-gray-700 text-base font-bold mb-1'>
							Caste
						</label>
						<p className='text-gray-700 text-base'>{user.caste}</p>
					</div>
					<div className='col-span-2 md:col-span-1'>
						<label className='block text-gray-700 text-base font-bold mb-1'>
							Mobile Number
						</label>
						<p className='text-gray-700 text-base'>{user.mobileNumber}</p>
					</div>
					<div className='col-span-2 md:col-span-1'>
						<label className='block text-gray-700 text-base font-bold mb-1'>
							Aadhar Number
						</label>
						<p className='text-gray-700 text-base'>{user.aadharNumber}</p>
					</div>
					<div className='col-span-2 md:col-span-1'>
						<label className='block text-gray-700 text-base font-bold mb-1'>
							Residential Address
						</label>
						<p className='text-gray-700 text-base'>{user.residentialAddress}</p>
					</div>
					<div className='col-span-2 md:col-span-1'>
						<label className='block text-gray-700 text-base font-bold mb-1'>
							District Name
						</label>
						<p className='text-gray-700 text-base'>{user.districtName}</p>
					</div>
					<div className='col-span-2 md:col-span-1'>
						<label className='block text-gray-700 text-base font-bold mb-1'>
							State
						</label>
						<p className='text-gray-700 text-base'>{user.state}</p>
					</div>
					<div className='col-span-2 md:col-span-1'>
						<label className='block text-gray-700 text-base font-bold mb-1'>
							Education
						</label>
						<p className='text-gray-700 text-base'>{user.education}</p>
					</div>
					<div className='col-span-2 md:col-span-1'>
						<label className='block text-gray-700 text-base font-bold mb-1'>
							Labour Type
						</label>
						<p className='text-gray-700 text-base'>{user.labourType}</p>
					</div>
				</div>

				{/* bank details */}
				<hr className='mt-8 mb-4' />
				<h1 className='text-2xl text-orange-600 font-bold mb-4 '>
					Bank Details
				</h1>
				<div className='grid grid-cols-2 gap-4 justify-center'>
					<div className='col-span-2 md:col-span-1'>
						<label className='block text-gray-700 text-base font-bold mb-1'>
							Bank Name
						</label>
						<p className='text-gray-700 text-base'>{user.bankName}</p>
					</div>
					<div className='col-span-2 md:col-span-1'>
						<label className='block text-gray-700 text-base font-bold mb-1'>
							Branch Name
						</label>
						<p className='text-gray-700 text-base'>{user.branchName}</p>
					</div>
					<div className='col-span-2 md:col-span-1'>
						<label className='block text-gray-700 text-base font-bold mb-1'>
							Account Name
						</label>
						<p className='text-gray-700 text-base'>{user.accountName}</p>
					</div>
					<div className='col-span-2 md:col-span-1'>
						<label className='block text-gray-700 text-base font-bold mb-1'>
							IFSC Code
						</label>
						<p className='text-gray-700 text-base'>{user.ifscCode}</p>
					</div>
					<div className='col-span-2 md:col-span-1'>
						<label className='block text-gray-700 text-base font-bold mb-1'>
							Account Number
						</label>
						<p className='text-gray-700 text-base'>{user.accountNumber}</p>
					</div>
				</div>
				{/* broker details */}
				{user.isBroker ? (
					<>
						<hr className='mt-8 mb-4' />
						<h1 className='text-2xl text-orange-600 font-bold mb-4 '>
							Broker Details
						</h1>
						<div className='grid grid-cols-2 gap-4 justify-center'>
							<div className='col-span-2 md:col-span-1'>
								<label className='block text-gray-700 text-base font-bold mb-1'>
									BrokerCode
								</label>
								<p className='text-gray-700 text-base'>{user.brokerCode}</p>
							</div>
							<div className='col-span-2 md:col-span-1'>
								<button
									onClick={() => router.push(`/broker/${code}`)}
									className='px-4 py-2 bg-orange-400 color-white rounded-md'>
									See All Referrals
								</button>
							</div>
						</div>
					</>
				) : (
					<>
						<hr className='mt-8 mb-4' />
						<h1 className='text-2xl text-orange-600 font-bold mb-4 '>
							Make him a Broker?
						</h1>
						<div className='grid grid-cols-2 gap-4 justify-center'>
							<div className='col-span-2 md:col-span-1'>
								<button
									onClick={() => makeBroker(user.id)}
									className='px-4 py-2 bg-orange-400 color-white rounded-md hover:bg-orange-500'>
									Genetate BrokerCode
								</button>
							</div>
						</div>
					</>
				)}
			</div>
		</div>
	);
}

export default LabourDetails;
