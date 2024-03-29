import React from "react";
import { AuthProvider } from "../../providers/auth-provider";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function layout({ children }) {
	return (
		<div>
			{/* <Navbar />
			<AuthProvider>{children}</AuthProvider>
			<Footer /> */}
			<div className='flex flex-col p-4'>
				<p className='text-center text-5xl font-bold mt-4'>
					❌ Website Down ❌
				</p>
			</div>
		</div>
	);
}

export default layout;
