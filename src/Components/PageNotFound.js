import React from "react";
import { NavLink } from "react-router-dom";
import pic from "./Images/404-error.png"

const PageNotFound = () =>{
    return(
        <div className = " hide-navbar flex align-center justify-self-auto vh-100">
            <div className = "text-center grid md:grid-cols-12">
                <div className = "md:col-span-6">
                    <img src={pic} alt="" className = "img-fluid"/>
                </div>
                <div className = " md:col-span-6 my-auto">
                    <p className = "fs-3"> <span className = "m-3 text-sm md:text-lg font-bold text-red-600">Opps! Page not found.</span></p>
                    <p className = "m-3 text-sm md:text-lg font-bold">
                        The page you are looking for doesnot exist.
                    </p>
                    <NavLink to="/home" className = "border-2 rounded-full bg-blue-500 p-2 m-2 font-bold text-white">Go Home</NavLink>
                </div>
            </div>
        </div>
    );
}
export default PageNotFound;