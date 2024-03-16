import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Layout({ children }) {
	return (
		<div>
			{/* <Navbar />
			{children}
			<Footer /> */}
			<div className='flex flex-col p-4'>
				<p className='text-center text-5xl font-bold mt-4'>
					❌ Website Down ❌
				</p>
			</div>
		</div>
	);
}
