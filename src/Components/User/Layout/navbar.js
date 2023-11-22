import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () =>{
    return(
        <section className=" border-4 border-purple-500 mx-12 rounded-lg">
            <div className="bg-blue-500 flex justify-between p-2 px-12 text-white text-lg">
                <NavLink to="/home" className=" hover:bg-white hover:text-black hover:font-bold p-1 rounded">Home</NavLink>
                <NavLink to="/services" className="hover:bg-white hover:text-black hover:font-bold p-1 rounded">Services</NavLink>
                <NavLink to="/aboutUs" className="hover:bg-white hover:text-black hover:font-bold p-1 rounded">About Us</NavLink>
                <NavLink to="/contactUs" className="hover:bg-white hover:text-black hover:font-bold p-1 rounded">Conatct Us</NavLink>
                <NavLink to="/profile" className="hover:bg-white hover:text-black hover:font-bold p-1 rounded">Profile</NavLink>
            </div>
        </section>
    )
}
export default Navbar;