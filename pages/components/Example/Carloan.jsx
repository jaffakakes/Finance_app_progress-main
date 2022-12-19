import React from 'react'
import styles from '../../style';

// const Carloan = ({prevStep}) => {
//     const Previous = e => {
//         e.preventDefault();
//         prevStep();
//       }
//   return (
//     <section id="Benefits1" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
//     <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>


// <div className="flex flex-row justify-between items-center w-full">
// <h1 className="flex-1 font-outfit font-semibold  xxs:text-[30px] xs:text-[40px] ss:text-[55px] text-[52px] text-white  xxs: leading-[40px] ss:leading-[80.8px] leading-[50.5px]">
// Traditional interest <br className="xxs:block ss:block xs:block sm:block hidden" />{" "}


// </h1>

// </div>

// <h1 className="font-outfit font-semibold  xxs:text-[30px] xs:text-[40px]  ss:text-[55px] text-[52px] text-white xxs: leading-[40px] ss:leading-[80.8px] leading-[50.5px] w-full">
// based car finance
// </h1>
// <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
// Following requirements:<br/>
// Credit Score: Excellent<br/>
// Depoist: £4,289<br/>
// Term length: 3 years<br/>
// A.P.R: 12.9%
// </p>

// </div>




// <div>
//     <div>
//     <h1 className="flex-1 font-outfit font-semibold  xxs:text-[30px] xs:text-[40px] ss:text-[55px] text-[52px] text-white  xxs: leading-[40px] ss:leading-[80.8px] leading-[50.5px]">
// Traditional interest <br className="xxs:block ss:block xs:block sm:block hidden" />{" "}


// </h1>

//     <div>
//             <h1 className={`${styles.paragraph} text-white`}>Make: Mercedes Benz C Class Coupe</h1>

//         </div>
//         <div> <h1 className={`${styles.paragraph} text-white`}>Model: C200 AMG Line</h1></div>
//         <h1 className={`${styles.paragraph} text-white`}>Year: 2022</h1>
//         <h1 className={`${styles.paragraph} text-white`}>Price: £40,289</h1>
//         </div>
//         <div className='flex flex-row w-[100%] justify-evenly'>
//         <div>
//           <h2>Year 1:</h2>
//           <p>£707</p>

//         </div>
//         <div>
//           <h2>Year 2:</h2>
//           <p>£707</p>

//         </div>
//         <div>
//           <h2>Year 3:</h2>
//           <p>£707</p>

//         </div>
//       </div>
// </div>


// </section>
    

//   )
// }

// export default Carloan


const Carloan = ({prevStep}) => {
  const Previous = e => {
            e.preventDefault();
            prevStep();
          }
return (
  <section id="Benefits1" className={`flex flex-col ${styles.paddingY} justify-evenly `}>
    <div className='grid place-items-center py-10'>
    <button onClick={Previous} className="  w-[60%] font-semibold text-[21px] md:font-semibold flex-shrink-0 bg-[#F3F9FF] hover:bg-primary hover:text-white border-[#F3F9FF] hover:border-primary text-sm border-4 text-primary py-1 px-2 rounded" >Ping</button>
    </div>
    <div className='grid place-items-center w-[100%]'>
   <div className='flex flex-row justify-evenly w-[100%] '>
         <div>
           <h2 className={`font-outfits font-semibold md:text-[48px] text-[28px] text-white xs:leading-[76.8px] leading-[66.8px] w-full`}>Year 1</h2>
           <p className={`font-outfits font-semibold md:text-[48px] text-[28px] text-white xs:leading-[76.8px] leading-[66.8px] w-full`}>£776</p>

         </div>
         <div>
           <h2 className={`font-outfits font-semibold md:text-[48px] text-[28px] text-white xs:leading-[76.8px] leading-[66.8px] w-full`}>Year 2</h2>
           <p className={`font-outfits font-semibold md:text-[48px] text-[28px] text-white xs:leading-[76.8px] leading-[66.8px] w-full`}>£776</p>

         </div>
         <div>
           <h2 className={`font-outfits font-semibold md:text-[48px] text-[28px] text-white xs:leading-[76.8px] leading-[66.8px] w-full`}>Year 3</h2>
           <p className={`font-outfits font-semibold md:text-[48px] text-[28px] text-white xs:leading-[76.8px] leading-[66.8px] w-full`}>£776</p>

         </div>
       </div>
   </div>

          <div className='flex md:flex-row flex-col py-10'>
          <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>




 <div>
 <h1 className="flex-1 font-outfit font-semibold  xxs:text-[30px] xs:text-[40px] ss:text-[55px] text-[52px] text-white  xxs: leading-[40px] ss:leading-[80.8px] leading-[50.5px]">Traditional <br className="xxs:block ss:block xs:block sm:block hidden" />{" "}</h1>
</div>
<div>
<h1 className="font-outfit font-semibold  xxs:text-[30px] xs:text-[40px]  ss:text-[55px] text-[52px] text-white xxs: leading-[40px] ss:leading-[80.8px] leading-[50.5px] w-full">
 car finance
 </h1>
<p className={`${styles.paragraph} max-w-[470px] mt-5`}>
Following requirements:<br/>
Finance Type: PCP<br/>
Credit Score: Excellent<br/>
Depoist: £4,289<br/>
 Term length: 3 years<br/>
 A.P.R: 12.9%
</p>

 </div>

</div>

<div className={`flex-col xl:px-0 sm:px-16 px-6 md:px-0  py-3 md:py-10 `}>
       <div>
       <h1 className="flex-1 font-outfit font-semibold  xxs:text-[30px] xs:text-[40px] ss:text-[55px] text-[52px] text-white  xxs: leading-[40px] ss:leading-[80.8px] leading-[50.5px]">
Car <br className="xxs:block ss:block xs:block sm:block hidden" />{" "}


</h1>

           <h1 className={`${styles.paragraph} text-white`}>Make: Mercedes Benz C Class Coupe</h1>

       </div>
       <div> <h1 className={`${styles.paragraph} text-white`}>Model: C200 AMG Line</h1></div>
       <h1 className={`${styles.paragraph} text-white`}>Year: 2022</h1>
       <h1 className={`${styles.paragraph} text-white`}>Price: £40,289</h1>

   </div>

            </div>


  </section>

)
}

export default Carloan
