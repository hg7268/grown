import { DiLinux } from "react-icons/di";
import { AiFillApple } from "react-icons/ai";
import { AiOutlineDownload } from "react-icons/ai";
import { AiFillWindows } from "react-icons/ai";
import React from "react";
import ComputerImg from "/assets/supportcom.svg";
import SupportAndroid from "/assets/supportandroid.svg";
import SupportIos from "/assets/supportios.svg";
import DecoLeft from "/assets/supportcomdecoleft.svg";
import DecoRight from "/assets/supportcomdecoright.svg";

const Support = () => {
	return (
		<div style={{ background: "linear-gradient(182.2deg, #FFFFFF 1.9%, #F4F4F4 16.34%, #F4F4F4 50.05%, #F4F4F4 83.75%, #FFFFFF 98.2%)" }} className="z-50">
			<div className="w-[95%] xl:w-[1100px] 2xl:w-[1170px] mx-auto relative">
				<div className="mt-[90px] py-[30px] flex px-8 lg:px-0 items-center flex-col lg:flex-row lg:mt-[60px]">
					<div className="flex-1">
						<div className="relative w-fit">
							<div className="absolute -z-20 -top-24 -left-[60px] px-5">
								<DecoLeft className="w-[290px]" />
							</div>
							<div className="relative">
								<div className="w-[500px] h-[340px] relative -z-10">
									<ComputerImg className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]" />
								</div>
								<div className="absolute top-[65px] left-[50%] -translate-x-[50%] z-50 w-[60%] px-2">
									<button
										className="rounded-[10px] border border-black py-1.5 px-3 flex justify-between items-center cursor-pointer w-full"
										onClick={() => alert("Windows Version Download")}
									>
										<div className="flex items-center gap-4">
											<AiFillWindows size={34} />
											<div className="text-lg font-bold">Windows</div>
										</div>
										<AiOutlineDownload size={30} />
									</button>
									<button
										className="rounded-[10px] mt-4 border border-black py-1.5 px-3 flex justify-between items-center cursor-pointer w-full"
										onClick={() => alert("MacOS Version Download")}
									>
										<div className="flex items-center gap-[14px]">
											<AiFillApple size={36} />
											<div className="text-lg font-bold">MacOS</div>
										</div>
										<AiOutlineDownload size={30} />
									</button>
									<button
										className="rounded-[10px] mt-4 border border-black py-1.5 px-3 flex justify-between items-center cursor-pointer w-full"
										onClick={() => alert("Linux Version Download")}
									>
										<div className="flex items-center gap-4">
											<DiLinux size={34} />
											<div className="text-lg font-bold">Linux</div>
										</div>
										<AiOutlineDownload size={30} />
									</button>
								</div>
							</div>
							<div className="absolute -z-20 -bottom-[57px] -right-[103px] px-5">
								<DecoRight className="w-[290px]" />
							</div>
						</div>
					</div>
					<div className="flex-1 pt-24 lg:pt-6 flex flex-col gap-[50px]">
						<div>
							<h1 className="text-center lg:text-start px-4 lg:px-0 text-[36px] md:text-[40px] lg:text-[40px] leading-[120%] font-extrabold from-[#555555] to-black bg-gradient-to-b bg-clip-text text-transparent">
								Accessible Anytime, Anywhere
							</h1>
							<h2 className="text-center lg:text-start px-4 lg:px-0 mt-4 lg:mt-6 text-[20px] leading-[27px] text-[#666666] max-w-[1070px] mx-auto">
								Effortless Access and Management Across All Platforms – Desktop Apps for Windows, macOS, and Linux, Plus Mobile Apps for Android and iOS.
							</h2>
						</div>
						<div className="mx-auto flex gap-[30px] items-end">
							<SupportAndroid />
							<SupportIos />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Support;
