import 'animate.css';
import { ReactTyped } from "react-typed";
import styles from './Title.module.css';
import popping from '../assets/popping.gif';
import { useEffect, useState } from "react";
import bgRemoved from '../assets/bgRemoved.png';

const Title = () => {
    const [showImage, setShowImage] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowImage(true);
            setTimeout(() => {
                setShowImage(false);
            }, 2000);
        }, 4000);
        return () => clearTimeout(timer); // Clear the timer if the component unmounts
    }, []); 

    return ( 
        <div className={styles.base}>
            <div className={styles.hbdTitle}>
            <ReactTyped
            startWhenVisible
              strings={[
                "Happy Birthday Raiza",
              ]}
              typeSpeed={150}
            />
            </div>
            {showImage && <img src={popping} alt="popping" className={styles.giff} />}
            <img src={bgRemoved} alt="raizaPhoto" className={`${styles.raizaPhoto } animate__slideInLeft`} />
       </div>
     );
}
 
export default Title;