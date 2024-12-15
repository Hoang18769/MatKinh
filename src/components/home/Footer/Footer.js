import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import FooterListTitle from "./FooterListTitle";
import { paymentCard } from "../../../assets/images";
import Image from "../../designLayouts/Image";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full bg-[#F5F5F3] py-20">
      <div className="max-w-container mx-auto grid grid-cols-1 md:grid-cols-2  xl:grid-cols-6 px-4 gap-10">
        <div className="col-span-2">
          <FooterListTitle title="Mắt Kính Cao Lỗ" />
          <div className="flex flex-col gap-6">
            <p className="text-base w-full xl:w-[80%]">
              Mắt Kính Cao Lỗ là một cửa hàng kính mắt uy tín tại Thành phố Hồ
              Chí Minh, chuyên cung cấp các sản phẩm kính mắt chất lượng cao với
              giá cả hợp lý.
            </p>
          </div>
        </div>
        <div>
          <FooterListTitle title="Shop" />
          <ul className="flex flex-col gap-2">
            <Link to="/shop">
              {" "}
              <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300"></li>
              Tất cả sản phẩm
            </Link>
            <HashLink to="/#new_Arrivals">
              {" "}
              <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
                Sản phẩm mới
              </li>
            </HashLink>
            <HashLink to="/#best_seller">
              {" "}
              <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
                Sản phẩm bán chạy
              </li>
            </HashLink>
          </ul>
        </div>
        <div>
          <FooterListTitle title="Về Mắt Kính Cao Lỗ " />
          <ul className="flex flex-col gap-2">
            <Link to="/about">
              {" "}
              <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
                Giới thiệu Mắt Kính Cao Lỗ
              </li>
            </Link>
            <Link to="/contact">
              <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
                Liên hệ
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
