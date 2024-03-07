// components/LabourTable.js

import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import moment from "moment";

const LabourTable = ({ labours }) => {
	return (
		<>
			<TableContainer
				component={Paper}
				className='p-2 border-2 border-zinc-400'>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell className='font-bold'>Labour Name</TableCell>
							<TableCell className='font-bold'>Father Name</TableCell>
							<TableCell className='font-bold'>Gender</TableCell>
							<TableCell className='font-bold'>Date of Birth</TableCell>
							<TableCell className='font-bold'>Caste</TableCell>
							<TableCell className='font-bold'>Mobile Number</TableCell>
							<TableCell className='font-bold'>Residential Address</TableCell>
							<TableCell className='font-bold'>District Name</TableCell>
							<TableCell className='font-bold'>State</TableCell>
							<TableCell className='font-bold'>Education</TableCell>
							<TableCell className='font-bold'>Labour Type</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{labours.map((labour) => (
							<TableRow
								key={labour.id}
								onClick={() => {
									window.location.href = `/dashboard/labour/${labour.id}`;
								}}
								className='cursor-pointer hover:bg-slate-300'>
								<TableCell>{labour.labourName}</TableCell>
								<TableCell>{labour.fatherName}</TableCell>
								<TableCell>{labour.gender}</TableCell>
								<TableCell>{moment(labour.dob).format("MM/DD/YYYY")}</TableCell>
								<TableCell>{labour.caste}</TableCell>
								<TableCell>{labour.mobileNumber}</TableCell>

								<TableCell>{labour.residentialAddress}</TableCell>
								<TableCell>{labour.districtName}</TableCell>
								<TableCell>{labour.state}</TableCell>
								<TableCell>{labour.education}</TableCell>
								<TableCell>{labour.labourType}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
};

export default LabourTable;
