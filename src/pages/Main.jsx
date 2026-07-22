import { useEffect, useState } from "react";

import { MdDeleteOutline } from "react-icons/md";

import img from '../assets/images/icons8-to-do-list-96.png'
import '../assets/styles/Main.css'
const Main = () => {

    const [inptValue, setInptValue] = useState("");
    const [check, setCheck] = useState(false);
    const [filter, setFilter] = useState("All")
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
        setTask([
            ...task,
            {
                text: inptValue,
                completed: false,
            },
        ]);
        setInptValue("");


    }

    const handleDelete = (indexToDelete) => {
        setTask(task.filter((_, index) => index !== indexToDelete));
    };


    const handleCheck = (index) => {
        const newTasks = [...task];

        newTasks[index].completed = !newTasks[index].completed;

        setTask(newTasks);
    };


    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(task))

    }, [task])
    const filteredTasks = task.filter((item) => {
        if (filter === "All") {
            return true;
        }

        if (filter === "Active") {
            return !item.completed;
        }

        if (filter === "Done") {
            return item.completed;
        }
    });
    return (


        <>

            <div className="flex justify-center m-5 gap-5 items-center mt-24">
                <img src={img} alt="" className="w-15 h-15" />
                <p className="text-orange-400 font-bold text-xl">ToDoList</p>

            </div>


            <section className="mx-auto w-200 h-auto  bg-green-200 p-5 flex col justify-center items-center rounded-md">


                <div className="">
                    <input
                        value={inptValue}

                        onChange={handleChange}
                        type="text" className="border-2 focus:border-3 transition-all rounded-md outline-0 text-gray-500 p-3 w-100 border-green-600" placeholder="Type your task..." />

                    <button
                        onClick={handleClick}
                        className="bg-green-900 m-3 text-white  w-10 h-10 text-center text-2xl font-extrabold rounded-full cursor-pointer">+</button>
                    <div className="mt-5 flex gap-5">




                        <button
                            onClick={() => setFilter("All")}
                            className={`pb-1 ${filter === "All"
                                    ? "border-b-2 border-blue-500 text-blue-500"
                                    : "text-orange-500"
                                }`}
                        >
                            All
                        </button>

                        <button
                            onClick={() => setFilter("Active")}
                            className={`pb-1 ${filter === "Active"
                                    ? "border-b-2 border-blue-500 text-blue-500"
                                    : "text-orange-500"
                                }`}
                        >
                            Active
                        </button>

                        <button
                            onClick={() => setFilter("Done")}
                            className={`pb-1 ${filter === "Done"
                                    ? "border-b-2 border-blue-500 text-blue-500"
                                    : "text-orange-500"
                                }`}
                        >
                            Done
                        </button>

                    </div>
                    {filteredTasks.map((el, index) => {
                        return (
                            <div key={index} className="flex m-7 h-25  rounded-md justify-between p-5 items-center style text-white">

                                <div className="flex justify-center items-center gap-4">

                                    <input
                                        checked={el.completed}
                                        onChange={() => handleCheck(index)}
                                        id="react-checkbox-list" type="checkbox" value="" className="w-4 h-4  outline-0" />



                                    <p
                                        className={`font-medium text-2xl ${el.completed ? "text-blue-400 line-through" : ""
                                            }`}
                                    >
                                        {el.text}
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