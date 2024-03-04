import Link from "next/link";
import React from "react";
import Image from "next/image";

function AdminNavbar() {
	return (
		<nav
			id='nav'
			className='flex px-4 py-2 mb-4 items-center justify-between bg-gray-200'>
			<div>
				<Link href={"/"}>
					<Image src='/emp-logo.png' alt='logo' width={65} height={65} />
				</Link>
			</div>
			<div className='flex-grow'>
				<ul className='flex items-center justify-end gap-2'>
					<li>
						<Link
							className='px-4 py-2 bg-slate-100 rounded-md text-sm text-black'
							href='/dashboard/labour'>
							Labour
						</Link>
					</li>
					<li>
						<Link
							className='px-4 py-2 bg-slate-100 rounded-md text-sm text-black'
							href='/dashboard/broker'>
							Broker
						</Link>
					</li>
					<li>
						<Link
							className='px-4 py-2 bg-slate-100 rounded-md text-sm text-black'
							href='/dashboard/client'>
							Client
						</Link>
					</li>
					<li>
						<Link
							className='px-4 py-2 bg-slate-100 rounded-md text-sm text-black'
							href='/dashboard/view-requests'>
							View Requests
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default AdminNavbar;
