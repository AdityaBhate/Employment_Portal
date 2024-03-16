import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "PM Kalyan Seva",
	description: "PM Kalyan Seva Web App",
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				{/* {children} */}
				<div className='flex flex-col p-4'>
					<p className='text-center text-5xl font-bold mt-4'>
						❌ Website Down ❌
					</p>
				</div>
				<Toaster position='top-center' />
			</body>
		</html>
	);
}
