import Image from "next/image"
import styles from "../style";
export const Hero = () => {
    return (
        <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
             <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
             <Image src="/assets/Circles.png" alt="ball" height={50} width={50}/>   
             </div>
                 
             </section>
        
    )
}