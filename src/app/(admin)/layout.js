import AdminNavbar from "../../components/AdminNavbar";
import { AdminProvider } from "../../providers/admin-provider";

export default function DashboardLayout({ children }) {
	return (
		<>
			<AdminProvider>
				<AdminNavbar />
				{children}
			</AdminProvider>
		</>
	);
}
