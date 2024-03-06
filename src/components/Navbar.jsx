import Link from "next/link";
import React from "react";
import Image from "next/image";

function Navbar() {
	return (
		<nav
			id='nav'
			className='flex sm:flex-row flex-col px-4 py-4 mb-4 items-center justify-between sm:gap-0 gap-6 bg-gray-200'>
			<div>
				<Link href={"/"} className='flex items-center justify-center gap-4'>
					<Image src='/emp-logo2.jpg' alt='logo' width={120} height={120} />
					<p className='text-4xl font-bold '>प्रवासी मजदूर कल्याण सेवा</p>
				</Link>
			</div>
			<div className='flex-grow'>
				<ul className='flex items-center justify-end gap-6 sm:gap-4 pb-4 sm:pb-0'>
					<li>
						<Link
							className='px-6 py-4 bg-slate-100 rounded-md text-sm text-black border-2 border-slate-600'
							href='/login/labour'>
							Login
						</Link>
					</li>
					<li>
						<Link
							className='px-6 py-4 bg-orange-500 rounded-md text-sm text-white border-2 border-slate-600'
							href='/register/labour'>
							Register
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
