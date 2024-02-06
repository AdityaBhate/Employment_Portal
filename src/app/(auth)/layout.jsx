"use client";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

function layout({ children }) {
	return (
		<div>
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				{children}
			</LocalizationProvider>
		</div>
	);
}

export default layout;
