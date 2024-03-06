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
				<div className=''>
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
		</>
	);
}

export default Footer;
