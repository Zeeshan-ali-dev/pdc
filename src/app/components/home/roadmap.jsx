import React, { useRef } from "react";
import DynamicTitle from "../utils/dynamic-title";
import { motion, useScroll, useTransform } from "framer-motion";
import HoverEffect from "./MouseShine";
// import bg from "../../../assets/hero_bg.svg";
// import bg1 from "../../../assets/landing-bg.png";
import roadmapImage from "../../../assets/roadmap_v2.jpg";
import { useMediaQuery } from "../common/UseMediaQuery/UseMediaQuery";
import Image from "next/image";
import Link from "next/link";

const RoadmapSection = ({ title, color, items, index, roadmapData }) => (

    <motion.div
        className={`flex relative items-center justify-center flex-col md:flex-row pb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} `}
    >
        <motion.div
            className={`flex  relative items-center justify-end mb-5 md:mb-0 w-[200px] md:w-1/2 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            id="title"
        >
            <HoverEffect>
                <h2 data-aos="fade-in" className={`font-medium text-sm text-gray-100 ${index % 2 === 0 ? 'float-right' : 'float-left'} mb-1 p-2 border-[1px] border-[solid] border-[#342CB2] border-opacity-80  w-full px-4 rounded-full bg-transparent text-center max-w-[120px]`}>
                    {title}
                </h2>
            </HoverEffect>
            <div className={`w-0 md:w-60 transition-all border-0 md:border ${index % 2 === 0 ? 'right-0' : 'left-0'} border-[#505050]`}></div>
        </motion.div>
        <div className="flex flex-col">
            <div className={`flex-shrink-0 w-0 h-0 ${index === 0 ? "md:w-10 md:h-10 md:translate-x-[3%]" : "md:w-6 md:h-6"} rounded-full ${index <= 1 ? " bg-pdc-blue" : "bg-pdc-d-gray"} inline-flex items-center ${(index + 1) % 2 === 0 ? 'md:translate-x-[75%]' : 'md:translate-x-[25%]'} justify-center text-white relative z-10`}></div>
            <div className="h-full w-0 md:w-10 mt-4 absolute left-[49%] flex items-center justify-center">
                <div className={`${index === roadmapData.length - 1 ? "h-0" : "h-full"} w-[1px] bg-[#505050] pointer-events-none`}></div>
            </div>
        </div>
        <motion.div
            className={`flex-grow px-0 w-[320px] md:min-w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-0'}`}
            id="desc"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <HoverEffect>
                <div data-aos="fade-in" className={`p-2 px-4 text-base w-full text-[#A7A7A7] rounded-[20px] border-[1px] border-[solid] border-[#342CB2] border-opacity-80 bg-transparent `}>
                    <ul className="list-disc pl-6 md:px-6 py-4">
                        {items.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </HoverEffect>
        </motion.div>
    </motion.div>
);

const Roadmap = () => {
    const isMobile = useMediaQuery("(max-width:768px)");
    const roadmapData = [
        {
            title: "Q4 2023",
            color: "#342CB2",
            items: [
                "Whitepaper release",
                "ICO Launch",
                "Website Launch"
            ],
        },
        {
            title: "Q1 2024",
            color: "#707070",
            items: [
                "PEN App v1 Development start",
                "PEN App v1 Development start",
                "PEN App v1 Development start",
            ],
        },
        {
            title: "Q2 2024",
            color: "#707070",
            items: [
                "Presale 1",
                "Presale 2"
            ],
        },
        {
            title: "Q3 2024",
            color: "#707070",
            items: [
                "Exchange Listings",
                "Shelter booking Dapp"
            ],
        },
        {
            title: "Q4 2024",
            color: "#707070",
            items: [
                "First underground Community Shelter preparation"
            ],
        },
    ];

    return (
        <section className="body-font">
            <DynamicTitle
                title="Roadmap"
                description="see what we’re building and follow us as we get to our goal"
            />
            <div className="container px-5  mx-auto flex flex-wrap">
                <div className="flex flex-col relative items-center md:items-baseline justify-center md:justify-normal h-[100vh] flex-wrap w-full md:max-w-5/6 overflow-hidden">

                    <iframe
                        title="External Site"
                        src="https://pdc-roadmap.vercel.app/"
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                    {/* <div className="flex relative items-center justify-center flex-col mx-auto pl-0 md:pl-10 py-6">
                        {roadmapData.map((data, index) => (
                            <RoadmapSection key={index} roadmapData={roadmapData} {...data} index={index} />
                        ))}
                    </div> */}
                    {/* New changes */}
                    {/* <Image
                        id="hero_img_id"
                        src={isMobile ? roadmapImage : roadmapImage}
                        alt="Pandemic Coin bg"
                        width="auto"
                        height="auto"
                        className={`${isMobile ? "opacity-20 h-[50vh]" : "opacity-20 h-[80vh]"} md:mx-auto rounded-[25px]  object-cover ${isMobile ? "w-screen" : "w-[1100px]"}  `}
                    />

                    <Link
                        href={" https://pdc-roadmap.vercel.app/"}
                        >
                        <button
                            className="bg-[#BB1A37] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-[15px] font-[18px]  rounded-[8px] mx-auto w-[200px] md:w-[220px] text-white"
                        >
                            Roadmap
                        </button>
                    </Link> */}

                </div>
            </div>
        </section>
    );
};

export default Roadmap;
