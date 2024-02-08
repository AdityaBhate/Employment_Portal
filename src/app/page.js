"use client";

import Footer from "../components/Footer";
import Image from "next/image";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";

export default function Home() {
  var items = [
    {
      path: "/carousel-one.png",
    },
    // {
    //   path: "/Carousel2.jpeg",
    // },
    // {
    //   path: "/Carousel3.jpeg",
    // },
    // {
    //   path: "/Carousel4.jpeg",
    // },
    // {
    //   path: "/Carousel5.jpeg",
    // },
    // {
    //   path: "/Carousel6.jpeg",
    // },
  ];

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow">
          <h4 className="text-center text-xl p-4 text-black mb-auto">Home</h4>
          <div className="m-4">
            <Carousel>
              {items.map((item, i) => (
                <Item key={i} item={item} />
              ))}
            </Carousel>
          </div>

          <div className="text-center">
            <h2 className="text-2xl text-black font-semibold">
              प्रवासी मजदूर कल्याण सेवा
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

function Item({item}) {
  return (
    <Paper className="flex justify-center">
      <Image src={item.path} alt="Image" width={200} height={200}/>
    </Paper>
  );
}
