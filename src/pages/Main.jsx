import { useEffect, useState } from "react";

import { MdDeleteOutline } from "react-icons/md";



const Main = () => {

    const [inptValue, setInptValue] = useState("");
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
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(task))

    }, [task])

    return (


        <>
            <section className="mx-auto w-200 h-auto mt-36 bg-green-200 p-5 flex row justify-center items-center rounded-md">

                {/* <img src="icons8-to-do-list-96" alt="" /> */}

                <div className="">
                    <input
                        value={inptValue}

                        onChange={handleChange}
                        type="text" className="border-2 rounded-md outline-0 text-gray-500 p-3 w-100 border-green-600" placeholder="Type your task..." />

                    <button
                        onClick={handleClick}
                        className="bg-green-900 m-3 text-white p-2 h-12 w-24 rounded-md">Add</button>

                    {task.map((el, index) => {
                        return (
                            <div key={index} className="flex m-5 h-25  rounded-md justify-between p-5 items-center bg-green-300 text-white">
                                <p className="font-medium text-lg">{el}</p>
                                <MdDeleteOutline
                                    onClick={() => handleDelete(index)}
                                    size={25} className="text-red-500 cursor-pointer hover:text-red-600 transition-all" />
                            </div>
                        )

                    })}
                </div>



            </section>


        </>
    )



}



export default Main