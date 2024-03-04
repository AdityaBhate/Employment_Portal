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
			<TableContainer component={Paper} className='p-2'>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>Labour Name</TableCell>
							<TableCell>Father Name</TableCell>
							<TableCell>Gender</TableCell>
							<TableCell>Date of Birth</TableCell>
							<TableCell>Caste</TableCell>
							<TableCell>Mobile Number</TableCell>

							<TableCell>Residential Address</TableCell>
							<TableCell>District Name</TableCell>
							<TableCell>State</TableCell>
							<TableCell>Education</TableCell>
							<TableCell>Labour Type</TableCell>
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
