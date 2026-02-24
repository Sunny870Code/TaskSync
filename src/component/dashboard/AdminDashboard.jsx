import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import AdminFormArea from "../adminFormArea";
import Header from "../header";

const AdminDashboard = (props) => {

    const [userData , setUserData] = useContext(AuthContext)
    console.log("testing admin authDat", { userData })

    return (
        <>
            <div className="h-screen w-screen bg-black p-5 flex flex-col">
                <Header changeUser={props.changeUser} data={props.data} />

                <AdminFormArea />

                <div className="text-white mt-5 font-semibold bg-red-400 w-full p-3 rounded-xl flex items-center justify-between">
                    <h2 className="w-1/5 text-xl bg-red-600">Employee Name</h2>
                    <h2 className="w-1/5 text-xl ">New Task</h2>
                    <h2 className="w-1/5 text-xl ">Active Task</h2>
                    <h2 className="w-1/5 text-xl ">Completed Task</h2>
                    <h2 className="w-1/5 text-xl ">Failed Task</h2>
                </div>

                <div className="mt-5 overflow-auto">
                    {userData.map((elem, idx) => {
                        return <div key={idx} className="text-white mb-5 font-semibold border-2 border-emerald-400 rounded-xl w-full p-3 rounded-xl flex items-center justify-between">
                            <h2 className="w-1/5 text-xl font-medium ">{elem.name}</h2>
                            <h2 className="w-1/5 text-xl font-medium  text-blue-600">{elem.taskCounts.newTask}</h2>
                            <h2 className="w-1/5 text-xl font-medium  text-yellow-300">{elem.taskCounts.total}</h2>
                            <h2 className="w-1/5 text-xl font-medium  text-green-600">{elem.taskCounts.active}</h2>
                            <h2 className="w-1/5 text-xl font-medium  text-red-600">{elem.taskCounts.failed}</h2>
                        </div>
                    })}
                </div>
            </div>
        </>
    )
}

export default AdminDashboard