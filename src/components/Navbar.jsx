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
					<Image src='/emp-logo2.jpg' alt='logo' width={100} height={100} />
					<p className='flex flex-col gap-2'>
						<span className='text-3xl font-bold '>
							प्रवासी मजदूर कल्याण सेवा
						</span>
						<span className='text-lg'>Pravashi Majdoor Kalyan Seva</span>
					</p>
				</Link>
			</div>
			<div className='flex-grow'>
				<ul className='flex items-center justify-end gap-6 sm:gap-4 pb-4 sm:pb-0'>
					<li>
						<Link
							className='px-4 py-2 bg-slate-100 rounded-md text-lg text-black'
							href='/about'>
							About
						</Link>
					</li>
					<li>
						<Link
							className='px-4 py-2 bg-slate-100 rounded-md text-lg text-black'
							href='/login/labour'>
							Login
						</Link>
					</li>
					<li>
						<Link
							className='px-4 py-2 bg-orange-500 rounded-md text-lg text-white border-2'
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
