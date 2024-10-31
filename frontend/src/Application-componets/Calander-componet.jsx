import { useState } from 'react'
import './Calander-componet.css'

function Calander() {
  let weekdays = ["Hours","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]//Dic for the days

  const hours = [];
  const pattern = /00/;
  for (let i = 1; i <= 12; i++) {
    for (let j = 0; j < 60; j++) {
      const timeAM = `${i}:${j.toString().padStart(2, '0')} AM`;
      hours.push(timeAM);
    }
  }
  
  for (let i = 1; i <= 12; i++) {
    for (let j = 0; j < 60; j++) {
      const timePM = `${i}:${j.toString().padStart(2, '0')} PM`;
      hours.push(timePM);
    }
  }
  return (
    //calander grid main componet
    <div className='grid'>
          {weekdays.map((weekday) =>(
          <div className='Weekdayitem'>{weekday}</div>//looping the days here
          
          ))}
            {hours.map((hour) => (
              pattern.test(hour)? (
                <div className='houritem' key={hour}>{hour}</div>
              ) : (
                <div className='minitem' key={hour}>{}</div>
              )
            ))}
                  
    </div>
    
  )
}

export default Calander
