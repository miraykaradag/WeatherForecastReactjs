import React from 'react'
import "./weather.css"

function Weather({date,mintemp,maxtemp,condition,icon,time,time2,time3,temp,temp2,temp3}) {

    //app.jsdeki weatherdakileri prop geeçtik fonksiyona
  return (
    <div className='result'>
      
      <br />
      
        <h2>{date}</h2>
        
        <ul>
            <li> <img src={icon}></img> </li>
            <li>{condition}</li>
            <br />
            <li>{mintemp} C° / {maxtemp} C°</li> 
            <br />
            <li> {time} |  {temp} C°</li>
            <br />
            <li> {time2} | {temp2} C°</li>
            <br />
            <li>{time3} | {temp3} C°</li>
            <br />
            

            

        </ul>

    </div>
  )
}

export default Weather;