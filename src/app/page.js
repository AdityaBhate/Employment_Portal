"use client";

import Footer from "../components/Footer";
import Image from "next/image";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import ONE from "../assets/carousel-one.png";
import TWO from "../assets/Carousel2.jpeg";
import THREE from "../assets/Carousel3.jpeg";
import FOUR from "../assets/Carousel4.jpeg";
import FIVE from "../assets/Carousel5.jpeg";
import SIX from "../assets/Carousel6.jpeg";
import Navbar from "../components/Navbar";

export default function Home() {
	var items = [
		{
			path: ONE,
		},
		{
			path: TWO,
		},
		{
			path: THREE,
		},
		{
			path: FOUR,
		},
		{
			path: FIVE,
		},
		{
			path: SIX,
		},
	];

	return (
		<>
			<Navbar />
			<div className='flex flex-col min-h-screen '>
				<div className='flex-grow'>
					<div className='m-4'>
						<Carousel className=''>
							{items.map((item, i) => (
								<Item key={i} item={item} />
							))}
						</Carousel>
					</div>

					<div className='text-center'>
						<h2 className='text-4xl text-black font-semibold'>
							PRAVASI MAZDOOR KALYAN SEVA
						</h2>
					</div>
					<div className='mt-8 flex flex-col gap-16 justify-around items-center'>
						<div className='flex sm:flex-row  gap-16 justify-around items-center'>
							<button className='w-32 h-16 font-semibold bg-orange-400 rounded-md text-sm text-black border-2 border-slate-600 hover:bg-orange-600/50'>
								<a href='/'>Home</a>
							</button>
							<button className='w-32 h-16 font-semibold bg-orange-400 rounded-md text-sm text-black border-2 border-slate-600 hover:bg-orange-600/50'>
								<a href='/dashboard'>Dashboard</a>
							</button>
						</div>
						<div className='flex sm:flex-row gap-16 justify-around items-center'>
							<button className='w-32 h-16 font-semibold bg-orange-400 rounded-md text-sm text-black border-2 border-slate-600 hover:bg-orange-600/50'>
								<a href='/register/labour'>Labour Registration</a>
							</button>
							<button className='w-32 h-16 font-semibold bg-orange-400 rounded-md text-sm text-black border-2 border-slate-600 hover:bg-orange-600/50'>
								<a href='/register/client'>Client Registration</a>
							</button>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}

function Item({ item }) {
	return (
		<div className='flex justify-center'>
			<Image
				src={item.path}
				className='object-fill m-2 w-full h-full lg:max-h-96 '
				alt='Image'
				width={200}
				height={200}
			/>
		</div>
	);
}
//प्रवासी मजदूर कल्याण सेवा
