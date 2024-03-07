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
		<TableContainer component={Paper} className='p-2 border-2 border-zinc-400'>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell className='font-bold'>Client Name</TableCell>
						<TableCell className='font-bold'>Father Name</TableCell>
						<TableCell className='font-bold'>Company Name</TableCell>
						<TableCell className='font-bold'>Labour Category</TableCell>
						<TableCell className='font-bold'>Mobile Number</TableCell>
						<TableCell className='font-bold'>Email ID</TableCell>
						<TableCell className='font-bold'>Residential Address</TableCell>
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
