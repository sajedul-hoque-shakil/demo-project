import Footer from"./Footer"
import "./index.css"
import {useEffect,useState} from "react"
export default function stopWatch(){
    const[time,setTime]=useState(0);
    const[runing,setRuning]=useState(false);
    useEffect(()=>{
        let intervel ;
        if(runing){
             intervel=setInterval(()=>{
                setTime((prv)=> prv+1)
            },1);
        }else{
            clearInterval(intervel);
        } return()=> clearInterval(intervel);
    },[runing]);
    const starHandle=()=> setRuning(true);
    const stopHandle=()=> setRuning(false);
    const resethandle=()=>{
        setRuning(false);
        setTime(0);
    };
    const timeFormate=(time)=>{
        const hours= String(Math.floor(time/(250*60*60))).padStart(2,"0");
        const minute=String(Math.floor((time%(250*60*60))/(250*60))).padStart(2,"0");
        const second=String(Math.floor((time %(250*60))/250)).padStart(2,"0");
        const miliSecond=time%100;
        return `${hours}:${minute}:${second}:${miliSecond}`;
    }
    return(
        <>
        
        <div className="text-white min-h-screen flex justify-center items-center">
            <div className=" min-w-96">
                <h1 className="text-4xl bg-orange-700 w-64 p-5 mb-5 rounded-xl font-bold ">Stop Wacth</h1>
                <p className=" text-5xl">{timeFormate(time)}</p>
                <div className="wbtn">
                    <button onClick={starHandle} disabled={runing} className="p-5 bg-orange-700 m-2 rounded-xl "> Start</button>
                    <button onClick={stopHandle} disabled={!runing} className="p-5 bg-orange-700 m-2 rounded-xl "> Stop</button>
                    <button onClick={resethandle} disabled={runing} className="p-5 bg-orange-700 m-2 rounded-xl "> Reset</button>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}