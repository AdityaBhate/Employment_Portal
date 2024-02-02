import Link from "next/link";
import React from "react";

function Navbar() {
	return (
		<nav className='flex p-2 items-center justify-between mt-4'>
			<div>
				<h2>LOGO</h2>
			</div>
			<div className='w-[15%]'>
				<ul className='flex items-center justify-around'>
					<li>
						<Link
							className='px-4 py-2 bg-slate-100 rounded-md text-sm text-black'
							href='/register/labour'>
							About
						</Link>
					</li>
					<li>
						<Link
							className='px-4 py-2 bg-orange-500 rounded-md text-sm text-white'
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
