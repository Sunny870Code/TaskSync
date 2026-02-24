import React from "react";
import Header from "../header";
import EmployeeFormArea from "../EmployeeFormArea";

const EmployeeDashboard = (props) => {
    // // console.log("this is props data testing", data)
    // const [userData] = useContext(AuthContext);

    // // Find the logged-in employee
    // const employee = userData.find(e => e.email === props.data.email);
    return (
        <>
            <div className="w-screen h-screen bg-black  relative">


                <div className="h-full flex  justify-center items-center ">
                    <div className="w-full h-full flex flex-col justify-center  p-10 rounded-xl">
                        <Header changeUser={props.changeUser} data={props.data} />
                        <EmployeeFormArea data={props.data} />
                    </div>

                </div>

            </div>
        </>
    )
}
export default EmployeeDashboard