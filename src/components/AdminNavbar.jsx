import Link from "next/link";
import React from "react";
import Image from "next/image";

function AdminNavbar() {
	return (
		<nav
			id='nav'
			className='flex px-4 py-2 mb-4 items-center justify-between bg-gray-200'>
			<div className='sm:block hidden'>
				<Link href={"/"}>
					<Image src='/emp-logo.png' alt='logo' width={65} height={65} />
				</Link>
			</div>
			<div className='flex-grow'>
				<ul className='flex items-center justify-end gap-2'>
					<li>
						<Link href='/dashboard/labour'>
							<button className='px-4 py-2 bg-slate-100 rounded-md text-sm text-black text-center'>
								Labour
							</button>
						</Link>
					</li>
					<li>
						<Link href='/dashboard/broker'>
							<button className='px-4 py-2 bg-slate-100 rounded-md text-sm text-black text-center'>
								Shram Saathi
							</button>
						</Link>
					</li>
					<li>
						<Link href='/dashboard/client'>
							<button className='px-4 py-2 bg-slate-100 rounded-md text-sm text-black text-center'>
								Client
							</button>
						</Link>
					</li>
					<li>
						<Link href='/dashboard/view-requests'>
							<button className='px-4 py-2 bg-slate-100 rounded-md text-sm text-black text-center'>
								View Request
							</button>
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default AdminNavbar;
