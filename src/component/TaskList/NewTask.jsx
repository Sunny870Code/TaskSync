import React from "react";

const NewTask = ({ data }) => {
    return (
        <>
            <div className="bg-blue-400 text-white w-[25rem] h-[20rem] p-4 rounded-xl shrink-0">
                <div className="flex justify-between mb-2">
                    <h2 className="bg-blue-600 px-2 py-1 rounded-xl font-semibold ">{data.category}</h2>
                    <p className="font-semibold">{data.date}</p>
                </div>
                <div>
                    <h1 className="font-bold text-xl">{data.title}</h1>
                    <p className="overflow-y-auto h-52 ">{data.description} </p>
                </div>
            </div>
        </>
    )
}

export default NewTask