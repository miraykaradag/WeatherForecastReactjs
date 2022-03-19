import './App.css';
import React,{useState} from "react";
import Weather from './components/weather';


function App() {
  const API_KEY="88d510dd22bf472fa43111542221303"
  let cityinput="";
  const[weatherdata,setWeatherdata]=useState([]);

  
  
  function citytext(){
  
    document.querySelector("input").addEventListener("input",(e)=>{
      //e.preventDefault();
      cityinput=e.target.value;
      console.log(cityinput);
  
    })
  }
  
  
  async function getdata(value){
    console.log("Buton tıklandı");
  
    const data=await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${value}&days=3&lang=tr`)
    const result=await data.json();
    
    setWeatherdata(result.forecast.forecastday)
   console.log(result.forecast.forecastday)
   console.log(result);



  }

  return (
    
    <div className="App">
      
      <h1>HAVA DURUMU TAHMİNİ</h1>

      <div className="search">
        
      <input type="text"
         placeholder='Bir şehir seçiniz..'
          onChange={citytext}/>
        
        <button onClick={()=>getdata(cityinput)}>Seç</button>


      </div>

      <div className='bg'>
        
      {weatherdata.map(item=>
      
      

      (<Weather

 
        key={item.date} 
        date={item.date} 
        mintemp={item.day.mintemp_c} 
        maxtemp={item.day.maxtemp_c} 
        condition={item.day.condition.text} 
        icon={item.day.condition.icon}

        time={item.hour[0].time}
        temp={item.hour[0].temp_c}
        

        time2={item.hour[6].time}
        temp2={item.hour[6].temp_c}


        time3={item.hour[12].time}
        temp3={item.hour[12].temp_c}


      

      
      
      />
      ))}


      </div>



     
    </div>
  );
}

export default App;
