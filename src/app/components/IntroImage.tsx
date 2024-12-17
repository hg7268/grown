import IntroImg from "../assets/intro.svg";
import DecoImg from "../assets/introdeco.svg";
import Image from "next/image";

const IntroImage = () => {
	return (
		<div className="relative flex">
			{/* <Image src={IntroImg} alt="Intro" width={576} height={377} className="w-[95%] md:w-[600px] lg:w-[567px] mx-auto" /> */}
			<div className="w-[95%] h-[377px] lg:w-[576px] lg:h-[377px] relative">
				<IntroImg className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]" />
			</div>
			<div className="w-[235px] h-[238px] hidden 2xl:block absolute -bottom-16 right-10 translate-x-[100%]">
				<DecoImg />
			</div>
			{/* <Image src={DecoImg} alt="Intro" width={235} height={238} className="hidden 2xl:block absolute -bottom-16 right-10 translate-x-[100%]" /> */}
		</div>
	);
};

export default IntroImage;
