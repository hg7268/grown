import React from "react";
import LogoBackImg from "../assets/levelupback.svg";
import LogoMainImg from "../assets/levelup.svg";
import PlayButton from "../assets/playbtn.svg";
import UpArrow from "../assets/arrowup.svg";
import LevelUpDecoImg from "../assets/levelupdeco.svg";
import LevelUpDecoRightImg from "../assets/levelupdecoRight.svg";

const LevelUp = () => {
	return (
		<div className="py-[30px] mt-[70px]" style={{ background: "linear-gradient(182.2deg, #FFFFFF 1.9%, #F4F4F4 16.34%, #F4F4F4 50.05%, #F4F4F4 83.75%, #FFFFFF 98.2%)" }}>
			<div className="flex flex-col">
				<h1 className="text-center text-[40px] md:text-[42px] lg:text-[48px] leading-[104%] font-extrabold from-[#555555] to-black bg-gradient-to-b bg-clip-text text-transparent">
					Level up your&nbsp;
					<span className="from-[#555555] to-black bg-gradient-to-b bg-clip-text font-extrabold relative after:absolute after:bottom-0 after:left-0 after:w-[100%] after:translate-y-[40%] after:h-[30%] after:bg-contain after:bg-no-repeat after:bg-[url('/font_underline.png')] after:-z-20">
						quality&nbsp;
					</span>
					of work
				</h1>
				<h2 className="px-[50px] text-center mt-4 text-[20px] leading-[27px] text-[#666666] max-w-[1070px] mx-auto">
					Lorem ipsum dolor sit amet consectetur. Rhoncus porttitor velit bibendum rutrum pharetra semper. Cursus nunc ultrices nulla dapibus purus semper penatibus sit quis. Morbi amet
					gravida scelerisque proin amet morbi.
				</h2>
			</div>
			<div className="relative">
				<div className="mt-[50px] flex justify-center w-[95%] lg:w-[970px] h-[400px] lg:h-[560px] mx-auto rounded-[20px] bg-white shadow-[0px_10px_25px_-3px_#00000026] overflow-hidden">
					<LogoBackImg className="absolute -translate-x-[50%] -translate-y-[50%] left-[50%] top-[50%] hidden lg:block" />
					<LogoMainImg className="absolute -translate-x-[50%] -translate-y-[50%] left-[50%] top-[50%]" />
					<button className="absolute left-[50%] -translate-x-[50%] bottom-[40px]">
						<PlayButton className="w-[71px] h-[71px] z-10" />
					</button>
				</div>
				<div className="absolute -translate-y-[50%] left-0 top-[50%] -z-30 hidden lg:block">
					<LevelUpDecoImg style={{ filter: "grayscale(1)" }} />
				</div>
				<div className="absolute -translate-y-[50%] right-0 top-[50%] -z-30 hidden lg:block">
					<LevelUpDecoRightImg style={{ filter: "grayscale(1)" }} />
				</div>
			</div>
			<div className="mt-[30px] flex">
				<div className="text-lg mx-auto leading-[120%] font-medium relative text-[#797979]">
					Click To Play The Video
					<UpArrow className="absolute bottom-2 right-0 translate-x-[60%]" />
				</div>
			</div>
		</div>
	);
};

export default LevelUp;
