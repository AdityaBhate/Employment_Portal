import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

function loading() {
	return (
		<div className='w-full h-full flex items-center justify-center'>
			<CircularProgress />
		</div>
	);
}

export default loading;
