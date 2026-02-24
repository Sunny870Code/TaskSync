import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";


const AdminFormArea = () => {
    
    const [userData, setUserData] = useContext(AuthContext)

    const [taskTitle, settaskTitle] = useState('')
    const [taskDate, settaskDate] = useState('')
    const [assignTo, setassignTo] = useState('')
    const [category, setcategory] = useState('')
    const [taskDescription, settaskDescription] = useState('')

    // const [newTask, setNewTask] = useState([])

    // const submitHandler = (e) => {
    //     e.preventDefault()

    //     setNewTask({ taskTitle, taskDate, category, taskDescription, active: false, newTask: true, failed: false })


    //     const data = userData
    //     console.log("hhhhhhhhhhh",data)

    //     data.forEach(function (elem) {
    //         if (assignTo == elem.name) {
    //             elem.tasks.push(newTask)
    //             elem.taskCounts.newTask = elem.taskCounts.newTask + 1

    //         }
    //         console.log(elem)
    //     })
    //     console.log("abbbbbbbbbb",data)
    //     setUserData(data)
    //     console.log(data)



    //     // localStorage.setItem('employee',JSON.stringify(data))
    //     setNewTask('')
    //     setassignTo('')
    //     setcategory('')
    //     settaskDate('')
    //     settaskDescription('')
    //     settaskTitle('')

    // }

    const submitHandler = (e) => {
        e.preventDefault();

        if (!taskTitle || !assignTo) {
            alert("Please enter Task Title and Assign To");
            return;
        }

        const task = {
            title: taskTitle,
            date: taskDate,
            category:category,
            description: taskDescription,
            active: false,
            newTask: true,
            failed: false
        };

        // Update userData immutably
        const updatedEmployees = userData.map(emp => {
            if (emp.name === assignTo) {
                return {
                    ...emp,
                    tasks: [...(emp.tasks || []), task],
                    taskCounts: {
                        ...emp.taskCounts,
                        newTask: emp.taskCounts.newTask + 1,
                        total: emp.taskCounts.total + 1
                    }
                };
            }
            return emp;
        });

        

        setUserData(updatedEmployees);
        localStorage.setItem("employee", JSON.stringify(updatedEmployees));

        console.log("Updated Employees:", updatedEmployees);

        // Clear form
        settaskTitle('');
        settaskDate('');
        setassignTo('');
        setcategory('');
        settaskDescription('');
    };

    return (

        <>
            <form
                onSubmit={(e) => {
                    submitHandler(e)
                }}
                className="flex border-2 border-gray-500 rounded-xl p-5 w-full h-auto mt-10 lg:gap-70 md:gap-40 sm:gap-20 xs:gap-10  bg-gray-600 justify-between w-full">
                <div className="flex flex-col gap-3">
                    <div>
                        <h2 className="mb-2 capitalize text-white">Task Title</h2>
                        <input
                            value={taskTitle}
                            onChange={(e) => { settaskTitle(e.target.value) }}
                            className="p-2 placeholder:text-gray-300 text-white rounded border-2 border-white w-xs " placeholder="Make a UI design"
                            type="text" />
                    </div>
                    <div>
                        <h2 className="mb-2 capitalize text-white">Date</h2>
                        <input
                            value={taskDate}
                            onChange={(e) => { settaskDate(e.target.value) }}
                            className="p-2 placeholder:text-gray-300 text-white rounded border-2 border-white w-xs " placeholder="Make a UI design"
                            type="date" />
                    </div>
                    <div>
                        <h2 className="mb-2 capitalize text-white">Asign</h2>
                        <input
                            value={assignTo}
                            onChange={(e) => { setassignTo(e.target.value) }}
                            className="p-2 placeholder:text-gray-300 text-white rounded border-2 border-white w-xs " placeholder="Employee Name"
                            type="text" />
                    </div>
                    <div>
                        <h2 className="mb-2 capitalize text-white">Category</h2>
                        <input
                            value={category}
                            onChange={(e) => { setcategory(e.target.value) }}
                            className="p-2 placeholder:text-gray-300 text-white rounded border-2 border-white w-xs "
                            placeholder="dev, tester, design...etc"
                            type="text" />
                    </div>
                </div>

                <div className="w-full flex flex-col">
                    <h4 className="text-white text-md mb-3 font-semibold">Description</h4>
                    <textarea
                        value={taskDescription}
                        onChange={(e) => { settaskDescription(e.target.value) }}
                        className="p-2 placeholder:text-gray-300 text-white rounded-xl border-2 border-white  h-65 w-full mb-5"
                        placeholder="Task Description" />
                    <button className="text-white border-1 px-4 py-2 rounded-xl w-full bg-emerald-600 font-semibold active:scale-95">Create Task</button>
                </div>
            </form>
        </>
    )
}

export default AdminFormArea