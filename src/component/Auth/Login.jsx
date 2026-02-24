import React, { useState } from "react";

const Login = ({handleLogin}) => {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = (e) => {
        console.log("Form submitted with email:", email, "and password:", password);
        e.preventDefault();
        handleLogin(email, password)
        setEmail('');
        setPassword('');
    }


    return (
        <div className="flex w-screen h-screen  items-center justify-center bg-black">
            <div className=" border-2 h-[70%] w-md border-red-500 bg-transparent text-amber-50 flex flex-col  rounded-xl  ">
                <h1 className="mt-5 justify-center font-bold text-2xl flex ">Log In</h1>
                <form
                    onSubmit={(e) => {
                        handleSubmit(e)
                    }}
                    className="flex-grow flex flex-col gap-5 px-10 py-8 justify-center " >
                    <input
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                        required
                        className="bg-white outline-none text-black  border-2 border-red-400 rounded-full px-5 py-2 text-md placeholder:text-gray-400"
                        type="email"
                        placeholder="Enter your Email..."

                    />
                    <input
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        required type="password" placeholder="Enter password..."
                        className="bg-white outline-none text-black outline-none border-2 border-red-400 rounded-full px-5 py-2 text-md placeholder:text-gray-400"
                    />
                    <div className="flex justify-between">
                        <div className="flex items-center text-center gap-2">
                            <input type="checkbox" />
                            <span>Remember me</span>
                        </div>
                        <span>Forget Password</span>
                    </div>


                    <button className="bg-red-400 px-5 py-2 text-xl font-semibold rounded-full text-white active:scale-95 ">LogIn</button>
                </form>
            </div>

        </div>


    )
}

export default Login