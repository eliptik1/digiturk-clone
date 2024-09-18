import logo from "../assets/logo.png";
import { IoChevronDown } from "react-icons/io5";

function Header() {
  return (
    <header className="flex justify-between items-center w-full h-full p-4 border-b border-[#d7d7d7]">
      <img className="" src={logo} />
      <ul className="flex gap-[26px] items-center">
        <button className="transition-all duration-400  relative font-semibold text-lg text-white rounded-[20px] py-[15px] px-[15px] bg-[linear-gradient(to_left,_#000_-55%,_#FFBC00)] hover:opacity-90">
          Tod TV
        </button>

        <button className="transition-all duration-400  relative font-semibold text-lg text-white rounded-[20px] py-[15px] px-[15px] bg-[linear-gradient(to_left,_#001E42_0%_#A71D8E)] bg-[linear-gradient(to_left,_#A71D8E_0%,_#001E42)] hover:opacity-90">
          beIN CONNECT
        </button>

        <a
          className="text-lg font-semibold flex items-center gap-[5px]"
          href=""
        >
          Digiturk Paketleri
          <IoChevronDown />
        </a>
        <a
          className="text-lg font-semibold flex items-center gap-[5px]"
          href=""
        >
          Digiturk İnternet Paketleri
          <IoChevronDown />
        </a>
        <button className="menu-btn group">
          <span className="relative z-10">sizi arayalım</span>
          <span className="menu-btn-bg"></span>
        </button>
      </ul>
    </header>
  );
}
export default Header;
