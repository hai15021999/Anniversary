import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const startDate = new Date('2023-09-18 00:00:00');

  const [anniversaryDate, setAnniversaryDate] = React.useState(0);
  const [isInitialized, setIsInitialized] = React.useState(false);

  useEffect(() => {
    if (!isInitialized) {
      handleAnniversaryCalculation();
      setIsInitialized(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInitialized]);

  const handleAnniversaryCalculation = () => {
    setInterval(() => {
      const currentDate = new Date();
      const diff = currentDate.getTime() - startDate.getTime();
      const days = Math.floor(diff / (1000 * 60 * 60 * 24)) + 1;
      setAnniversaryDate(days);
    }, 1000);
  }

  return (
    <div className="App">
      {/* <div className="heart" style={{ transform: 'rotate(-45deg)', top: 40, left: 40 }}></div> */}
      {/* <div className="heart" style={{ transform: 'rotate(45deg)', top: 40, right: 40 }}></div> */}
      <div className='body-container'>
        <div style={{ width: 190, zIndex: 100 }}>
          <span className='message'>Chúng ta đã quen nhau <br></br>{anniversaryDate} ngày</span>
        </div>
        <div className="center_heart"></div>

      </div>
    </div>
  );
}

export default App;
