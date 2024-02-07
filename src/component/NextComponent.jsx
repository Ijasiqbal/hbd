import { useState, useEffect } from 'react'; 
import styles from './NextComponent.module.css';
import Flow1 from '../assets/Flow1.gif';
import frame1 from '../assets/frame3.jpg';

const NextComponent = () => {
    const [showImage, setShowImage] = useState(false);
    const [showImage2, setShowImage2] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowImage(true);
            setTimeout(() => {
                setShowImage(false);
                setShowImage2(true);
            }, 2000);
        }, 1000);
    }, []); 

    return ( 
        <div className={styles.base}>
            {showImage && <img src={Flow1} alt="flow1" className={styles.flow1} />}
            {showImage2 && <img src={frame1} alt="flow1" className={styles.flow1} />}
        </div>
    );
}
 
export default NextComponent;
