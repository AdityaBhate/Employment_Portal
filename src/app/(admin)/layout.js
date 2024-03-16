import AdminNavbar from "../../components/AdminNavbar";
import { AdminProvider } from "../../providers/admin-provider";

export default function DashboardLayout({ children }) {
	return (
		<>
			{/* <AdminProvider>
				<AdminNavbar />
				{children}
			</AdminProvider> */}
			<div className='flex flex-col p-4'>
				<p className='text-center text-5xl font-bold mt-4'>
					❌ Website Down ❌
				</p>
			</div>
		</>
	);
}
