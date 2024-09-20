import phone from "../assets/phone.svg";

function Contact() {
  return (
    <div className="form-bg text-white font-montserrat mx-[30px] mt-[50px] rounded-[14px] sticky top-24">
      <div className="flex justify-start p-[30px] gap-4 border border-[rgba(255,255,255,0.2)]">
        <img
          className=" bg-[#D60A29] p-2 size-[39px] border-2 border-white rounded-full"
          src={phone}
          alt=""
        />
        <div className="flex flex-col">
          <p className="text-[15px] font-bold mb-[15px]">BİZE ULAŞIN</p>
          <p className="text-[30px] font-bold hover:text-black transition-colors duration-500 hover:cursor-pointer">
            0850 255 73 73
          </p>
        </div>
      </div>
      <div className="flex justify-start py-[30px] px-[40px] pb-0 gap-4">
        <div className="flex flex-col">
          <p className="text-[24px] font-bold mb-[15px]">Sizi Arayalım</p>
          <p className="text-base font-medium mb-[17px]">
            Kampanyalarımız ve tüm gelişmeler hakkında detaylı bilgi almak için
            formu doldurun, hemen sizi arayalım.
          </p>
        </div>
      </div>
      <div class="py-[30px] px-[40px] pt-0">
        <div>
          <label for="name" class="block text-white font-bold mb-2">
            AD SOYAD
          </label>
          <input
            type="text"
            id="name"
            placeholder="Ad ve soyadınızı girin"
            class="w-full h-[60px] px-7 py-2 rounded-full bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>

        <div>
          <label for="phone" class="block text-white font-bold mb-2">
            TELEFON
          </label>
          <input
            type="tel"
            id="phone"
            placeholder="0(5__) ___ __ __"
            class="w-full h-[60px] px-7 py-2 rounded-full bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>

        <div class="flex items-start mt-[16px]">
          <input type="checkbox" id="consent" class="mt-1 mr-2" />
          <label for="consent" class="text-white text-[12px]">
            *Potansiyel Müşteri Aydınlatma Metnini Onaylıyorum.
            <a href="#" class="text-red-500 underline">
              Metnine ulaşmak için tıklayın.
            </a>
          </label>
        </div>
        <div className="flex flex-col items-center gap-3 mt-3">
          <button className="menu-btn group w-full max-w-[180px]">
            <span className="relative z-10">sizi arayalım</span>
            <span className="menu-btn-bg"></span>
          </button>
          <button className="menu-btn group w-full max-w-[180px]">
            <span className="relative z-10">Satın Al Anında İzle!</span>
            <span className="menu-btn-bg"></span>
          </button>
        </div>
      </div>
    </div>
  );
}
export default Contact;
