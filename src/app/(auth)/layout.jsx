"use client";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function layout({ children }) {
	return (
		<div>
			{/* <LocalizationProvider dateAdapter={AdapterDayjs}>
				<Navbar />
				{children}
				<Footer />
			</LocalizationProvider> */}
			<div className='flex flex-col p-4'>
				<p className='text-center text-5xl font-bold mt-4'>
					❌ Website Down ❌
				</p>
			</div>
		</div>
	);
}

export default layout;
