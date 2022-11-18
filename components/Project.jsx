import React from "react";
import { FaCircle } from "react-icons/fa";

const Project = () => {
    return (
        <div className="w-full justify-center">
            <div>
                <div className="flex items-center">
                    <FaCircle className="text-white" />
                    <hr className="ml-[-3px] bg-white h-[2px] w-full" />
                </div>
            </div>
            <div className="text-white font-poiret text-3xl">Title</div>
        </div>
    )
}
export default Project;