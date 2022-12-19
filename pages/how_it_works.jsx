import styles from "./style";
import { Navbar } from './components/Navbar'
import { How1 } from "./components/Howitworks/How1";
import { How2 } from "./components/Howitworks/How2";
import { How3 } from "./components/Howitworks/How3";
import { How4 } from "./components/Howitworks/How4";
import Footer from "./components/Footer";

export default function how_it_works () {
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

    <How1/>
    <How2/>
    <How3/>
    <How4/>
    <Footer/>
    </div>
    </div>
    
        </div>
        </>
    )
}