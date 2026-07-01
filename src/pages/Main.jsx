import { useEffect, useState } from "react";

import { MdDeleteOutline } from "react-icons/md";

import img from '../assets/images/icons8-to-do-list-96.png'
import '../assets/styles/Main.css'
const Main = () => {

    const [inptValue, setInptValue] = useState("");
    const [check, setCheck] = useState(false);
    const [task, setTask] = useState(() => {
        return JSON.parse(localStorage.getItem("tasks")) || [];
    });
    const handleChange = (e) => {
        setInptValue(e.target.value);


    }


    const handleClick = () => {
        if (inptValue.trim() === "") {
            return
        }
        setTask([...task, inptValue])
        setInptValue("");


    }

    const handleDelete = (indexToDelete) => {
        setTask(task.filter((_, index) => index !== indexToDelete));
    };


    const handleCkeck = () => {

    }
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(task))

    }, [task])

    return (


        <>

            <div className="flex justify-center m-5 gap-5 items-center mt-24">
                <img src={img} alt="" className="w-15 h-15" />
                <p className="text-blue-400 font-bold text-xl">TooList</p>

            </div>


            <section className="mx-auto w-200 h-auto  bg-green-200 p-5 flex col justify-center items-center rounded-md">


                <div className="">
                    <input
                        value={inptValue}

                        onChange={handleChange}
                        type="text" className="border-2 focus:border-3 transition-all rounded-md outline-0 text-gray-500 p-3 w-100 border-green-600" placeholder="Type your task..." />

                    <button
                        onClick={handleClick}
                        className="bg-green-900 m-3 text-white p-2 h-12 w-24 rounded-md">Add</button>

                    {task.map((el, index) => {
                        return (
                            <div key={index} className="flex m-5 h-25  rounded-md justify-between p-5 items-center style text-white">

                                <div className="flex justify-center items-center gap-4">

                                    <input
                                        checked={check}
                                        onChange={(e) => setCheck(e.target.checked)}
                                        id="react-checkbox-list" type="checkbox" value="" class="w-4 h-4  outline-0" />



                                    <p
                                        className={`font-medium text-2xl ${check ? "line-through text-gray-400" : ""
                                            }`}
                                    >
                                        {el}
                                    </p>
                                </div>

                                <MdDeleteOutline
                                    onClick={() => handleDelete(index)}
                                    size={25} className="text-red-600 cursor-pointer hover:text-red-500 transition-all hover:-translate-y-1" />
                            </div>
                        )

                    })}
                </div>



            </section>


        </>
    )



}



export default Main