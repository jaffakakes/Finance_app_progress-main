import { Banner } from './components/Banner';
import { Benefits1 } from './components/Benefits1';
import { Benefits2 } from './components/Benefits2';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar'
import styles from "./style";

export default function Home() {
  return (
    <>
    <div className="bg-primary w-full overflow-hidden">
 
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
       <Navbar/>
      </div>
    </div>
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
    <div className={`${styles.boxWidth}`}>
            <Hero/>
            <Benefits1/>
            <Banner/>
            <Benefits2/>
      </div>
      
      </div>
</div>
      </>
  )
}
