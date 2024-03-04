//! Client profile page
//! Print page for client
//! Link to request labour page
import React from "react";
import { cookies } from "next/headers";
import { db } from "../../../utils/db";
import RequestLabourButton from "../../../components/RequestLabourButton";

const getData = async (id) => {
	const user = await db.client.findFirst({
		where: {
			id: id,
		},
	});
	return user;
};

async function ClientPage() {
	const cookieStore = cookies();
	const clientSessionCookie = cookieStore.get("pmks-client-session");

	const user = await getData(clientSessionCookie.value);

	return (
		<>
			<div className='container mx-auto mt-10 p-4'>
				<div className='mb-4 text-left'>
					<h1 className='text-3xl text-orange-600 font-bold mb-4'>
						Client Profile
					</h1>
				</div>
				<div className='bg-white border-2 shadow-md rounded px-8 pt-6 pb-8 mb-4'>
					<h1 className='text-2xl text-orange-600 font-bold mb-4'>
						Personal Details
					</h1>
					<div className='grid grid-cols-2 gap-4 justify-center'>
						<div className='col-span-2 md:col-span-1'>
							<label className='block text-gray-700 text-base font-bold mb-1'>
								Client Name
							</label>
							<p className='text-gray-700 text-base'>{user.clientName}</p>
						</div>
						<div className='col-span-2 md:col-span-1'>
							<label className='block text-gray-700 text-base font-bold mb-1'>
								Father Name
							</label>
							<p className='text-gray-700 text-base'>{user.fatherName}</p>
						</div>
						<div className='col-span-2 md:col-span-1'>
							<label className='block text-gray-700 text-base font-bold mb-1'>
								Company Name
							</label>
							<p className='text-gray-700 text-base'>{user.companyName}</p>
						</div>
						<div className='col-span-2 md:col-span-1'>
							<label className='block text-gray-700 text-base font-bold mb-1'>
								Labour Category
							</label>
							<p className='text-gray-700 text-base'>{user.labourCategory}</p>
						</div>
						<div className='col-span-2 md:col-span-1'>
							<label className='block text-gray-700 text-base font-bold mb-1'>
								Mobile Number
							</label>
							<p className='text-gray-700 text-base'>{user.mobileNumber}</p>
						</div>
						<div className='col-span-2 md:col-span-1'>
							<label className='block text-gray-700 text-base font-bold mb-1'>
								Email Id
							</label>
							<p className='text-gray-700 text-base'>{user.emailId}</p>
						</div>
						<div className='col-span-2 md:col-span-1'>
							<label className='block text-gray-700 text-base font-bold mb-1'>
								Residential Address
							</label>
							<p className='text-gray-700 text-base'>
								{user.residentialAddress}
							</p>
						</div>
					</div>

					<hr className='mt-8 mb-4' />
					<h1 className='text-2xl text-orange-600 font-bold mb-4 '>
						Request Labours
					</h1>
					<RequestLabourButton />
				</div>
			</div>
		</>
	);
}

export default ClientPage;
