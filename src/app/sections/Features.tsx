import Image from "next/image";
import React, { useState } from "react";
import FeatureRightImg from "../assets/feature_com.png";
import ArrowImg from "../assets/feature_arrow.png";
import DecoPolygon from "../assets/blue_polygon.png";
import FeatureDropdown from "../components/FeatureDropdown";

const Features = () => {
	const [activemenu, setActivemenu] = useState(1);

	return (
		<div style={{ background: "linear-gradient(182.2deg, #FFFFFF 1.9%, #F4F4F4 16.34%, #F4F4F4 50.05%, #F4F4F4 83.75%, #FFFFFF 98.2%)" }}>
			<div className="w-[95%] xl:w-[1100px] 2xl:w-[1170px] mx-auto">
				<div className="my-9 flex flex-col relative">
					<h1 className="text-center text-[40px] md:text-[42px] lg:text-[48px] leading-[104%] font-extrabold from-[#555555] to-black bg-gradient-to-b bg-clip-text text-transparent">
						<span className="from-[#555555] to-black bg-gradient-to-b bg-clip-text font-extrabold relative after:absolute after:bottom-0 after:left-0 after:w-[100%] after:translate-y-[40%] after:h-[30%] after:bg-contain after:bg-no-repeat after:bg-[url('/font_underline.png')] after:-z-20">
							GrowNext&nbsp;
						</span>
						Your ultimate workspace
					</h1>
					<h2 className="px-[10px] md:px-6 lg:px-[50px] text-center mt-4 text-[20px] leading-[120%] text-[#666666]">
						Lorem ipsum dolor sit amet consectetur. Rhoncus porttitor velit bibendum rutrum pharetra semper. Cursus nunc ultrices nulla dapibus purus semper penatibus sit quis. Morbi amet
						gravida scelerisque proin amet morbi.
					</h2>
					<div className="flex mt-[70px] items-end">
						<FeatureDropdown submenu={activemenu} onChange={setActivemenu} />
						<div className="flex mx-auto relative -mb-4">
							<Image src={FeatureRightImg} alt="Our Features" width={1450} height={940} className="w-[676px] mx-auto z-10" />
							{activemenu == 1 && <div className="text-[30px] font-bold absolute z-20 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">Collaboration</div>}
							{activemenu == 2 && <div className="text-[30px] font-bold absolute z-20 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">Task & Projects</div>}
							{activemenu == 3 && <div className="text-[30px] font-bold absolute z-20 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">Sites & Stores</div>}
							{activemenu == 4 && <div className="text-[30px] font-bold absolute z-20 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">HR & Automation</div>}
							{activemenu == 5 && <div className="text-[30px] font-bold absolute z-20 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">CMS</div>}
							<Image src={DecoPolygon} alt="#" width={572} height={630} className="hidden md:block absolute w-[280px] h-[280px] right-0 top-0 translate-x-[3%] -translate-y-[20%]" />
						</div>
					</div>
					<div className="relative flex">
						<button className="mt-4 md:mt-6 lg:mt-[66px] mx-auto rounded-[32px] bg-gradient-to-b from-[#555555] to-[#000000] text-white py-[0.5rem] px-[1rem]">Explore All Features</button>
						<div className="absolute -bottom-3 left-[48.5%] lg:-translate-x-[170%] md:-translate-x-[180%] -translate-x-[200%]">
							<Image src={ArrowImg} alt="↓" width={314} height={219} className="w-[100px] md:w-[120px] lg:w-[150px] sm:block hidden" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Features;
