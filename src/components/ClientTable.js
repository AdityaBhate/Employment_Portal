import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const ClientTable = ({ clients }) => {
	return (
		<TableContainer component={Paper} className='p-2'>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell>Client Name</TableCell>
						<TableCell>Father Name</TableCell>
						<TableCell>Company Name</TableCell>
						<TableCell>Labour Category</TableCell>
						<TableCell>Mobile Number</TableCell>
						<TableCell>Email ID</TableCell>
						<TableCell>Residential Address</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{clients.map((client) => (
						<TableRow
							key={client.id}
							className='cursor-pointer hover:bg-slate-300'>
							<TableCell>{client.clientName}</TableCell>
							<TableCell>{client.fatherName}</TableCell>
							<TableCell>{client.companyName}</TableCell>
							<TableCell>{client.labourCategory}</TableCell>
							<TableCell>{client.mobileNumber}</TableCell>
							<TableCell>{client.emailId}</TableCell>
							<TableCell>{client.residentialAddress}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default ClientTable;
