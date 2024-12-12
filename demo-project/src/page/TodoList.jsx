import { useState,useEffect } from "react";
import Footer from"./Footer"
export default function ToDoList(){
    const [tasks,setTasks]=useState(()=>{
        const seveTasks=localStorage.getItem("tasks");
        return seveTasks? JSON.parse(seveTasks):[];
    });
    const[newTask,setNewTasks]=useState("");
    useEffect(()=>{
        localStorage.setItem("tasks",JSON.stringify(tasks));
    },[tasks]);
    const addTask=()=>{
        if(newTask.trim() !==""){
            setTasks([...tasks,{text:newTask, completed:false}]);
            setNewTasks("");
        };
    };
    const deletButton=(index)=>{
        setTasks(tasks.filter((_,i)=> i !== index));
    };
    const toggleComplet=(index)=>{
        setTasks(tasks.map((task,i)=> i===index?{...task, completed:!task.completed}:task ));
    };
    return(
        <>
        <div className="text-white  todoDiv1 mt-20">
            <div className="todoDiv2 mx-auto" >
                <h1 className=" text-4xl font-black bg-orange-600 text-center p-2">ToDo List</h1>
                <input type="text" placeholder="Adding ToDo..." value={newTask} onChange={(e)=> setNewTasks(e.target.value)}className="text-black w-80 h-10 text-xl pl-3 mt-5" />
                <button onClick={addTask} className="bg-green-500 p-2 ml-4 text-2xl"> ADD ToDo</button>
            </div>
            <div className="  todoDiv3 ">
                <ul className=" relative ">
                    {tasks.map((task,index)=>(
                        <li key={index} className="flex justify-between bg-orange-600 p-2 text-xl font-bold mt-2"> <span onClick={()=> toggleComplet(index)} style={{textDecoration:task.completed?"line-through":"none", textDecorationColor: task.completed?"red":"black", textDecorationThickness:task.completed?"5px":"none", cursor:"pointer"}} className="mt-2 text-4xl">
                            {task.text}</span>
                            <button onClick={()=> deletButton(index)} className=" border-2 p-2 rounded-lg">Delet</button>
                            </li>
                    ))}
                </ul>
            </div>
        </div>
        <Footer/>
        </>
    )
}
