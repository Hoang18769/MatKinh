import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const About = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  useEffect(() => {
    setPrevLocation(location.state.data);
  }, [location]);
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Về chúng tôi" prevLocation={prevLocation} />

      <div class="py-16 bg-white">
        <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div class="md:5/12 lg:w-5/12">
              <img
                src="https://i.pinimg.com/originals/c7/82/8a/c7828ae79313abf024a0c12472e63701.jpg"
                alt="image"
                loading="lazy"
                width=""
                height=""
              />
            </div>
            <div class="md:7/12 lg:w-6/12 ">
              <h2 class="text-2xl text-gray-900 font-bold md:text-4xl">
              Mắt Kính Cao Lỗ - Lựa chọn hoàn hảo cho đôi mắt của bạn!
              </h2>
              <p class="mt-6 text-gray-600">
                Mắt Kính Cao Lỗ là một cửa hàng kính mắt uy tín tại Thành phố Hồ
                Chí Minh, chuyên cung cấp các sản phẩm kính mắt chất lượng cao
                với giá cả hợp lý. Cửa hàng có đội ngũ nhân viên tư vấn nhiệt
                tình, chu đáo, luôn sẵn sàng hỗ trợ khách hàng lựa chọn được
                những sản phẩm phù hợp nhất với nhu cầu của mình.
              </p>
              <p class="mt-4 text-gray-600">
                {" "}
                Mắt Kính Cao Lỗ cam kết mang đến cho khách hàng những sản phẩm
                và dịch vụ tốt nhất.
              </p>
              <div className="flex justify-center pt-8">
                <Link to="/shop">
                <button class="relative group overflow-hidden px-6 h-12 rounded-lg flex space-x-2 items-center bg-gradient-to-r from-indigo-500 to-indigo-500">
                  <span class="relative text-lg font-semibold  text-white">
                    Mua sắm ngay
                  </span>
                  <div class="flex items-center -space-x-3 translate-x-3">
                    <div class="w-2.5 h-[1.6px] rounded bg-white origin-left scale-x-0 transition duration-300 group-hover:scale-x-100"></div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 stroke-white -translate-x-2 transition duration-300 group-hover:translate-x-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
