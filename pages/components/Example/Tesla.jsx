import React from 'react'
import styles from '../../style';
import nextStep from './Step1'

const Tesla = ({nextStep}) => {
    const Continue = e => {
        e.preventDefault();
        nextStep();
      }
  return (
    <section id="Benefits1" className={`flex flex-col ${styles.paddingY} `}>



      <div className='grid place-items-center py-5 md:py-10'>
      <button onClick={Continue} className="w-[60%] font-semibold text-[18px] md:text-[21px] md:font-semibold flex-shrink-0 bg-[#F3F9FF] hover:bg-primary hover:text-white border-[#F3F9FF] hover:border-primary text-sm border-4 text-primary py-1 px-2 rounded" >Tradional car finance</button>
      </div>
      <div className='grid place-items-center w-[100%]'>
   <div className='flex flex-row justify-evenly w-[100%] '>
         <div>
           <h2 className={`font-outfits font-semibold md:text-[48px] text-[28px] text-white xs:leading-[76.8px] leading-[66.8px] w-full`}>Year 1</h2>
           <p className={`font-outfits font-semibold md:text-[48px] text-[28px] text-white xs:leading-[76.8px] leading-[66.8px] w-full`}>£318</p>

         </div>
         <div>
           <h2 className={`font-outfits font-semibold md:text-[48px] text-[28px] text-white xs:leading-[76.8px] leading-[66.8px] w-full`}>Year 2</h2>
           <p className={`font-outfits font-semibold md:text-[48px] text-[28px] text-white xs:leading-[76.8px] leading-[66.8px] w-full`}>£387</p>

         </div>
         <div>
           <h2 className={`font-outfits font-semibold md:text-[48px] text-[28px] text-white xs:leading-[76.8px] leading-[66.8px] w-full`}>Year 3</h2>
           <p className={`font-outfits font-semibold md:text-[48px] text-[28px] text-white xs:leading-[76.8px] leading-[66.8px] w-full`}>£151</p>

         </div>
       </div>
   </div>

            <div className='flex md:flex-row flex-col py-10'>
            <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 md:py-10`}>




<h1 className="font-outfit font-semibold  xxs:text-[30px] xs:text-[40px]  ss:text-[55px] text-[52px] text-white xxs: leading-[40px] ss:leading-[80.8px] leading-[50.5px] w-full">
Ping finance
</h1>
<p className={`${styles.paragraph} max-w-[470px] mt-5`}>
Following requirements:<br/>
Credit Score: Average<br/>
Depoist: £0.00<br/>
A.P.R: 0%<br/>
Term length: 3 years<br/>
Service Charge: 20%
</p>


</div>

<div className={`flex-col xl:px-0 sm:px-16 px-6 md:px-0  py-3 md:py-10 `}>
         <div >
         <h1 className="font-outfit font-semibold  xxs:text-[30px] xs:text-[40px]  ss:text-[55px] text-[52px] text-white xxs: leading-[40px] ss:leading-[80.8px] leading-[50.5px] w-full">
Car
</h1>
</div>

             <h1 className={`${styles.paragraph} text-white`}>Make: Mercedes Benz C Class Coupe</h1>

         <div> <h1 className={`${styles.paragraph} text-white`}>Model: C200 AMG Line</h1></div>
         <h1 className={`${styles.paragraph} text-white`}>Year: 2022</h1>
         <h1 className={`${styles.paragraph} text-white`}>Price: £40,289</h1>
 
     </div>
 
              </div>


    </section>

  )
}

export default Tesla
