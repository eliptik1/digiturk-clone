import { FaCaretDown, FaChevronRight } from "react-icons/fa";
import phone from "../assets/phone.svg";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer class="footer-bg text-white pt-8  font-montserrat flex justify-center flex-col items-center">
      <div className="flex gap-24 max-md:gap-6 items-center mb-[40px] max-md:flex-col">
        <div className="flex gap-6">
          <div className="relative">
            <div class="w-[90px] h-[90px] flex items-center justify-center bg-[#dd1936] text-[--white-color] text-[40px] rounded-[37%] rotate-45 mt-[-5px] "></div>
            <img
              className=" absolute  top-[10px] left-[10px] p-2 size-[69px]"
              src={phone}
              alt=""
            />
          </div>
          <div>
            <p className="text-[25px] font-semibold mb-4">
              Hızlı Başvuru Hattı
            </p>
            <p className="text-[22px] font-medium">0850 255 73 73</p>
          </div>
        </div>
        <div className="p-6 rounded-lg text-center mx-auto">
          <h2 className="text-white mb-4 font-medium">
            Digiturk fırsatları kampanya ve duyuruları ile ilgili e-posta almak
            ister misiniz?
          </h2>
          <div className="flex items-center justify-center gap-4 relative">
            <input
              type="email"
              placeholder="E-Posta Adresiniz"
              className="w-full h-[50px] rounded-full px-7 py-7 text-sm outline-none text-[#ffffff] bg-transparent border border-[#ffffff] focus:border-[#ffffff] transition-colors duration-300"
            />
            <button className="menu-btn group !absolute top-1/2 -translate-y-1/2 right-3">
              <span className="relative z-10">GÖNDER</span>
              <span className="menu-btn-bg"></span>
            </button>
          </div>
          <p className="mt-4 text-[#ffffff] ">
            <a
              href="#"
              className="underline hover:text-white text-[15px] font-semibold"
            >
              *Potansiyel Müşteri Aydınlatma
            </a>{" "}
            metnine ulaşmak için tıklayın.
          </p>
        </div>
      </div>

      <div className=" w-full flex justify-start gap-12 pb-8 flex-wrap mb-12 px-4 md:px-8">
        {/* Column 1 */}
        <div className="flex flex-col w-full md:flex-1 ">
          <h3 className="footer-title">Tod TV Paketleri</h3>
          <a href="#" className="footer-link">
            <FaChevronRight className="text-[#dd1936] min-w-[16px] min-h-[16px]" />{" "}
            Sporun Yıldızı Paketi Kredi Kartlı
          </a>
          <a href="#" className="footer-link">
            <FaChevronRight className="text-[#dd1936] min-w-[16px] min-h-[16px]" />{" "}
            Digiturk Sporun Yıldızı (Kutusuz)
          </a>
          <a href="#" className="footer-link">
            <FaChevronRight className="text-[#dd1936] min-w-[16px] min-h-[16px]" />{" "}
            Digiturk Taraftar Paketi (Kutusuz)
          </a>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col w-full md:flex-1 ">
          <h3 className="footer-title">Bein Connect Paketleri</h3>
          <a href="#" className="footer-link">
            <FaChevronRight className="text-[#dd1936] min-w-[16px] min-h-[16px]" />{" "}
            Sporun Yıldızı Paketi Kredi Kartlı
          </a>
          <a href="#" className="footer-link">
            <FaChevronRight className="text-[#dd1936] min-w-[16px] min-h-[16px]" />{" "}
            Digiturk Sporun Yıldızı (Kutusuz)
          </a>
          <a href="#" className="footer-link">
            <FaChevronRight className="text-[#dd1936] min-w-[16px] min-h-[16px]" />{" "}
            Digiturk Taraftar Paketi (Kutusuz)
          </a>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col w-full md:flex-1 ">
          <h3 className="footer-title">Internet + TV Kampanyaları</h3>
          <a href="#" className="footer-link">
            <FaChevronRight className="text-[#dd1936] min-w-[16px] min-h-[16px]" />{" "}
            Digiturk İnternetli Sporun Yıldızı (Kutusuz)
          </a>
          <a href="#" className="footer-link">
            <FaChevronRight className="text-[#dd1936] min-w-[16px] min-h-[16px]" />{" "}
            Digiturk İnternetli Sporun Yıldızı
          </a>
          <a href="#" className="footer-link">
            <FaChevronRight className="text-[#dd1936] min-w-[16px] min-h-[16px]" />{" "}
            Digiturk İnternetli Eğlencenin ve Avrupanın Yıldızı (Kutusuz)
          </a>
          <a href="#" className="footer-link">
            <FaChevronRight className="text-[#dd1936] min-w-[16px] min-h-[16px]" />{" "}
            Digiturk İnternetli Eğlencenin ve Avrupanın Yıldızı
          </a>
        </div>

        {/* Column 4 */}
        <div className="flex flex-col w-full md:flex-1 ">
          <h3 className="footer-title">Spor / İnternetli Spor Paketleri</h3>
          <a href="#" className="footer-link">
            <FaChevronRight className="text-[#dd1936] min-w-[16px] min-h-[16px]" />{" "}
            Digiturk Eğlencenin ve Avrupanın Yıldızı
          </a>
          <a href="#" className="footer-link">
            <FaChevronRight className="text-[#dd1936] min-w-[16px] min-h-[16px]" />{" "}
            Digiturk Taraftar Paketi
          </a>
          <a href="#" className="footer-link">
            <FaChevronRight className="text-[#dd1936] min-w-[16px] min-h-[16px]" />{" "}
            Digiturk İllere Özel Süper Lig Faturalı
          </a>
          <a href="#" className="footer-link">
            <FaChevronRight className="text-[#dd1936] min-w-[16px] min-h-[16px]" />{" "}
            Digiturk Sporun Yıldızı
          </a>
          <a href="#" className="footer-link">
            <FaChevronRight className="text-[#dd1936] min-w-[16px] min-h-[16px]" />{" "}
            Digiturk İnternetli Taraftar Paketi
          </a>
        </div>

        {/* Column 5 */}
        <div className="flex flex-col w-full md:flex-1 ">
          <h3 className="footer-title">Kurumsal</h3>
          <a href="#" className="footer-link">
            <FaChevronRight className="text-[#dd1936] min-w-[16px] min-h-[16px]" />{" "}
            Kişisel Verilerin Korunması
          </a>
          <a href="#" className="footer-link">
            <FaChevronRight className="text-[#dd1936] min-w-[16px] min-h-[16px]" />{" "}
            Bayiilik Başvurusu
          </a>
          <a href="#" className="footer-link">
            <FaChevronRight className="text-[#dd1936] min-w-[16px] min-h-[16px]" />{" "}
            Çerez Politikası
          </a>
          <a href="#" className="footer-link">
            <FaChevronRight className="text-[#dd1936] min-w-[16px] min-h-[16px]" />{" "}
            İletişim
          </a>
          <a href="#" className="footer-link">
            <FaChevronRight className="text-[#dd1936] min-w-[16px] min-h-[16px]" />{" "}
            Digiturk Sıkça Sorulan Sorular
          </a>
        </div>

        {/* Column 6 */}
        <div className="flex flex-col w-full md:flex-1 ">
          <h3 className="footer-title">Üyelere Özel</h3>
          <a href="#" className="footer-link">
            <FaChevronRight className="text-[#dd1936] min-w-[16px] min-h-[16px]" />{" "}
            Tüm Kampanyalar
          </a>
        </div>
      </div>

      <div className="flex gap-3 pb-[40px]">
        <div className="p-[15px] size-[50px] border border-white rounded-full text-lg hover:bg-[#dd1936] hover:border-[#dd1936] transition-colors duration-300 hover:cursor-pointer">
          <FaFacebookF />
        </div>
        <div className="p-[15px] size-[50px] border border-white rounded-full text-lg hover:bg-[#dd1936] hover:border-[#dd1936] transition-colors duration-300 hover:cursor-pointer">
          <FaTwitter />
        </div>
        <div className="p-[15px] size-[50px] border border-white rounded-full text-lg hover:bg-[#dd1936] hover:border-[#dd1936] transition-colors duration-300 hover:cursor-pointer">
          <FaLinkedinIn />
        </div>
        <div className="p-[15px] size-[50px] border border-white rounded-full text-lg hover:bg-[#dd1936] hover:border-[#dd1936] transition-colors duration-300 hover:cursor-pointer">
          <FaInstagram />
        </div>
      </div>

      <div className="w-full text-center bg-gradient-to-r from-[#10004b] via-[#20016f] to-[#420e73] text-[13px] p-[20px] px-[100px] max-md:px-[20px]">
        <p className="mb-2">
          © 2022 Ikra Telekom | Developed by Ali Yurdunol | Bu sitenin tüm
          hakları saklıdır. |
        </p>
        <p className="mb-2 px-[15px]">
          Evde internet hizmetleri ve Digital yayın hizmeti Digitürk tarafından
          sunulmaktadır. Bu site Digitürk alternatif satış kanalı olan Ikra
          İletişim Telekomünikasyon ve Danışmanlık Hizmetleri tarafından
          kullanılmaktadır. Yalnızca yeni abonelik işlemleri yapılmaktadır. Bu
          sitede yer alan tüm ticari markaların isim hakları markaların ticari
          sahiplerine aittir.
        </p>
      </div>
    </footer>
  );
}
export default Footer;
