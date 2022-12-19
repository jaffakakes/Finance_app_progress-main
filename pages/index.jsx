import { Heading } from './components/Heading';
import { Benefits1 } from './components/Benefits1';
import Footer from './components/Footer';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar'
import styles from "./style";
import Step1 from './components/Example/Step1';
import { getUsers } from './utils/users';
import {useEffect} from 'react';



export default function Home() {
  useEffect(() => {
    getUsers();
  },[])
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
            <Heading/>

            <Step1/>
     <Footer/>
      </div>
      
      </div>
</div>
      </>
  )
}
