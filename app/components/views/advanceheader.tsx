import Image from "next/image";

const AdvanceHeader = () => {
  return (
    <header className="bg-[#CEFA05]">
      <div className="relative z-10">
        <div className="absolute z-20 top-0 right-0 left-0 bottom-0 bg-black/[0.8]"></div>
        <Image
          src="/assets/avheaderimage.png"
          alt=""
          className="z-10"
          fill
          sizes="100vw"
        />
        <div className="w-full relative z-40 pt-[200px] pb-[221px] flex justify-center ">
          <div className="flex flex-col items-center">
            <h1 className="text-main  text-[170px] italic uppercase font-supr font-extrabold leading-[1]">
              Advanced Growth
            </h1>
            <h1 className="stroketext uppercase flex items-center gap-[46px] font-supr italic font-extrabold">
              <span>System</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="368"
                height="119"
                viewBox="0 0 368 119"
                fill="none"
              >
                <path d="M368 0.5H17L0 119H351L368 0.5Z" fill="#CEFA05" />
              </svg>
            </h1>
            <div className="mt-[32px]">
              <button className="min-h-[96px] inline-flex flex-col items-center text-black font-lato bg-main rounded-[12px] justify-center w-[656px]">
                <span className="font-extrabold leading-[144.687%] text-[25px]">
                  Claim your Custom Digital Marketing Strategy
                </span>
                <span className="text-[18px] leading-[144.687%]">
                  (risk free, results guaranteed)
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdvanceHeader;