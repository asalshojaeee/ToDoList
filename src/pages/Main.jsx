import { useState } from "react";




const Main = () => {

    const [inptValue, setInptValue] = useState("");
    const [task, setTask] = useState([])
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


    return (


        <>
            <section className="mx-auto w-200 h-auto mt-36 bg-green-200 p-5 flex row justify-center items-center rounded-md">



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
                            <div className="flex m-5 h-25 rounded-md justify-center items-center bg-green-300 text-white">
                                <p>{el}</p>
                            </div>
                        )

                    })}
                </div>



            </section>


        </>
    )



}



export default Main