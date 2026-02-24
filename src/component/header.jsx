import React from "react";
import { setLocalStorage } from "../utils/localStorage";

const Header = (props) => {
    console.log("checking")

    const logOutUser = () => {
        localStorage.setItem('loggedInUser', '')
        props.changeUser('')
    }

    return (
        <>
            <div className="w-full  flex justify-between items-center">
                <div className="flex  flex-col text-white ">
                    <h3 className="text-3xl">Hello</h3>
                    <h1 className="text-2xl font-bold font-s text-4xl">
                        {props.data.name}</h1>
                </div>
                <button
                    onClick={()=>logOutUser()}
                    className="bg-red-500 font-semibold px-4 py-2 rounded active:scale-95">Log Out</button>

            </div>
        </>
    )
}
export default Header