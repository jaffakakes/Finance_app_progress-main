
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
    <div>
        <Hero/>
      </div>
</div>
      </>
  )
}
