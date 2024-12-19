import Image from "next/image";

const IntroImage = () => {
	return (
		<div className="relative flex">
			<div className="w-[95%] h-[247px] lg:w-[576px] lg:h-[377px] relative">
				<Image src="/intro.svg" alt="#" width={760} height={626} className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]" />
			</div>
			<div className="w-[80px] h-[81px] lg:w-[235px] lg:h-[238px] absolute -bottom-2 lg:-bottom-16 lg:right-10 right-28 translate-x-[100%]">
				<Image src="/introdeco.svg" alt="Intro" width={235} height={238} className="" />
			</div>
		</div>
	);
};

export default IntroImage;
