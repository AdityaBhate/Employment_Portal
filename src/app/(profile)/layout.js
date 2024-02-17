import React from "react";
import { AuthProvider } from "../../providers/auth-provider";

function layout({ children }) {
	return (
		<div>
			<AuthProvider>{children}</AuthProvider>
		</div>
	);
}

export default layout;
