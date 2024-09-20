import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import slide1 from "../assets/slide1.png";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.png";
import slide4 from "../assets/slide4.png";

import Slider from "react-slick";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FaCaretDown } from "react-icons/fa";

// import { useRef } from "react";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div onClick={onClick} className={`arrow ${className}`}>
      <GrNext class="arrows" style={{ color: "white" }} />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div onClick={onClick} className={`arrow ${className}`}>
      <GrPrevious class="arrows" style={{ color: "white" }} />
    </div>
  );
}

function Carousel() {
  // let sliderRef = useRef(null);
  // const next = () => {
  //   sliderRef.slickNext();
  // };
  // const previous = () => {
  //   sliderRef.slickPrev();
  // };
  var settings = {
    centerMode: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <section className="text-white font-medium font-montserrat leading-[23px]  border border-[#D0D0D0] rounded-2xl mx-[20px] mt-[30px] p-[10px]">
      {/* <div className="relative">
        <button
          className="shrink-0 text-6xl text-white absolute z-10  left-0 top-1/2 transform translate-y-1/2"
          onClick={previous}
        >
          <GrPrevious />
        </button>
        <button
          className="shrink-0 text-6xl text-white absolute z-10 top-0 right-0"
          onClick={next}
        >
          <GrNext />
        </button>
      </div> */}
      <h2 className="text-black text-[28px] font-bold pt-4 pb-8">Neler Var?</h2>
      <Slider
        // ref={(slider) => {
        //   sliderRef = slider;
        // }}
        {...settings}
      >
        <div className="w-full !flex max-md:flex-col justify-center gap-10 items-center">
          <img className="w-[345px]" src={slide3} alt="" />
          <div>
            <h5 className="mb-4 text-[28px] font-semibold">Film ve Dizi</h5>
            <p>
              Yıldızlar geçidi, tüm zamanların ünlüleri, bol ödüllü, bol
              yıldızlı klasik filmler ve ödüllü komedi dizileri ile sitcomlar
            </p>
          </div>
        </div>
        <div className="w-full !flex max-md:flex-col justify-center  gap-10 items-center">
          <img className="w-[345px]" src={slide1} alt="" />
          <div>
            <h5 className="mb-4 text-[28px] font-semibold">Müzik ve Yaşam</h5>
            <p>
              Dünya mutfağının farklı tatlarına uzanan geniş bir içerikle beIN
              Gurme, yemek ve eğlence temalı beIN H&E ve daha birçok kanal.
            </p>
          </div>
        </div>
        <div className="w-full !flex max-md:flex-col justify-center gap-10 items-center">
          <img className="w-[345px]" src={slide2} alt="" />
          <div>
            <h5 className="mb-4 text-[28px] font-semibold">Spor</h5>
            <p>
              Futbol, basketbol ve tenis karşılaşmalarının olduğu spor
              heyecanını yaşatan yerli ve yabancı spor kanalları.
            </p>
          </div>
        </div>

        <div className="w-full !flex max-md:flex-col justify-center gap-10 items-center">
          <img className="w-[345px]" src={slide4} alt="" />
          <div>
            <h5 className="mb-4 text-[28px] font-semibold">Belgesel</h5>
            <p>
              Birbirinden popüler ve kaliteli belgesel kanallarında vahşi yaşam,
              doğa belgeselleri, popüler bilim ve teknoloji serileri ile tarih
              belgeselleri
            </p>
          </div>
        </div>
      </Slider>

      <Accordion
        className="mt-10 mb-8 z-20 text-black "
        type="single"
        collapsible
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="px-[35px] py-[19px] text-lg font-bold hover:no-underline hover:bg-[#670a92] hover:text-white rounded-xl transition-colors duration-500 group ">
            Kampanya Detayları
            <div className="relative flex items-center">
              <button className="relative w-10 h-10 text-center leading-[2.5rem] bg-white border-2 border-gray-300 rounded-full focus:outline-none transition-transform ease-in-out group-hover:duration-0 hover:transform group-hover:bg-[#dd1936]">
                <span className="absolute inset-0 flex justify-center items-center">
                  <FaCaretDown /> {/* Font Awesome down arrow icon (Unicode) */}
                </span>
              </button>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-[35px] py-[20px] text-base leading-7">
            Kampanya 12 ay taahhütle Eğlencenin ve Avrupanın Yıldızı Paketi’ni
            kapsar. 12 ay boyunca ayda 169 TL’dir. Kampanya kapsamında ilk 3 ay
            Taraftar Paketi hediyedir. Aktivasyon ve iç kurulum ücretsizdir.
            İkamet edilen konutun bulunduğu binada ortak Digiturk anteni
            olmaması halinde ise dış kurulum yapılır. Dış kurulum bedeli 80’lik
            - 90’lık çanak anten için Digiturk’e 1032 TL olarak ayda 86 TL olmak
            üzere 12 taksitle veya Digiturk yetkili servisi tarafından kesilen
            fatura karşılığı, ilgili yetkili servise tek seferde peşin 860 TL
            olarak ödenebilir. Kurulum hizmetine 20m kablo dahildir. Aboneliğin
            taahhüt süresi dolmadan iptal edilmesi/kampanya şartlarına aykırı
            davranış durumunda, iptale kadar geçen süre boyunca sunulan,
            ücretsiz/indirimli hizmetler BTK’ya uygun şekilde Digiturk
            tarafından faturalandırılır. Kampanya 3 Aralık 2024 tarihine kadar
            sadece yeni üyeliklerde geçerlidir. Digiturk kanal/ paket içeriğini
            değiştirme hakkını saklı tutar.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
export default Carousel;
