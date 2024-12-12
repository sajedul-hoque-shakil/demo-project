
import React from "react";
import {BrowserRouter as Router, Routes,Route,Link} from "react-router-dom";
import Home from "./page/Home";
import TodoList from "./page/TodoList";
import StopWatch from "./page/StopWatch";
import Calculator from "./page/Calculator";
import Weather from "./page/Weather";
import './index.css'

function App() {


  return (
    <Router>
      <div className="bg-gray-900 appdiv pt-2">
        <nav className="relative cw h-16
        mx-auto mt-5 rounded-lg
        bg-gradient-to-r from-sky-500 to-fuchsia-500   ">
          <ul className="flex justify-around ">
            
          <li className=""> 
           <Link to="/"> 
           <a href="">
           <span className="span1"><i class="fa-solid fa-house"></i></span>
           <span className="span2">Home</span>
           <span className="span3"></span>
           </a>
           </Link> 
           </li>

          <li className=""> 
           <Link to="/todoList">
            <a href="">
            <span className="span1"><i class="fa-solid fa-list"></i></span>
            <span className="span2">ToDoList</span>
            <span className="span3"></span>
            </a>
            </Link>
            </li>

          <li className=""> 
           <Link to="/stopWatch"> 
            <a href="">
            <span className="span1"><i class="fa-solid fa-stopwatch"></i></span>
            <span className="span2">Stop Watch</span>
            <span className="span3"></span>
             
            </a>
            </Link>
         </li>
         
          <li className="" > 
           <Link to="/calculator">
           <a href="">
           <span className="span1"><i class="fa-solid fa-calculator"></i></span>
           <span className="span2">Calculator</span>
           <span className="span3"></span>
           </a>
            </Link>
            </li>
          <li > 
           <Link to="/weather">
           <a href="">
           <span className="span1"><i class="fa-solid fa-cloud"></i></span>
           <span className="span2">Weather</span>
           <span className="span3"></span>
           </a>
            </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/todoList" element={<TodoList/>}></Route>
          <Route path="/stopWatch" element={<StopWatch/>}></Route>
          <Route path="/calculator" element={<Calculator/>}></Route>
          <Route path="/Weather" element={<Weather/>}></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App;
