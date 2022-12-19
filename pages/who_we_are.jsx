import styles from "./style";
import { Navbar } from './components/Navbar'
import { Bwwa1 } from './components/Whoweare/Bwwa1';
import { Bwwa2 } from './components/Whoweare/Bwwa2';
import Footer from './components/Footer';

export default function who_we_are() {
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
    <Bwwa1/>
    <Bwwa2/>
    <Footer/>
    </div>
    </div>
      </div>
      </>
    )}