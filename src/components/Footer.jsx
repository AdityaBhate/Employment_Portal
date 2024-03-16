import React from "react";
import Link from "next/link";
import Image from "next/image";
import YT from "../assets/youtube.svg";
import INSTA from "../assets/instagram.svg";
import FB from "../assets/facebook.svg";

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
				<div className='flex gap-4 items-center'>
					<div className='flex flex-col text-right my-2 mr-6'>
						<div className='flex flex-col items-start gap-4'>
							<h4 className='text-black font-semibold text-lg'>Useful Links</h4>
							<a href='/' className='p-l text-sm underline'>
								Home
							</a>
							<a href='/about' className='p-l text-sm underline'>
								About
							</a>
							<a href='/register/client' className='p-l text-sm underline'>
								Client Registation
							</a>
							<a href='/register/labour' className='p-l text-sm underline'>
								Labour Registation
							</a>
						</div>
					</div>
					<div className='p-[1px]  mx-4 bg-gray-500'></div>
					<div className='flex flex-col text-right my-2'>
						<ul>
							<li>
								<div className='flex flex-col items-start gap-4'>
									<a
										href='https://youtube.com/@pravasimajdurKalyansewa?si=GteeFK2uPyz2cVmJ'
										target='_blank'
										className='p-3 bg-gray-300 rounded-full'>
										<Image src={YT} alt='youtube' width={20} height={20} />
									</a>
									<a
										href='https://youtube.com/@pravasimajdurKalyansewa?si=GteeFK2uPyz2cVmJ'
										target='_blank'
										className='p-3 bg-gray-300 rounded-full'>
										<Image src={INSTA} alt='youtube' width={20} height={20} />
									</a>
									<a
										href='https://youtube.com/@pravasimajdurKalyansewa?si=GteeFK2uPyz2cVmJ'
										target='_blank'
										className='p-3 bg-gray-300 rounded-full'>
										<Image src={FB} alt='youtube' width={20} height={20} />
									</a>
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
									Client Registration
								</span>
							</Link>
							<Link className='my-2' href='/login/client'>
								<span className='bg-orange-500 text-white px-3 py-1 font-light rounded-xl'>
									Client Login
								</span>
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className='text-sm text-center bg-gray-400 items-center justify-center p-2 flex gap-2'>
				<span>@PMkalyanseva</span>
				<Link href='/terms-and-conditions' className='underline'>
					Terms and condition applied
				</Link>
			</div>
		</>
	);
}

export default Footer;
