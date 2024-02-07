import { useState, useEffect } from 'react'; 
import styles from './NextComponent.module.css';
import Flow1 from '../assets/flow1.gif';

const NextComponent = () => {
    const [showImage, setShowImage] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowImage(true);
        }, 1000);

        return () => setShowImage(false); 
    }, []); 

    return ( 
        <div className={styles.base}>
            {showImage && <img src={Flow1} alt="flow1" className={styles.flow1} />}
        </div>
    );
}
 
export default NextComponent;
