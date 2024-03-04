import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import moment from "moment";

function DetailsModal({ labour, open, handleClose }) {
	return (
		<>
			<Dialog open={open} onClose={handleClose}>
				<DialogTitle>{"Labour Details"}</DialogTitle>
				<DialogContent>
					<DialogContentText>
						<div className='bg-white border-2 shadow-md rounded px-8 pt-6 pb-8 mb-4'>
							<h1 className='text-2xl text-orange-600 font-bold mb-4'>
								Personal Details
							</h1>
							<div className='grid grid-cols-2 gap-4 justify-center'>
								<div className='col-span-2 md:col-span-1'>
									<label className='block text-gray-700 text-base font-bold mb-1'>
										Labour Name
									</label>
									<p className='text-gray-700 text-base'>{labour.labourName}</p>
								</div>
								<div className='col-span-2 md:col-span-1'>
									<label className='block text-gray-700 text-base font-bold mb-1'>
										Father Name
									</label>
									<p className='text-gray-700 text-base'>{labour.fatherName}</p>
								</div>
								<div className='col-span-2 md:col-span-1'>
									<label className='block text-gray-700 text-base font-bold mb-1'>
										Gender
									</label>
									<p className='text-gray-700 text-base'>{labour.gender}</p>
								</div>
								<div className='col-span-2 md:col-span-1'>
									<label className='block text-gray-700 text-base font-bold mb-1'>
										Date of Birth
									</label>
									<p className='text-gray-700 text-base'>
										{moment(labour.dob).format("MM/DD/YYYY")}
									</p>
								</div>
								<div className='col-span-2 md:col-span-1'>
									<label className='block text-gray-700 text-base font-bold mb-1'>
										Caste
									</label>
									<p className='text-gray-700 text-base'>{labour.caste}</p>
								</div>
								<div className='col-span-2 md:col-span-1'>
									<label className='block text-gray-700 text-base font-bold mb-1'>
										Mobile Number
									</label>
									<p className='text-gray-700 text-base'>
										{labour.mobileNumber}
									</p>
								</div>
								<div className='col-span-2 md:col-span-1'>
									<label className='block text-gray-700 text-base font-bold mb-1'>
										Aadhar Number
									</label>
									<p className='text-gray-700 text-base'>
										{labour.aadharNumber}
									</p>
								</div>
								<div className='col-span-2 md:col-span-1'>
									<label className='block text-gray-700 text-base font-bold mb-1'>
										Residential Address
									</label>
									<p className='text-gray-700 text-base'>
										{labour.residentialAddress}
									</p>
								</div>
								<div className='col-span-2 md:col-span-1'>
									<label className='block text-gray-700 text-base font-bold mb-1'>
										District Name
									</label>
									<p className='text-gray-700 text-base'>
										{labour.districtName}
									</p>
								</div>
								<div className='col-span-2 md:col-span-1'>
									<label className='block text-gray-700 text-base font-bold mb-1'>
										State
									</label>
									<p className='text-gray-700 text-base'>{labour.state}</p>
								</div>
								<div className='col-span-2 md:col-span-1'>
									<label className='block text-gray-700 text-base font-bold mb-1'>
										Education
									</label>
									<p className='text-gray-700 text-base'>{labour.education}</p>
								</div>
								<div className='col-span-2 md:col-span-1'>
									<label className='block text-gray-700 text-base font-bold mb-1'>
										Labour Type
									</label>
									<p className='text-gray-700 text-base'>{labour.labourType}</p>
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
									<p className='text-gray-700 text-base'>{labour.bankName}</p>
								</div>
								<div className='col-span-2 md:col-span-1'>
									<label className='block text-gray-700 text-base font-bold mb-1'>
										Branch Name
									</label>
									<p className='text-gray-700 text-base'>{labour.branchName}</p>
								</div>
								<div className='col-span-2 md:col-span-1'>
									<label className='block text-gray-700 text-base font-bold mb-1'>
										Account Name
									</label>
									<p className='text-gray-700 text-base'>
										{labour.accountName}
									</p>
								</div>
								<div className='col-span-2 md:col-span-1'>
									<label className='block text-gray-700 text-base font-bold mb-1'>
										IFSC Code
									</label>
									<p className='text-gray-700 text-base'>{labour.ifscCode}</p>
								</div>
								<div className='col-span-2 md:col-span-1'>
									<label className='block text-gray-700 text-base font-bold mb-1'>
										Account Number
									</label>
									<p className='text-gray-700 text-base'>
										{labour.accountNumber}
									</p>
								</div>
							</div>
						</div>
						<Button className='bg-orange-400'>Make Broker</Button>
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Close</Button>
				</DialogActions>
			</Dialog>
		</>
	);
}

export default DetailsModal;
