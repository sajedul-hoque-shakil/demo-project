import { useState } from "react";
import axios from "axios";
import Footer from "./Footer";
export default function Weather(){
    const [city,setCity]=useState("");
    const [weather,setWeather]=useState(null);
    const [error,setError]=useState("");
    const apiURL="https://api.openweathermap.org/data/2.5/weather";
    const apiKey="634e38ef88f5cfb04c92df732574aeca";
    const feachWeather=async ()=>{
        if(!city) {
            setError("place in Your CiTY");
            return;
        }
        try{
            const response= await axios.get(apiURL,{
                params: {
                    q:city,
                    appid:apiKey,
                    units:"metric"
                }
            });
            setWeather(response.data);
            setError("");
        }catch(error){
            setWeather(null);
            setError("Your city Not Fount");
        }

    }

    return(
        <>
        <div className="text-white">
            <div className="w-96 mx-auto min-h-60 my-2">
                <h1 className="text-4xl font-bold text-orange-700"> Weather APP</h1>
                <input type="text" placeholder="type Your city" value={city} onChange={(e)=> setCity(e.target.value)}  className="text-xl px-5 py-2 w-56 placeholder:text-xl mr-2 text-black"/>
                <button onClick={feachWeather} className="text-2xl bg-orange-600 font-bold p-1 rounded-lg"> Get Weather</button>
            </div>
            <div className="my-2 w-96 mx-auto min-h-96">
                {error && <p className="text-3xl text-red-600"> {error}</p>}
                {weather && (
                    <div className="">
                        <p className="text-2xl font-bold text-orange-500 my-3"> {weather.name},{weather.sys.country}</p>
                        <p className="text-2xl font-bold text-orange-500 my-3">Weather Description:{weather.weather[0].description}</p>
                        <p className="text-2xl font-bold text-orange-500 my-3">Tempature: {weather.main.temp}°C</p>
                        <p className="text-2xl font-bold text-orange-500 my-3"> Humidity: {weather.main.humidity}%</p>
                        <p className="text-2xl font-bold text-orange-500 my-3">Wind Speed: {weather.wind.speed}m/s</p>
                    </div>
                )}
            </div>
        </div>
        <Footer/>
        </>
    );
}