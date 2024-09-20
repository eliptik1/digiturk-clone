import logo from "../assets/logo.png";
import kampanya1 from "../assets/kampanya1.jpg";
import kampanya2 from "../assets/kampanya2.png";
import kampanya3 from "../assets/kampanya3.png";
import kampanya4 from "../assets/kampanya4.png";
import { IoChevronDown } from "react-icons/io5";

function Header() {
  return (
    <header className="flex justify-between items-center w-full h-full py-4 pr-4 border-b border-[#d7d7d7] relative font-montserrat sticky bg-white z-30 top-0">
      <img className="p-4" src={logo} />
      <ul className="flex gap-[26px] items-center max-[950px]:hidden">
        <button className="transition-all duration-400  relative font-semibold text-lg text-white rounded-[20px] py-[15px] px-[15px] bg-[linear-gradient(to_left,_#000_-55%,_#FFBC00)] hover:opacity-90">
          Tod TV
        </button>

        <button className="transition-all duration-400  relative font-semibold text-lg text-white rounded-[20px] py-[15px] px-[15px] bg-[linear-gradient(to_left,_#A71D8E_0%,_#001E42)] hover:opacity-90">
          beIN CONNECT
        </button>

        <a
          className="text-lg font-semibold flex items-center gap-[5px] group  py-[30px] transition-colors"
          href=""
        >
          <p className="group-hover:text-[#dd1936] transition-colors">
            Digiturk Paketleri
          </p>
          <IoChevronDown />
          <div className="text-base tracking-[1px] leading-[30px] flex justify-between max-w-[1290px] w-full absolute top-[110px] left-1/2 transform -translate-x-1/2  z-50 bg-white shadow-lg p-5 opacity-0 invisible group-hover:top-[89px] group-hover:opacity-100 group-hover:visible transition-all duration-500 ease-in-out">
            <div className="flex-1 px-4">
              <img className="" src={kampanya1} />
              <p className="font-bold pb-4 mb-4 border-b border-[#dd1936]">
                Popüler Kampanyalar
              </p>
              <ul className="[&>li]:transition-colors [&>li]:py-1">
                <li className="hover:text-[#dd1936]">Formula 1 Paketi</li>
                <li className="hover:text-[#dd1936]">
                  Digiturk Eğlencenin ve Avrupanın Yıldızı
                </li>
                <li className="hover:text-[#dd1936]">
                  Digiturk İllere Özel Süper Lig Faturalı{" "}
                </li>
                <li className="hover:text-[#dd1936]">
                  Digiturk Sporun Yıldızı
                </li>
                <li className="hover:text-[#dd1936]">
                  Digiturk Taraftar Paketi{" "}
                </li>
                <li className="hover:text-[#dd1936]">Hemen Başvur </li>
                <li className="hover:text-[#dd1936]">Tüm Kampanyalar</li>
              </ul>
            </div>
            <div className="flex-1 px-4">
              <img className="" src={kampanya2} />
              <p className="font-bold pb-4 mb-4 border-b border-[#dd1936]">
                Uydu Alıcı Kampanyalar
              </p>
              <ul className="[&>li]:transition-colors [&>li]:py-1">
                <li className="hover:text-[#dd1936]">
                  Digiturk Eğlencenin ve Avrupanın Yıldızı
                </li>
                <li className="hover:text-[#dd1936]">
                  Digiturk İllere Özel Süper Lig Faturalı
                </li>
                <li className="hover:text-[#dd1936]">
                  Digiturk Taraftar Paketi
                </li>
                <li className="hover:text-[#dd1936]">
                  Digiturk Sporun Yıldızı
                </li>
                <li className="hover:text-[#dd1936]">Formula 1 Paketi</li>
                <li className="hover:text-[#dd1936]">Digiturk Yıldız Dolu</li>
                <li className="hover:text-[#dd1936]">Tüm Kampanyalar</li>
              </ul>
            </div>
            <div className="flex-1 px-4">
              <img className="" src={kampanya3} />
              <p className="font-bold pb-4 mb-4 border-b border-[#dd1936]">
                Uydu Alıcısız Kampanyalar
              </p>

              <ul className="[&>li]:transition-colors [&>li]:py-1">
                <li className="hover:text-[#dd1936]">
                  Digiturk Taraftar Paketi (Kutusuz)
                </li>
                <li className="hover:text-[#dd1936]">
                  Digiturk Sporun Yıldızı (Kutusuz)
                </li>
                <li className="hover:text-[#dd1936]">Tüm Kampanyalar</li>
              </ul>
            </div>
          </div>
        </a>
        <a
          className="text-lg font-semibold flex items-center gap-[5px] group py-[30px]"
          href=""
        >
          <p className="group-hover:text-[#dd1936] transition-colors">
            Digiturk İnternet Paketleri
          </p>
          <IoChevronDown />
          <div className="text-base tracking-[1px] leading-[30px] flex justify-between max-w-[1290px] w-full absolute top-[110px] left-1/2 transform -translate-x-1/2  z-50 bg-white shadow-lg p-5 opacity-0 invisible group-hover:top-[89px] group-hover:opacity-100 group-hover:visible transition-all duration-500 ease-in-out">
            <div className="flex-1 px-4">
              <img className="" src={kampanya4} />
              <p className="font-bold pb-4 mb-4 border-b border-[#dd1936]">
                İnternet + TV Kampanyaları
              </p>
              <ul className="[&>li]:transition-colors [&>li]:py-1">
                <li className="hover:text-[#dd1936]">
                  Digiturk İnternetli Eğlencenin Ve Avrupanın Yıldızı
                </li>
                <li className="hover:text-[#dd1936]">
                  Digitürk İnternetli Eğlencenin ve Avrupanın Yıldızı (Kutusuz)
                </li>
                <li className="hover:text-[#dd1936]">
                  Digitürk İnternetli Sporun Yıldızı (Kutusuz)
                </li>
                <li className="hover:text-[#dd1936]">
                  Digiturk İnternetli Sporun Yıldızı
                </li>
                <li className="hover:text-[#dd1936]">Tüm Kampanyalar</li>
              </ul>
            </div>
          </div>
        </a>
        {/* <header className="w-full relative z-50 p-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap items-center">
              <div className="w-2/3">
                <nav className="menu">
                  <ul className="flex">
                    <li className="ml-6 relative group">
                      <a
                        href="#"
                        className="text-sm font-medium text-black capitalize hover:text-red-500 transition-colors duration-300"
                      >
                        New <i className="fa fa-angle-down"></i>
                      </a>
                      <div className="absolute z-50 bg-white shadow-lg p-5 mt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 ease-in-out left-1/2 transform -translate-x-1/2"></div>
                    </li>
                    <li className="ml-6 relative group">
                      <a
                        href="#"
                        className="text-sm font-medium text-black capitalize hover:text-red-500 transition-colors duration-300"
                      >
                        Shop <i className="fa fa-angle-down"></i>
                      </a>

                      <div className="absolute z-50 bg-red-200 shadow-lg p-5 mt-[56px] opacity-0 invisible group-hover:mt-[46px] group-hover:opacity-100 group-hover:visible transition-all duration-500 ease-in-out left-1/2 transform -translate-x-1/2">
                        <div className="flex flex-wrap w-full max-w-5xl">
                          <div className="w-1/4 px-4">
                            <h4 className="text-base text-red-500 font-medium py-2">
                              Mens Fashion
                            </h4>
                            <ul>
                              <li>
                                <a
                                  href="#"
                                  className="block py-2 text-sm text-gray-600 hover:text-red-500 transition-colors duration-300"
                                >
                                  T-Shirts
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </header> */}
        <button className="menu-btn group">
          <span className="relative z-10">sizi arayalım</span>
          <span className="menu-btn-bg"></span>
        </button>
      </ul>
    </header>
  );
}
export default Header;
