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
				{children}
				<Toaster position='top-center' />
			</body>
		</html>
	);
}
