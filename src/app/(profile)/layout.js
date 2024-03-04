import React from "react";
import { AuthProvider } from "../../providers/auth-provider";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function layout({ children }) {
	return (
		<div>
			<Navbar />
			<AuthProvider>{children}</AuthProvider>
			<Footer />
		</div>
	);
}

export default layout;
