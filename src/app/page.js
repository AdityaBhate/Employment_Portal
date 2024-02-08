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
			<div className='flex flex-col min-h-screen'>
				<div className='flex-grow'>
					<div className='m-4'>
						<Carousel className="">
							{items.map((item, i) => (
								<Item key={i} item={item} />
							))}
						</Carousel>
					</div>

					<div className='text-center'>
						<h2 className='text-2xl text-black font-semibold'>
							प्रवासी मजदूर कल्याण सेवा
						</h2>
					</div>
				</div>
			</div>
		</>
	);
}

function Item({ item }) {
	return (
		<div className="flex justify-center">
      <Image src={item.path} className="object-fill m-2 w-full h-full lg:max-h-80 " alt='Image' width={200} height={200} />
    </div>
			
		
	);
}
