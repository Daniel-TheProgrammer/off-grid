import Image from "next/image";

const EbookHeader = () => {
  return (
    <header className="bg-[#CEFA05]">
      <div className="relative z-10 h-[90vh]">
        <div className="absolute z-20 top-0 right-0 left-0 bottom-0 bg-black/[0.8]"></div>
        <Image
          src="/assets/avheaderimage.png"
          alt=""
          className="z-10"
          fill
          sizes="100vw"
        />
        <div className="w-full h-full relative z-40 pt-[200px] pb-[221px] flex justify-center items-center">
          <div className="flex flex-col items-center">
            <h1 className="text-main  text-[170px] italic uppercase font-supr font-extrabold leading-[1]">
              Ebook
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
};

export default EbookHeader;