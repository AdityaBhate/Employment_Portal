import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

function loading() {
	return (
		<div className='flex items-center justify-center'>
			<CircularProgress />
		</div>
	);
}

export default loading;
