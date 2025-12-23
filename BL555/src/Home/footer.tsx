import React, { useState } from "react";

const Footer = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const sections = [
    {
      title: "Về chúng tôi",
      links: ["Các điều khoản và điều kiện"],
    },
    {
      title: "Tiền gửi",
      links: ["Quyền riêng tư và Bảo mật"],
    },
    {
      title: "Rút tiền",
      links: ["Câu hỏi thường gặp"],
    },
    {
      title: "Trò chơi",
      links: [],
    },
  ];

  const shortText =
    "BL555 là một nhà cái có giấy phép cá cược trực tuyến hợp pháp do Isle of Man và Khu kinh tế Cagayan and Freeport cấp. Với bề dày kinh...";

  const fullText =
    "BL555 là một nhà cái có giấy phép cá cược trực tuyến hợp pháp do Isle of Man và Khu kinh tế Cagayan and Freeport cấp. Với bề dày kinh nghiệm và danh tiếng phục vụ hơn 10 triệu người chơi, BL555 đã và đang khẳng định vị thế của mình trên thị trường game trực tuyến. Với tư cách là một công ty trò chơi trực tuyến trực thuộc Tổng bộ Liên minh quốc tế có trụ sở tại Luân Đôn, Anh, sở hữu đội ngũ nhân tài chuyên nghiệp đồng đảo cung cấp sản phẩm phục vụ chất lượng cao. BL555 đảm bảo không tiết lộ thông tin cá nhân khách hàng cho bất kỳ bên thứ ba nào, sử dụng tiêu chuẩn mã hoá dữ liệu ở mức cao nhất. Tất cả thông tin cá nhân đều được thông qua hệ thống bảo mật - Secure Socket (Chuẩn mã hóa SS 128-bit), đồng thời được bảo vệ trong mội trường quản lý an toàn đảm bảo không thể truy cập từ các khu vực mạng công cộng. Tất cả dữ liệu ra vào đều bị hạn chế, giám sát nghiêm ngặt và quản lý chặt chẽ nhằm mang đến cho người chơi trải nghiệm người dùng an toàn tuyệt đối.";
  const providerLogos = [
    "5G-COLOR2.png",
    "365-COLOR2.png",
    "123BET-COLOR2.png",
    "AB-COLOR2.png",
    "AE-COLOR2.png",
    "AG-COLOR2.png",
    "AMBS-COLOR2.png",
    "AMG-COLOR2.png",
    "AUX-COLOR2.png",
    "AW-COLOR2.png",
    "BB-COLOR2.png",
    "BGA-COLOR2.png",
    "BG-COLOR2.png",
    "BNG-COLOR2.png",
    "BOM-COLOR2.png",
    "BP-COLOR2.png",
    "BT-COLOR2.png",
    "BTG-COLOR2.png",
    "CF-COLOR2.png",
    "CG-COLOR2.png",
    "CMD-COLOR2.png",
    "CQ9-COLOR2.png",
    "CRG-COLOR2.png",
    "DG-COLOR2.png",
    "DRS-COLOR2.png",
    "EG4-COLOR2.png",
    "EP-COLOR2.png",
    "ES-COLOR2.png",
    "EZ-COLOR2.png",
    "EZG-COLOR2.png",
    "FB-COLOR2.png",
    "FP-COLOR2.png",
    "FS-COLOR2.png",
    "FTG-COLOR2.png",
    "GA-COLOR2.png",
    "GM-COLOR2.png",
    "GPI-COLOR2.png",
    "HB-COLOR2.png",
    "HC-COLOR2.png",
    "HS-COLOR2.png",
    "IMSB-COLOR2.png",
    "JDB-COLOR2.png",
    "JL-COLOR2.png",
    "KA-COLOR2.png",
    "KM-COLOR2.png",
    "KP-COLOR2.png",
    "KS-COLOR2.png",
    "L22-COLOR2.png",
    "L365-COLOR2.png",
    "VT-COLOR2.png",
    "WD-COLOR2.png",
    "WE-COLOR2.png",
    "WM-COLOR2.png",
    "WMT-COLOR2.png",
    "WOW-COLOR2.png",
    "WS168-COLOR2.png",
    "YB-COLOR2.png",
    "YGD-COLOR2.png",
  ];
  return (
    <footer className="w-full">
      {/* --- PHẦN 1: LIÊN KẾT NHANH (NỀN TRẮNG) --- */}
      <div className="w-full bg-[#F9FDFF] pt-16 pb-10 flex justify-center border-b border-sky-100 px-4">
        <div className="w-full max-w-[1200px] px-4 grid grid-cols-4 gap-4">
          {sections.map((section, index) => (
            <div key={index} className="flex flex-col gap-8">
              {/* Tiêu đề mục - Màu xanh đậm đặc trưng */}
              <h4 className="text-[#113565] font-bold text-[20px]">
                {section.title}
              </h4>

              {/* Danh sách link - Font nhỏ hơn, màu nhạt hơn chút */}
              <div className="flex flex-col gap-2">
                {section.links.map((link, lIdx) => (
                  <a
                    key={lIdx}
                    href="#"
                    className="text-[#113565] text-[18px] font-bold transition-colors duration-200 block max-w-[200px] leading-tight"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- PHẦN 2: THÔNG TIN NHÀ CÁI & THANH TOÁN (NỀN XANH NHẠT) --- */}
      <div className="w-full bg-[#94d5e9] py-3 flex justify-center footer-group-body">
        <div className="w-full max-w-[1200px] px-4 flex justify-between items-start">
          {/* --- KHỐI BÊN TRÁI: LOGO & GIỚI THIỆU --- */}
          <div className="max-w-[586px] flex flex-col gap-4">
            <img
              src="/src/assets/logo.3f505b9.png"
              alt="BL555 Logo"
              className="w-[300px] h-auto drop-shadow-sm footer-logo"
            />
            <div className="text-[#113565] text-[18px] leading-[1.5] font-normal">
              <p className="footer-content-trim">
                {isExpanded ? fullText : shortText}
              </p>
              <span
                onClick={() => setIsExpanded(!isExpanded)}
                className="footer-more font-normal underline mt-1 inline-block hover:text-sky-700 cursor-pointer"
              >
                {isExpanded ? "Thu gọn" : "Xem thêm"}
              </span>
            </div>
          </div>

          {/* --- KHỐI BÊN PHẢI: PHƯƠNG THỨC THANH TOÁN --- */}
          <div className="flex flex-col gap-8">
            <h4 className="text-black text-[26px] font-normal uppercase">
              PHƯƠNG THỨC THANH TOÁN
            </h4>
            {/* Ảnh các icon thanh toán bạn đã cung cấp */}
            <div className="w-[320px] mt-2">
              <img
                src="/src/assets//footer-img-3.9d877b6.png"
                alt="Payment Methods"
                className="w-full h-auto object-contain opacity-90"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#DEF6FF] pt-5 flex justify-center border-t border-white/30">
        <div className="w-full max-w-[1200px] px-4 text-left">
          {/* --- Hàng 1: Giấy phép, Bảo vệ, Theo dõi, Trách nhiệm --- */}
          <div className="grid grid-cols-4 gap-0 mb-12 items-start">
            {/* Cột 1: GIẤY PHÉP */}
            <div className="flex flex-col items-start ">
              <span className="uppercase text-xl font-normal text-[#113565] mb-4">
                GIẤY PHÉP
              </span>
              <div className="flex flex-col items-start gap-2">
                <img
                  src="data:image/png;base64,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"
                  alt="License 1"
                  className="h-[30px] w-auto object-cover opacity-80 cursor-pointer"
                />
                <img
                  src="https://www.36588555.com/res/img/license-img2.eb7d5ed.png"
                  alt="License 2"
                  className="h-[30px] w-auto object-cover opacity-80 cursor-pointer"
                />
              </div>
            </div>

            {/* Cột 2: BẢO VỆ */}
            <div className="flex flex-col items-start px-4">
              <span className="uppercase text-xl font-normal text-[#113565] mb-4">
                BẢO VỆ
              </span>
              <div className="flex flex-col items-center gap-2">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANoAAAA5CAYAAABQzTX3AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA4BSURBVHgB7V1Pc9Q4Fn+S3RS3aa57WecTEMhM1Z6W8AUW+AQkhNkr5MYAVTS1E4YbyXFnlknzCZh8gjS3qSKB5rgnPLe9kb2xaVva92S7Lcl2d7v/JZ3Wr6or3bIs60n6SU/vPTkM5ojVxz+v+pzdjny/3W1thuDgsCRgMCcQyTzuHYKEJv48iRt8Bcl2Ag4OSwAOc4BFMkKzcQoBODgsCWZOtBKSIeSb9y82u+DgsCSYqepYRbLjnfsb4OCwRJjZilaHZN9h3tXWfhMcHC4oZkK0OiS7/vj1vmDeR68nPhLhwMHhAmLqRMOVKahDMsYgSw8kmv7BweECYupE86NoYwySKUSR3wYHhwuImVsdRyUZ57DZfemc2A4XE3Pxo+moItn7f2y1wcHhgsKHaUNCZbTHqCRT+7ye3MevTS6jzfcv/u58bg4LjYmIplkXT7iM7yhCMOjibwXGWCfLW5Nkh8jYgH4L4C3844wkDguNsVVHy4QfpISAox+/78QxX5ESNiOf3aG0cUmmwNgXcHBYcIy1opX5yaTMV6/UqNGm75OQjAHrRg22DQ4OC47aIVh1ndETkuzmWUb4U7QKPxV9tVVA3O1e0P0iyXoZ8j79fUGPMU1DjrWn+w9AiHXGeTfyYW8aY7DWilaLZE/2XzEQRvqkJEPibnDGr0YNJXwINfEt1klIOdJ+j0m2HX+FLvNgP0vzGXuOfy4k0WhC6bFc1m+f/nKTtgFV+dee/PpRpuMAJ9OT451712AAqJ/5KfVzAgaye/xi6w5MGXXlsEFjDKTYpSVISnHb67F1TL4JE2JkotUhGQq3jpV8qKdNTrL9Z4yJlsR1xeupVfIK1ISE+AoaaIJR8nKQzVjO3fuxEFBxqT2xyjR9iPp80IBGAqxj/kBLOpexrYzDrcyYl0CuwxQw0kgaRDJqdFopcIY7JOLQlcj3jVl/WiTTkpouCPns4EdRISZVisHhczjB3bWSzmUfohb2yUoKYQoYSrRhK5kXxbTKPCTmp74vIKLEMr6G5HiOn5tTJhlQuePozQy8L6ju/JF9rIsn+jUhuTv9XQUJxeDvIpH6SCbg4spQRtizBi4Su1jXg/RniON4KurtQNVxJHXRvBZk31KjQWE/Mw2SoYrSgjFwtLNJFkxlxVx9hPXwxOd+zQV8+vBia92o66NkhXYwIUn9loXkZpX6SGpjqdktIWwHzhHSMTh1v20l0WZxaLOu4WMUkpH6QTMjzkThPF74k1gi4QHKgPXL5GA0oeyiQeBNlo+O/Ajmv8p+xw12h/eAJg4VdI3E3v7w09auXq4XwV0gYw2Tq1q7h/jpxA3+fJh81L5+Dx7I9Bn9uknWji/BAbb9DUzYyPI3GmwzPu01k3pqvkuC9Gg7QH3S1uVKrvGrUMK0VH3s2OmJ2liSX7IAKpDs8/ldHCC3+7Kg1oGydMvqlLd3hRyC7QGX30AqP/bdu8jn7UQLS1Zb0r6YkCd6v2XPSurjPdOLpj4tXxyM1VvdX6o61iMZ/zOMgLomfKuyVSSjMtH6xQ/pPFu2R5wVJPCr9DyaAHKSqSs4M8s2NXI/hbNm0oHJB+tHVtiHWZtyT3RtOZS1i/Ib7a4MCBt4/2e9fBs4mO56kfgotWf068bELt5/qNcnG1x5Pc13uMhEJjRgxCuFh9FEUIYS9bFKbUzyE2GLIIs19SkQKXRZ1HdV9/bak9ef9f4eJgdnopnIksiOE93VdDyup1lDWo3tfsvkVys1o/1bfg0nNaM/8sWhnyfIJoQC0er6yfRGROKU7mum4CcLK0iml9n0/gez1fklqRTWjKmBGplmvorLG9r3MFOxSqNhBpWPg9BOX/vhX1SvtkVQG4FVh7Gw2vp51XgOM2Jbm7b8Sm3UYeQvEjZ1Cz2E4Qho8hh7cuWwbrV5Z9gtse+1UIAw+02TGk1w9J3qgSu3ueLF/Gb+OA2TOqOlEM/tfLNwRlcMTty4zsfHlRl5KMxMb3iCUneqIOUeRyORvsEuyiHfUNnHO1sM1cUr9jOoc/XBrCx3nJvkw8FMdVT3Mo6DNo/asUEqN+XFe36zLrVVujUA/YiZZJbMIIVtfbSsjSHJp/02LI9qRdBJRqTE+lM7UHtQ21n3Z8HnI8gRm2Mj8wGC2FZ9EvPC2LVB45XLyDKOyN1EZZdvzTEutvVjX/092lQiPnbuG0LWIVnW4P10pY9DAZUkw9ljHufZqAFxNdrNfuOgD1M1RwEH90rFreHxi/vGoFx7iiuR1NrGUo/TtmijUabjedCXOd0rdOi7ilwx/VNh7PNr3daW3r57WM8W1rOgeqb7vlai9uRGAKzLm1K/mGVxRNUKrbRep6/ZJMRScqrVpmesaB0kYlf3v6WWx05yK60IMpcjMvs0PcWxkbZ5KotcV0aY1mZnmByYzzZytI928r4cBVSH609+2WbQn9yaicpuaBOFchXRzjqsSm0ge4nhI/PkcyHagnt3qU7UWFVlwhxJRs+yG5Dquvb09ckQtY3Y8amYxm5pv6hNOuWqZwRC+Dgzy1Z64/p3j/dX6ZV9tqFBtcVOUVMgAmM9rybq7/iQjN/QJ0Dymfq96AD3r+tpUt/6aFsbqR/jhjzxep5WYGJ5TIwN+ljhv/l+FGB6UFKNDn7y/XCFEWYoBD+AMfABxwCqjLf6k4vZ92HZ6uirwRuJsyWZZl1MVa8OzRxYzgrFrf3e2grrkEzpzUzuGsd3pgEpSzsGOxpVNTmQaKj3lNSBrWokaeorYyEnE1aKoAHaxRU0yFYIauNBEw4aAA702X4sKEuhzJ+H/Yl90yZjT/6cZOBbk4DalyaaSy5LZnkUggf6SpcYdfgoezVsG34DxgDzorG2LgSyOHo9+GjvrbGfNrsvt0I7P5/kHR8ziPgAfT9B+SkotDbJcsNAIJj3AKYEJMvYHVMGOWwVHHQvF4GdJqT8L8wcuQFDSqGc/km/avtAJFiJtbGT5UVyhXnexPLIS+QZuUYgx27HcZHILDtW8okdFZWBVEfKnOm7Z0qydI/yZliZMIxkBqoNAecMIdRQf2TMCh3KGftm0D1k4pYTvL1CWRx7+W99lWYQG+ojrnDGfjBT//v3yWxfmRLXPplP2sOIZxFRzRxrAmTCH3viVBH+0gyaB5L7VJBxphBN4qvl/NH+SoP3mmUq1iCS2QYML4qx0ViQ5Zs04mNSkpUR9zzBHHD0IqOtTagJ7JsQUt8R+YyoT6qsueQHhAngRTwwyovz2Ttq+Ib6CBXujPTOP7QTWonlMYq6+t4P22b36Mf7HZghvEswttUbIlsTS4Gq+fUfXj/UgxEIanqjQVubZGRAicRnbNwvVDBdQz9DJzNFz5VkmR9pSJnnDUyKd9rPIGvHMlT559Dqp5cB1mC379+ACcAsvxdnecBtQX00YaST5VH/nUb2dHUfmx2FoYOIOevghEFQ41JT+1O3Qr/ujMMzu36VeoRyHA5QFz3yz2S+CA5qH6SCiRvsGvkljnbuXZsHydKKPRtW5nkErQJWB72iNtI7iQiC1sK3ZCihaIjMQdovg4JgTafxxtrj12/pvr9gOfShMnE1ewsTwl4R7X9UQupj2X262kgQlwo+rVUaK+g62dMS10le22dIsqgJHk3qeH1/3oRLonOMcdmmsYb7Vd3S2Eyd6X0ylhKNhLO986O+Eo4arHx1HD1AONHvy0lGujEdybEG3MmwMs8j0sFl6PPURhRuheT6Qh9licxN8gFZU/Vg58S4YAUKoPpC9/WwHPqodp/A8NJHaiFMHlHcI6qJo4iw6I9rhEaxablJ5LwRABCoCQbb4frjX5X21JclkWfDO41HskxOA6Q5WWM4RGe6ClInk7/lLA/0EK1Soo1ynqwOBpEsmaVeb5gzE9O+5yRTs1sWD4iqYjZjkKlVRUEIeWdRSJZBxdep6A8L+WDKQStXLAsvmqVOTqM4BqKMHKMiaeuixVFHhfrYKctXZnlUGlHMblpkg8SXWhKiJuWeHQQwK6jxaUXgqHGpaW2xzwtRPMm2poJoo5wnw1tH8l0MW8mSIF3YT4OC1cDiMtrGffEnHIDvBjmjs3dDUH0/vNhqH/9kRqYMg37+DPcfJ8PySPBLrWBkkLDLiXx5Msq9BKo7vTnMCi/SHqCi1vfiiF+rkpHaU4WFYbuVyPBOXWOsXXUej1wXlWf1FHqBcZ0CHEqATuc3RrtaamP/eUy8y9tG9k/LU18f79xbKQtvs+UpI9kgOagPBstY3W/8VD5E2Zgm13N7XCoNhcWbxv2cqcWEQU1U7J/aZRazYSSzz4RR4w06Dp8eneh3cKPBVxb1JTKDoO9L6NhGXYc7tStFVdB33/fDRW4jOv6SRNQnIG1rEf8lc72X89R4Jdy0D20ScHa5qkcVXFTUeZlMGdKZNoQLgIvylupa3kuvEKE84cnoy72RN+jK+KH2Zzm+AizczOawnKgXJsCmRzJ1Mrrn7+tp6AAtJV6VM3oRVQiH5UTNeBy5qTbbaMacnGTyUJoO0NLzZAMiPlrg4LAgqG0MqcLEJKsXVtUCB4cFwlSI5kjm4DAYExMtPdFq7LUcyRwcTEz8zusR31blSOaw1JgG0dpZUKsjmYNDOaayRyu8WEdLdyRzcJii1dGGI5mDQ46Z/V8iRzIHhxwzIRq9r9CRzMEhx0yIZh05cSRzWHrMbo+mXsrauBFHcOBI5rDsmBnRquBI5rCMmCvRHMkclhVzI5r6R3s9YRzndyRzWBbMzLxfCraYb6tycJgUHswJ/+kcfP3TX//2b2TYZQbin0c7378EB4clwf8BJir8qI8L/tEAAAAASUVORK5CYII="
                  alt="Protection"
                  className="h-[30px] w-auto object-cover opacity-80 cursor-pointer"
                />
                <img
                  src="data:image/png;base64,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"
                  alt="Protection"
                  className="h-[30px] w-auto object-cover opacity-80 cursor-pointer"
                />
              </div>
            </div>

            {/* Cột 3: THEO DÕI CHÚNG TÔI */}
            <div className="flex flex-col items-start px-4">
              <span className="uppercase text-xl font-normal text-[#113565] mb-4">
                THEO DÕI CHÚNG TÔI
              </span>
              <div className="flex gap-10">
                <img
                  src="data:image/png;base64,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"
                  alt="Facebook"
                  className="h-[60px] w-auto object-cover cursor-pointer"
                />
                <img
                  src="data:image/png;base64,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"
                  alt="Telegram"
                  className="h-[60px] w-auto object-cover cursor-pointer"
                />
              </div>
            </div>

            {/* Cột 4: TRÁCH NHIỆM */}
            <div className="flex flex-col items-start px-4">
              <span className="uppercase text-xl font-normal text-[#113565] mb-4">
                TRÁCH NHIỆM
              </span>
              <div className="flex flex-col items-start gap-4">
                <img
                  src="https://www.36588555.com/res/img/play-img.6cd243b.png"
                  alt="Responsible Gaming"
                  className="h-[58px] w-auto opacity-80 cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* --- KHỐI DƯỚI: MARQUEE LOGO ĐỐI TÁC 2 HÀNG --- */}
      <div className="w-full bg-[#DEF6FF] pb-1 flex justify-center">
        <div className="w-full max-w-[1200px] px-4 mx-auto">
          <style>{`
      .marquee-container {
        overflow: hidden;
        width: 100%;
      }
      .marquee-row, .marquee-row2 {
        display: flex;
        width: max-content;
        animation: marquee 60s linear infinite;
      }
      .marquee-row {
        animation-name: marquee1;
      }
      .marquee-row2 {
        animation-name: marquee2;
      }
      @keyframes marquee1 {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      @keyframes marquee2 {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .logo-item {
        flex-shrink: 0;
        width: 120px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 10px;
      }
    `}</style>

          <div className="flex flex-col gap-4">
            {/* Hàng 1 */}
            <div className="marquee-container">
              <div className="marquee-row">
                {(() => {
                  const half = Math.ceil(providerLogos.length / 2);
                  const row1 = providerLogos.slice(0, half);
                  const duplicatedRow1 = [...row1, ...row1];

                  return duplicatedRow1.map((fileName, idx) => (
                    <div key={idx} className="logo-item">
                      <img
                        src={`/src/assets/${fileName}`}
                        alt={fileName}
                        className="max-w-full max-h-full object-contain filter drop-shadow-sm"
                      />
                    </div>
                  ));
                })()}
              </div>
            </div>

            {/* Hàng 2 */}
            <div className="marquee-container">
              <div className="marquee-row2">
                {(() => {
                  const half = Math.ceil(providerLogos.length / 2);
                  const row2 = providerLogos.slice(half);
                  const duplicatedRow2 = [...row2, ...row2];

                  return duplicatedRow2.map((fileName, idx) => (
                    <div key={idx} className="logo-item">
                      <img
                        src={`/src/assets/${fileName}`}
                        alt={fileName}
                        className="max-w-full max-h-full object-contain filter drop-shadow-sm"
                      />
                    </div>
                  ));
                })()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
