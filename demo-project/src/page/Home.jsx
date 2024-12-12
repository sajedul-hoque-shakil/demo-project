import Footer from"./Footer"
import  './index.css'
export default function Home(){
    return(
        <>
        <div className="text-white ">
    <div className=" gridMain">
        <div className="gridDiv items-1">
            <h1 className='text-3xl font-medium text-center capitalize'>react learning journey</h1>
            
        </div>
        <div className="gridDiv items-2">
        <ul className='flex justify-around text-3xl font-medium align-baseline items-center h-full'>
                <li>HTML</li>
                <li>CSS</li>
                <li>Tailwind</li>
                <li>Js</li>
                <li>React</li>
            </ul>
        </div>
        <div className="gridDiv items-3">
            <p className='text-xl font-medium p-5'>Learning font is a clean, modern, and legible typeface designed for educational platforms, focusing on readability, clarity, and versatility.</p>
        </div>
        <div className="gridDiv items-4">
            <p className='text-xl p-5'>
            HTML, CSS, JavaScript, Tailwind, and React are essential web development technologies. HTML structures content, CSS styles it, and JavaScript adds interactivity. Tailwind CSS simplifies styling with utility-first classes, while React, a powerful JavaScript library, builds dynamic, reusable UI components for seamless, modern, and efficient web applications.
            </p>
        </div>
        <div className="gridDiv items-5">
            <p className='text-xl p-3'>
            React is a popular JavaScript library for building user interfaces. Developed by Facebook, it enables developers to create dynamic, reusable components and manage application state efficiently. With its virtual DOM and declarative syntax, React simplifies complex UI development, making it ideal for building scalable and interactive web applications
            </p>
        </div>
        <div className="gridDiv items-6">
            <p className="p-2 textxl">
            Exciting job opportunity for a React Developer! Join our dynamic team to build responsive, user-friendly web applications. Leverage your expertise in React, JavaScript, and modern frameworks to create innovative solutions. Ideal candidates have a passion for coding, problem-solving skills, and experience in front-end development. Apply now to shape the future!
            </p>
        </div>
    </div>
            
            
        </div>
        <Footer/>
        </>
    )
}