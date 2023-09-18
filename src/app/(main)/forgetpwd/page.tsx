import Navbar from "@/app/components/Navbar";
import React from "react";
import Image from "next/image";
import "./style.css";
type Props = {};

export default function ForgetPassword({}: Props) {
  return (
    <>
      <Navbar />
      <main className="w-screen h-[741px] flex justify-center items-center ">
        <div className="absolute 3xl:bottom-[100px] 3xl:left-[190px] destop:left-[-50px] destop:bottom-[100px]">
          <Image
            src={"./Teacher explaining while sitting.svg"}
            width={464}
            height={464}
            alt="Teacher"
          />
        </div>
        <div className="w-[539px] h-full pt-[90px] pb-[67px]  bg-[#FFFFFF] flex flex-col shadow-login rounded-[40px] px-[44px] items-center">
          <header className="w-full flex justify-center items-center h-[54px] mb-[18px] ">
            <span className="text-[40px] font-normal "> Forget password? </span>
          </header>
          <div className="w-full h-[22px] text-[16px] font-medium self-start mb-[16px]  text-[#8D8D8D]">
            <h6> Please fill you email to change password</h6>
          </div>
          <section className="flex flex-col  items-start w-full gap-y-3 mb-[36px]">
            <label htmlFor="Email" className="text-[16px] font-bold ">
              Email
            </label>
            <input
              type="text"
              name="Email"
              id=""
              className="w-full input-field  h-[57px] rounded-[9px] placeholder:text-[14px] placeholder:font-light"
              placeholder="Example@yahoo.com"
            />
          </section>
          <button className="w-full h-[54px] bg-[#F48C06] rounded-[10px] btn-reset text-[#FFFFFF]">
          Reset password
          </button>
        </div>
      </main>
    </>
  );
}
