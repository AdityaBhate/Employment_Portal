import React from "react";
import Link from "next/link";
import Image from "next/image";

function Footer() {
	return (
		<>
			<div
				id='footer'
				className='flex flex-row justify-between p-5 mt-5 bg-gray-200'>
				<div className='flex-1 hidden sm:block'>
					<Link href={"/"}>
						<Image
							src='/emp-logo.png'
							alt='logo'
							width={200}
							height={200}
							className='rounded-xl'
						/>
					</Link>
				</div>
				<div className=''>
					<div className='flex flex-col text-right my-2'>
						<ul>
							<li className='my-2'>
								<Link className='my-2' href='/'>
									Home
								</Link>
							</li>
							<li className='my-2'>
								<Link className='my-2' href='/about'>
									About
								</Link>
							</li>
							<li className='my-2'>
								<Link className='my-2' href='/register/labour'>
									Register
								</Link>
							</li>
							<li className='my-2'>
								<Link className='my-2' href='/dashboard'>
									Dashboard
								</Link>
							</li>
							<li>
								<div className='flex flex-row gap-3'>
									<span className='p-3 bg-gray-300 rounded-full'></span>
									<span className='p-3 bg-gray-300 rounded-full'></span>
									<span className='p-3 bg-gray-300 rounded-full'></span>
								</div>
							</li>
						</ul>
					</div>
				</div>
				<div className='p-[1px] mx-4 bg-gray-500'></div>
				<div className='mx-3 ml-4'>
					<div className='flex flex-col'>
						<h4 className='text-black font-semibold text-lg'>
							Want to Hire Labours?
						</h4>
						<div className='flex flex-col items-end gap-2 text-right my-4'>
							<Link className='my-2' href='/register/client'>
								<span className='bg-orange-500 text-white px-3 py-1 font-light rounded-xl'>
									Register as a client
								</span>
							</Link>
							<Link className='my-2' href='/login/client'>
								<span className='bg-orange-500 text-white px-3 py-1 font-light rounded-xl'>
									Login as a Client
								</span>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Footer;
