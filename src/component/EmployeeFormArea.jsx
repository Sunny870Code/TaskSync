import React from "react";
import NewTask from "./TaskList/NewTask";
import ActiveTask from "./TaskList/ActiveTask";
import FailedTask from "./TaskList/FailedTask";
import TotalTask from "./TaskList/TotalTask";

const EmployeeFormArea = ({ data }) => {
    data.tasks.map((elem,idx)=>{
        if(elem.NewTask){
            console.log("final check",elem.newTask)
        }
    })
    console.log("this is employee",data)
    return (
        <>
            <form className="w-full h-full flex flex-col  gap-5" >

                <div className="w-full mt-6 flex gap-3">
                    <div className="bg-blue-400 rounded-xl text-white w-full h-[8rem] p-4">
                        <h1 className="text-2xl font-bold ">{data.taskCounts.newTask}</h1>
                        <p className="text-xl font-semibold">New Task</p>
                    </div>

                    <div className="bg-green-400 rounded-xl text-white w-full p-4">
                        <h1 className="text-2xl font-bold ">{data.taskCounts.active}</h1>
                        <p className="text-xl font-semibold">Active</p>
                    </div>

                    <div className="bg-red-400 rounded-xl text-white w-full p-4">
                        <h1 className="text-2xl font-bold ">{data.taskCounts.failed}</h1>
                        <p className="text-xl font-semibold">Failed</p>
                    </div>

                    <div className="bg-yellow-400 rounded-xl text-white w-full p-4">
                        <h1 className="text-2xl font-bold ">{data.taskCounts.total}</h1>
                        <p className="text-xl font-semibold">Total</p>
                    </div>

                </div>


                <div className=" flex  gap-4 overflow-x-auto mt-4 rounded-2xl">

                    {data.tasks.map((elem, idx) => {
                        if (elem.active) {
                            return <ActiveTask key={idx} data={elem} />
                        }
                        if (elem.failed) {
                            return <FailedTask key={idx} data={elem} />
                        }
                        if (elem.TotalTask) {
                            return <TotalTask key={idx} data={elem} />
                        }
                        if (elem.newTask) {
                            return <NewTask key={idx} data={elem} />
                        }
                    })}

                </div>
            </form>
        </>
    )
}

export default EmployeeFormArea 