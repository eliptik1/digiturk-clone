import l1 from "../assets/kanallar/1.png";
import l2 from "../assets/kanallar/2.png";
import l3 from "../assets/kanallar/3.png";
import l4 from "../assets/kanallar/4.png";
import l5 from "../assets/kanallar/5.png";
import l6 from "../assets/kanallar/6.png";
import l7 from "../assets/kanallar/7.png";
import l8 from "../assets/kanallar/8.png";
import l9 from "../assets/kanallar/9.png";
import l10 from "../assets/kanallar/10.png";
import l11 from "../assets/kanallar/11.png";
import l12 from "../assets/kanallar/12.png";
import l13 from "../assets/kanallar/13.png";
import l14 from "../assets/kanallar/14.png";
import l15 from "../assets/kanallar/15.png";

function Slider() {
  return (
    <div className="relative overflow-hidden bg-gray-100 pt-[30px] pb-10">
      {/* Slider Container */}
      <div
        className="flex w-[424%]"
        style={{ animation: "slide 30s linear infinite" }}
      >
        {/* First set of logos */}
        <div className="flex">
          <div className="flex items-center justify-center flex-1 mx-3 size-24">
            <img src={l1} alt="Logo 1" className="max-w-full max-h-full" />
          </div>
          <div className="flex items-center justify-center flex-1 mx-3 size-24">
            <img src={l2} alt="Logo 2" className="max-w-full max-h-full" />
          </div>
          <div className="flex items-center justify-center flex-1 mx-3 size-24">
            <img src={l3} alt="Logo 3" className="max-w-full max-h-full" />
          </div>
          <div className="flex items-center justify-center flex-1 mx-3 size-24">
            <img src={l4} alt="Logo 4" className="max-w-full max-h-full" />
          </div>
          <div className="flex items-center justify-center flex-1 mx-3 size-24">
            <img src={l5} alt="Logo 5" className="max-w-full max-h-full" />
          </div>
          <div className="flex items-center justify-center flex-1 mx-3 size-24">
            <img src={l6} alt="Logo 6" className="max-w-full max-h-full" />
          </div>
          <div className="flex items-center justify-center flex-1 mx-3 size-24">
            <img src={l7} alt="Logo 7" className="max-w-full max-h-full" />
          </div>
          <div className="flex items-center justify-center flex-1 mx-3 size-24">
            <img src={l8} alt="Logo 8" className="max-w-full max-h-full" />
          </div>
          <div className="flex items-center justify-center flex-1 mx-3 size-24">
            <img src={l9} alt="Logo 9" className="max-w-full max-h-full" />
          </div>
          <div className="flex items-center justify-center flex-1 mx-3 size-24">
            <img src={l10} alt="Logo 10" className="max-w-full max-h-full" />
          </div>
          <div className="flex items-center justify-center flex-1 mx-3 size-24">
            <img src={l11} alt="Logo 11" className="max-w-full max-h-full" />
          </div>
          <div className="flex items-center justify-center flex-1 mx-3 size-24">
            <img src={l12} alt="Logo 12" className="max-w-full max-h-full" />
          </div>
          <div className="flex items-center justify-center flex-1 mx-3 size-24">
            <img src={l13} alt="Logo 13" className="max-w-full max-h-full" />
          </div>
          <div className="flex items-center justify-center flex-1 mx-3 size-24">
            <img src={l14} alt="Logo 14" className="max-w-full max-h-full" />
          </div>
          <div className="flex items-center justify-center flex-1 mx-3 size-24">
            <img src={l15} alt="Logo 15" className="max-w-full max-h-full" />
          </div>

          {/* Duplicate logos for seamless animation */}
          <div className="flex items-center justify-center flex-1 mx-3 size-24">
            <img src={l1} alt="Logo 1" className="max-w-full max-h-full" />
          </div>
          <div className="flex items-center justify-center flex-1 mx-3 size-24">
            <img src={l2} alt="Logo 2" className="max-w-full max-h-full" />
          </div>
          <div className="flex items-center justify-center flex-1 mx-3 size-24">
            <img src={l3} alt="Logo 3" className="max-w-full max-h-full" />
          </div>
          <div className="flex items-center justify-center flex-1 mx-3 size-24">
            <img src={l4} alt="Logo 4" className="max-w-full max-h-full" />
          </div>
          <div className="flex items-center justify-center flex-1 mx-3 size-24">
            <img src={l5} alt="Logo 5" className="max-w-full max-h-full" />
          </div>
          <div className="flex items-center justify-center flex-1 mx-3 size-24">
            <img src={l6} alt="Logo 6" className="max-w-full max-h-full" />
          </div>
          <div className="flex items-center justify-center flex-1 mx-3 size-24">
            <img src={l7} alt="Logo 7" className="max-w-full max-h-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
