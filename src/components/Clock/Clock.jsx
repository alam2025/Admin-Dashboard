// import React from "react";
// import './Clock.css'
// const Clock = ({hourRatio, minuteRatio, secondRatio}) => {
    
//   return   <div  className="clock  ">
//   <div className="hand hour" style={{transform: `translate(-50%) rotate(${hourRatio * 360}deg)`}}></div>
//   <div className="hand minute"style={{transform: `translate(-50%) rotate(${minuteRatio * 360}deg)`}}  ></div>
//   <div className="hand second"style={{transform: `translate(-50%) rotate(${secondRatio * 360}deg)`}}  ></div>
  
//   <div className="number number1"><div></div></div>
//   <div className="number number2"><div></div></div>
//   <div className="number number3 ml-5"><div>3</div></div>
//   <div className="number number4"><div></div></div>
//   <div className="number number5"><div></div></div>
//   <div className="number number6 mt-5"><div>6</div></div>
//   <div className="number number7"><div></div></div>
//   <div className="number number8"><div></div></div>
//   <div className="number number9 -ml-6"><div>9</div></div>
//   <div className="number number10"><div></div></div>
//   <div className="number number11"><div></div></div>
//   <div className="number number12 -mt-6"><div>12</div></div>
// </div>;
// };

// export default Clock;



import React from 'react'
import Clock from 'react-simple-clock'
import './Clock.css'

const MyClock = () => <Clock live={true} hourMarkFormat="number" className="clock-class" />

export default MyClock
