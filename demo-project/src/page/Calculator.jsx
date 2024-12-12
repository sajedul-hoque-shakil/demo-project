import Footer from"./Footer"
import { useState } from "react"

export default function Calculator(){
    const[result, setResul]=useState(0);
    const[input,setInput]=useState("");
    const handleClick=(value)=>{
        setInput((prev)=>prev+value);

    };
    const clearInput=()=>{
        setInput("")
        setResul(0);
    }
    const calculatResult=()=>{
        try{
            setResul(eval(input));
        }catch(error){
            alert("Invalid Expretion");
        }
    };
    return(
        <>
        <div className="">

        
           <h1 className="text-center text-4xl font-bold my-5 text-white">CalCulator</h1>
        <div className="text-white border-4 w-96 mx-auto pt-5 mb-5 rounded-xl">
           <div className="w-60 mx-auto bg-gray-500 min-h-20 p-2 text-2xl pl-5 rounded-xl">
            <p  >{result||"0"}</p>
            <p className=" ">{input}</p>
           </div>
           <div className=" grid grid-cols-4 w-96 mx-auto p-10 ">
            {["1","2","3","+","4","5","6","-","7","8","9","*","0",".","C","/","="].map((btn) =>(
                <button key={btn} onClick={()=>{
                    if(btn==="C") clearInput("");
                    else if(btn=== "=") calculatResult();
                    else handleClick(btn);
                }} className="p-2 bg-orange-300 m-2 text-black rounded-2xl">{btn}</button>
            ))}
           </div>
        </div>
        </div>
        <Footer/>
        </>
    )
}