import 'animate.css';
import React, { useState, useEffect } from 'react';
import Title from './component/Title';
import intro from './assets/intro.gif';
import NextComponent from './component/NextComponent';

function App() {
  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTitle(true);
    }, 4000);
    return () => clearTimeout(timer); 
  }, []);

  return (
    <>
      <div>
        {showTitle == false && <img src={intro} alt="introGif" className='introGiff' />}
        
        {showTitle && <Title />}
        {showTitle && <NextComponent />}
      </div>
    </>
  );
}

export default App;
