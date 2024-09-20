import fb from "../assets/fenerbahce.png";
import gs from "../assets/galatasaray.png";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";

function Banner() {
  return (
    <section className="relative flex max-xl:flex-col justify-between items-center pt-[17px] max-md:pr-[11px] pr-[70px] p-[11px] w-full xl:h-[120px] bg-no-repeat bg-cover bg-[url('assets/banner.png')] ">
      <div className="flex flex-1 justify-center items-center text-white font-montserrat font-bold text-sm w-full">
        <div className="flex gap-2 justify-center items-center w-full max-w-[230px]">
          <img className="size-[50px]" src={fb} />
          <span className="max-md:hidden">Fenerbahçe</span>
        </div>
        <div className="p-5 font-[900] text-xl text-[#dd1936]">20:00</div>
        <div className="flex gap-2 justify-center items-center w-full max-w-[230px]">
          <span className="max-md:hidden">Galatasaray</span>
          <img className="size-[50px]" src={gs} />
        </div>
      </div>
      <div className="flex-1 flex justify-center">
        <FlipClockCountdown
          className="flip-clock"
          labels={["Gün", "Saat", "Dakika", "Saniye"]}
          to={new Date().getTime() + 196850000}
        />
      </div>
      <div className="flex flex-1 gap-2 md:gap-16 justify-center items-center text-white font-montserrat">
        <div className="flex gap-2  flex-col">
          <span className="font-bold">Taraftar Paketi</span>
          <div className="h-[2px] w-full bg-[#dd1936]"></div>
          <div className="flex gap-[16px] items-center">
            <span className="flex flex-col text-[18px] leading-5 mb-4">
              <div>12 Ay </div>Boyunca
            </span>
            <span className="text-[48px] font-bold">
              <span className="text-[36px] font-medium">₺</span>299
            </span>
          </div>
        </div>
        <div>
          <button className="banner-btn group md:!p-[22px] md:!px-[44px] md:!text-[14px]">
            <span className="relative z-10 text-nowrap">hemen başvur</span>
            <span className="banner-btn-bg"></span>
          </button>
        </div>
      </div>
      <button className="text-[#ffffff] absolute right-4 bottom-4 text-xl font-extrabold border-white border size-8 hover:bg-[#dd1936] hover:border-[#dd1936] transition-all">
        ✕
      </button>
    </section>
  );
}
export default Banner;
