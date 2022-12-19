import Image from "next/image"
import styles from "../style";
import Button from "./Button";

export const Benefits1 = () => {
    return (
    <section id="Benefits1" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
               <div className="flex h-[400px] flex-col md:flex-row justify-evenly w-[100%] sm:h-[500px] md:h-[100%] ">
               <div className="flex items-center flex-col">
                <h1 className="text-gradient font-bold text-[35px] sm:text-[50px]">A.I</h1>
                <p className="text-white font-semibold text-[18px] sm:text-[23px]">Car finance</p>
                </div>
                <div className="flex items-center flex-col">
                <h1 className="text-gradient font-bold text-[35px] sm:text-[50px]">100,000</h1>
                <p className="text-white font-semibold text-[18px] sm:text-[23px]">Sign ups</p>
                </div>
                <div className="flex items-center flex-col">
                <h1 className="text-gradient font-bold text-[35px] exs:text-[20px] sm:text-[50px]">0% A.P.R</h1>
                <p className="text-white font-semibold text-[18px] exs: text-[15px] sm:text[23px]">no matter age or credit score</p>
                </div>
                
                </div> 



    </section>
    )
}