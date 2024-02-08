import { useState, useEffect } from 'react'; 
import styles from './NextComponent.module.css';
import Flow1 from '../assets/Flow1.gif';
import frame1 from '../assets/frame3.jpg';
import clsx from 'clsx';

const NextComponent = () => {
    const [showGif, setShowGif] = useState(false);
    const [showImage2, setShowImage2] = useState(false);
    const [isActive, setIsActive] = useState(false);

    

    useEffect(() => {
        setShowGif(true);
    }, []); 
    

    return ( 
        <div className={clsx({
            [styles.base]: true,
        })}
        onTouchStart={
            () => {
                setIsActive(true);
                setTimeout(() => {
                    setIsActive(false);
                },2000)
            }
        }
        >
            {showGif && <img src={Flow1} alt="flow1" className={styles.flow1} />}
            {showImage2 && <img src={frame1} alt="flow1" className={styles.flow1} />}
            <div className={styles.quote}>
                <h4>Kulikkan lux</h4>
                <h4>Thalel thekkan vicks</h4>
                <h4>ninakku irikkatte oru birthday wish</h4>
            </div>

        </div>
    );
}
 
export default NextComponent;
