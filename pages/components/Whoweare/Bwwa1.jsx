import Image from "next/image"
import styles from "../../style";

import Button from "../Button";

export const Bwwa1 = () => {
    return (
    <section id="Benefits1" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
                <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>


<div className="flex flex-row justify-between items-center w-full">
  <h1 className="flex-1 font-outfit font-semibold  xxs:text-[30px] xs:text-[40px] ss:text-[55px] text-[52px] text-white  xxs: leading-[40px] ss:leading-[80.8px] leading-[50.5px]">
  Enjoy the ride
  </h1>
  
</div>
<p className={`${styles.paragraph} max-w-[470px] mt-5`}>
No matter your age or credit score you can own your dream car without hidden fee. Helping you enjoy buying a new car stress-free
</p>

</div>

<div className="md:w-[50%]">
<img src='./assets/enjoy.jpg' />
</div>




    </section>
    )
}