import AdminNavbar from "../../components/AdminNavbar";
import { Toaster } from "react-hot-toast";

export default function DashboardLayout({ children }) {
	return (
		<>
			<AdminNavbar />
			{children}
		</>
	);
}
