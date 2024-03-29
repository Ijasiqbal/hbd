import 'animate.css';
import { ReactTyped } from "react-typed";
import styles from './Title.module.css';
import popping from '../assets/popping.gif';
import { useEffect, useState } from "react";
import bgRemoved from '../assets/bgRemoved.png';
import Typewriter from 'typewriter-effect';

const Title = () => {
    const [showImage, setShowImage] = useState(false);
    const [showSheriyenna, setShowSheriyenna] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShowSheriyenna(true);
        }, 7000);
        const timer = setTimeout(() => {
            setShowImage(true);
            setTimeout(() => {
                setShowImage(false);
            }, 2000);
        }, 5000);
        return () => clearTimeout(timer); // Clear the timer if the component unmounts
    }, []); 

    return ( 
        <div className={styles.base}>
            <div className={styles.hbdTitle}>
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString('Happy Birthday Raiza!')
                  .pauseFor(2500)
                  .deleteChars(6)
                  .typeString('loose')
                  .pauseFor(2500)
                  .deleteChars(5)
                  .typeString('Raizuu')
                  .pauseFor(2500)
                  .start();
              }}
              options={
                {
                  loop: true,
                }
              }
            />
            </div>
            {showImage && <img src={popping} alt="popping" className={styles.giff} />}
            <img src={bgRemoved} alt="raizaPhoto" className={`animate__delay-5s  animate__animated animate__zoomIn  ${styles.raizaPhoto}`} />
       </div>
     );
}
 
export default Title;