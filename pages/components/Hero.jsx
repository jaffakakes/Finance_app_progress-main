import Image from "next/image"
import { useEffect, useState } from "react";
import styles from "../style";
import Button from "./Button";



export const Hero = () => {

    return (
        <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}  `}>
        <div className={`flex-1 md:h-[100%] md:${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6  space-y-10  xxs:space-y-5 `}>

      
        <div className="flex flex-col justify-between xxs:py-5">
          <h1 className=" text-center text-[30px] font-bold  flex-1 font-outfit font-semibold exs:text-[20px]  md:text-[60px] md:text-left md:font-bold  xs:text-[40px] ss:text-[55px] text-[52px] text-white  xxs: leading-[40px] ss:leading-[80.8px] leading-[60.5px]">
          Car finance, <br className="sm:block hidden" />{" "}
          
          </h1>
          <h1 className="text-center text-[30px] font-bold  font-outfit font-semibold exs: text-[20px] exs: leading-[10px]  md:text-[60px] md:text-left md:font-bold xs:text-[40px]  ss:text-[55px] text-[52px] text-white xxs: leading-[40px] ss:leading-[80.8px] leading-[50.5px] w-full">
          without the finance
        </h1>
        </div>

       
        <p className={`font-outfits font-normal text-dimWhite text-[18px] sm:text-[25px] leading-[30.8px] text-center md:max-w-[500px] mt-5  md:text-left `}>
        Buying a new car is simple and accessible for everyone. 
        </p>
   <form action="../api/form" method="post">
   <div className="flex items-center ss: flex-col  py-2 md:flex-row">
    <div className="border-b border-teal-500 w-[70%] md:w-[100%]">
    <input type="text" id="email" name="email" className="appearance-none  bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" placeholder="Email" aria-label="Full name"></input>

    </div>
    <div className="pl-5 ss: pt-5">
    <button type="submit" className=" w-[100px] font-semibold flex-shrink-0 bg-[#F3F9FF] hover:bg-primary hover:text-white border-[#F3F9FF] hover:border-primary text-sm border-4 text-primary py-1 px-2 rounded" >
      Sign Up
    </button>
    </div>
   
  
  </div>
     </form>    

        
      </div>
      <div className={`hidden  ${styles.flexCenter} md:my-0 my-10 relative md:flex md:flex-1 `}>
        <img src="/assets/Phones.png" alt="billing" className="w-[100%] h-[100%] relative z-[5]" />


      </div>



        
  


             
                
            
            
     
           
                 
             </section>
        
    )
}