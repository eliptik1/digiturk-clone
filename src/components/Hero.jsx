/* eslint-disable react/no-unescaped-entities */
import hero from "../assets/hero.jpg";
import hd from "../assets/hd.png";
import Slider from "./Slider";
import { FaCheck } from "react-icons/fa";

import { IconContext } from "react-icons";

function Hero() {
  return (
    <section className="mt-[50px] mx-[20px] p-[10px] font-montserrat border border-[#D0D0D0] rounded-2xl ">
      <div className="flex max-md:flex-col mb-[40px]  relative  md:text-white">
        <img className=" rounded-2xl" src={hero} alt="" />
        <div className="md:absolute top-[20px] left-[15px] ">
          <h1 className="text-[25px] font-bold max-w-[450px] leading-[1.4] mb-4">
            Digiturk Eğlencenin ve Avrupanın Yıldızı
          </h1>
          <div className="font-semibold">
            &nbsp;
            <p>Oscar'lı Filmler, Ödüllü Diziler </p>
            <p>Avrupa'nın Yıldız isimleri Digitürk</p>
            <p>farkıyla bu pakette!</p>
            &nbsp;
          </div>
        </div>
        <div className="md:absolute bottom-[15px] left-[15px] flex flex-col">
          <span>12 ay</span>
          <span className="text-5xl font-extrabold">
            ₺299 / <em className="text-xl">AY</em>
          </span>
        </div>
      </div>
      <div className="text-[28px] px-[15px] leading-7 flex gap-2">
        Ek ücret ödemeden <img className="size-[40px]" src={hd} alt="" />
        <span className="font-bold">yüksek kalitede izle!</span>
      </div>

      <Slider />

      <li className="flex gap-2 font-medium mb-4">
        <IconContext.Provider
          value={{
            color: "white",
            style: {
              backgroundColor: "#670a92",
              padding: "5px",
              fontSize: "22px",
              borderRadius: "100%",
            },
            className: " global-class-name",
          }}
        >
          <FaCheck />
        </IconContext.Provider>
        <font className="pl-1">
          Premier League, Ligue 1, Türkiye Basketbol Ligi, Bundesliga ve
          Trendyol 1. Lig'in heyecan dolu maçları
        </font>
      </li>
      <li className="flex gap-2 font-medium mb-4">
        <IconContext.Provider
          value={{
            color: "white",
            style: {
              backgroundColor: "#670a92",
              padding: "5px",
              fontSize: "22px",
              borderRadius: "100%",
            },
            className: " global-class-name",
          }}
        >
          <FaCheck />
        </IconContext.Provider>
        <font className="pl-1">
          Digiturk beIN CONNECT'le istediğiniz zaman istediğiniz yerde izleme
          özgürlüğü!
        </font>
      </li>
      <li className="flex gap-2 font-medium mb-4">
        <IconContext.Provider
          value={{
            color: "white",
            style: {
              backgroundColor: "#670a92",
              padding: "5px",
              fontSize: "22px",
              borderRadius: "100%",
            },
            className: " global-class-name",
          }}
        >
          <FaCheck />
        </IconContext.Provider>
        <font className="pl-1">2024 Formula 1 Heyecanı</font>
      </li>

      <div className=" mb-[30px] mx-[20px] text-[15px] font-semibold leading-[15px] flex justify-center items-center flex-col p-[30px] rounded-2xl hover:bg-[#670a92] hover:text-white transition-colors duration-500">
        <p>Digitürk Eğlencenin ve Avrupanın Yıldızı</p>
        <p>12 ay ₺299</p>
      </div>
    </section>
  );
}
export default Hero;
