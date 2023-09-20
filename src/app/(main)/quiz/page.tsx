import React from "react";
import Image from "next/image";
import { Poppins , Inter } from "next/font/google";
import QuizComponent from "./QuizComponent";
import Navbarofquiz from "@/app/components/Navbarofquiz";
import QuizHeader from "./QuizHeader";
import QuizContent from "./QuizContent";
import QuizList from "./QuizList";
import QuizChiose from "./QuizChiose";
import QuizcoverHead from "./QuizcoverHead";
import QuizBtnNext from "./QuizBtnNext";
export const poppins = Poppins({ weight: "700", subsets: ["latin"] });
export const inter = Inter({weight  : '700' , subsets: ['latin'] })



type Props = {};

export default function page({}: Props) {
  return (
    <>
    <Navbarofquiz/>
    <main>
      <section className="mt-[45px]">
        <h6 className="text-[16px] font-normal">
          ไอทีและซอฟต์แวร์ {">"} Machine learning
        </h6>
        <h1 className={`${poppins.className} text-[40px] text-[#2F327D]`}>
          Introduction to Machine Learning{" "}
        </h1>
        <div className="flex w-full h-[28px] justify-start items-center gap-x-[25px]">
          <div className=" flex justify-start items-center">
            <Image alt="star" width={19.5} height={18.76} src={"/star.svg"} />
            4.2
          </div>
          <div className="flex justify-start items-center">
            <Image alt="user" width={24} height={24} src={"/Users.svg"} /> 1356
          </div>
          <p className=""> By Mr.John Stark</p>
          <p className="">เผยแพร่เมื่อ 12 มิถุนายน 2566</p>
        </div>
      </section>
      <section className="w-full h-[42px] mt-[35px] mb-[40px]">
        <ul className="w-full list-none flex justify-around    ">
          <li className="grow text-center   h-full  cursor-pointer border-b-2 pb-3  focus:border-[#F48C06]"> Overview</li>
          <li className="grow text-center   h-full cursor-pointer border-b-2 pb-3"> Curriculum</li>
          <li className="grow text-center  h-full cursor-pointer border-b-2  pb-3"> Requirements</li>
          <li className="grow text-center  h-full cursor-pointer border-b-2  pb-3"> Course Creator</li>
        </ul>
       
      </section>

      <section className="w-[1105px] h-[206px] mb-[40px] ">
        <h4 className="font-semibold text-[24px] text-[#2F327D]">Overview </h4>
        <p className="text-[14px] block text-start">
          Welcome to the `&quot;`Introduction to Machine Learning`&quot;`
          course! In this comprehensive journey, you will delve into the
          fascinating world of machine learning and gain a strong foundation in
          understanding its concepts, techniques, and applications. Whether
          you`&#39;`re a curious beginner or an aspiring data scientist, this
          course is designed to empower you with the skills needed to embark on
          your machine learning adventure. <br />
          <br /> Machine learning is revolutionizing industries, from healthcare
          and finance to entertainment and beyond. This course is your gateway
          to unlocking the potential of machine learning and harnessing its
          power for real-world problem-solving. You`&#39;`ll explore the entire
          machine learning lifecycle, from data preparation and model training
          to evaluation and deployment. Each step is carefully crafted to
          provide you with practical knowledge that can be applied immediately.
        </p>
      </section>

      <section className="w-[1120] max-h-[10000px]  ">
        <div className="flex justify-between w-full items-center mb-[24px]">
          <h6 className="text-[24px] font-semibold text-[#2F327D]">
            Learning Path{" "}
          </h6>
          <h6 className="text-[16px] font-semibold text-[#23BD33]">
            เรียนไปแล้ว 12%{" "}
          </h6>
        </div>
        <div className="w-full max-h-[1566px] ">
          <button className="w-full bg-[#F5F7FA] flex justify-between h-[62px] items-center rounded-t-[14px]">
            <span className="px-[20px] text-[#2F327D]">
              {" "}
              {">"} บทที่ 1  <span className={poppins.className}>Introduction to Machine Learning{" "} </span>
            </span>
            <Image
              alt="correct"
              width={31}
              height={31}
              src={"/Check Box.svg"}
              className="mr-4"
            />
          </button>
          <div className="bg-[#FFFFFF]  w-full flex flex-col border-[1px] rounded-b-[14px]">
              <div className="w-[1120px] h-[216px] px-[48px] mb-3">
                <h6 className="text-[16px] mt-5"> Objectives : </h6>
                <ul className="list-disc ml-[30px]">
                  <li>
                    Definition of machine learning and its applications.{" "}
                  </li>
                  <li>
                    Understanding supervised, unsupervised, and reinforcement
                    learning.
                  </li>
                  <li> The role of data in machine learning. </li>
                </ul>
                <h6 className="text-[16px] leading-[22px] mt-5">
                
                  Recommended Resources:{" "}
                </h6>
                <ul className="list-disc ml-[30px]">
                  <li>
                    Machine Learning by Stanford University (Coursera) -
                    Provides a solid foundation in machine learning concepts by
                    Andrew Ng.
                  </li>
                  <li>
                    Machine Learning Mastery - Offers tutorials and practical
                    tips on machine learning techniques.
                  </li>
                </ul>
              </div>
            <hr  className="w-full mb-5"/> 
            <div className="w-full px-[108px] h-[500px]">
              <h4 className="text-center  text-[16px] font-bold text-[#2F327D]">Chapter 1 Quiz </h4>
              <h5 className="text-center text-[16px] font-bold text-[#2F327D]"> Quiz 1/5</h5>
              <div className="flex flex-col mt-[44px] w-[836px] h-[534px] gap-y-[36px]" >
                <h6 className={`${inter.className} font-bold text-[16px] text-[#696984]`}>What is the primary goal of machine learning?</h6>
                <label >
                  <input type="radio" name="choise"  />{" "}
                  <span> To mimic human intelligence</span>
                </label>
                <label >
                  <input type="radio" name="choise" />{" "}
                  <span> To automate repetitive tasks</span>
                </label>
                <label >
                  <input type="radio" name="choise" />{" "}
                  <span> To find patterns in data and make predictions</span>
                </label>
                <label >
                  <input type="radio" name="choise" />{" "}
                  <span> To perform complex calculations </span>
                </label>
              </div>
            </div>
            <button type="button" className="self-end mr-[56px] mb-[20px] w-[147px] h-[37px] rounded-[14px] border-[#F48C06] border-[1px] text-center text-[#F48C06] text-[14px]"> Next</button>
          </div>
        </div>
        <QuizComponent  unit={"บทที่ 2"} detail={"Introduction to Machine Learning"} Chapter={"Chapter 2 Quiz"}>
        <QuizcoverHead>
          <QuizHeader>Objectives : </QuizHeader>
          <QuizContent>
              <QuizList>Definition of machine learning and its applications. </QuizList>
              <QuizList> Understanding supervised, unsupervised, and reinforcement learning.</QuizList>
              <QuizList> The role of data in machine learning.</QuizList>
          </QuizContent>
          <QuizHeader> Recommended Resources: </QuizHeader>
          <QuizContent>
              <QuizList>Machine Learning by Stanford University (Coursera) - Provides a solid foundation in machine learning concepts by Andrew Ng. </QuizList>
              <QuizList>Machine Learning Mastery - Offers tutorials and practical tips on machine learning techniques.</QuizList>
          </QuizContent>
        </QuizcoverHead>
             <hr  className="w-full mb-5 mt-5"/> 
        <QuizChiose  title={"Chapter 1 Quiz"} numberQuiz={"Quiz 1/5"} />
     
       
        
      </QuizComponent>
        
        <QuizComponent unit="บทที่ 3" detail="Introduction to Machine Learning" Chapter={"Chapter 3 Quiz"}>
        <QuizcoverHead>
          <QuizHeader>Objectives : </QuizHeader>
          <QuizContent>
              <QuizList>Definition of machine learning and its applications. </QuizList>
              <QuizList> Understanding supervised, unsupervised, and reinforcement learning.</QuizList>
              <QuizList> The role of data in machine learning.</QuizList>
          </QuizContent>
          <QuizHeader> Recommended Resources: </QuizHeader>
          <QuizContent>
              <QuizList>Machine Learning by Stanford University (Coursera) - Provides a solid foundation in machine learning concepts by Andrew Ng. </QuizList>
              <QuizList>Machine Learning Mastery - Offers tutorials and practical tips on machine learning techniques.</QuizList>
          </QuizContent>
        </QuizcoverHead>
             <hr  className="w-full mb-5 mt-5"/> 
        <QuizChiose  title={"Chapter 1 Quiz"} numberQuiz={"Quiz 1/5"} />
        
        
       

        </QuizComponent>
        
      
      </section>
    </main>
    </>
    
  );
}
