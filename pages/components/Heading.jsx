import styles from "../style";
export const Heading = () => {
    return (
        <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2  box-shadow`}>
        <div className="flex-1 flex flex-col">
          <h2 className={`${styles.heading2} text-center md:text-[40px] exs: text-[20px] ss:text-[30px] xs:text-[20px] xxs:text-[18px] xxs:leading-7 xs:leading-11 ss:leadind-10 md:leading-10`}>Quote example</h2>
    
        </div>
    
   
      </section>
)}