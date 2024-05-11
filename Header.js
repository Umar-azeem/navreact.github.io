import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
    const content = <>
        <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition">
            <ul className="text-center text-xl p-20">
                <Link spy={true} smooth={true} to="Home">
                    <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Home</li>
                </Link>
                <Link  spy={true} smooth={true} to="About">
                    <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">About</li>
                </Link >
                <Link  spy={true} smooth={true} to="Services">
                    <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Services</li>
                </Link >
                <Link  spy={true} smooth={true} to="Project">
                    <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded"> Project</li>
                </Link >
                <Link  spy={true} smooth={true} to="Contact">
                    <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Contact</li>
                </Link>
            </ul>
        </div>
    </>
    return (
        <>
            <nav>
                <div className="h-10vh justify-between z-50 text-white lg:py-5 px-4 py-4 flex-1">
                    <div className="flex item-center flex-1">
                    <span className="text-3xl font-bold">Logo</span>
                    </div>
                    <div className="lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden">
                        <div className="flex-10">
                            <ul className="flex gap-8 mr-16 text-[18px]">
                                <Link  spy={true} smooth={true} to="Home">
                                    <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:fuchsia-600 cursor-pointer">Home</li>
                                </Link >
                                <Link  spy={true} smooth={true} to="About">
                                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:fuchsia-600 cursor-pointer">About</li>
                                </Link >
                                <Link  spy={true} smooth={true} to="Services">
                                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:fuchsia-600 cursor-pointer">Services</li>
                                </Link >
                                <Link spy={true} smooth={true} to="Project">
                                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:fuchsia-600 cursor-pointer">Project</li>                               
                                 </Link>
                                <Link spy={true} smooth={true} to="Contact">
                                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:fuchsia-600 cursor-pointer">Contact</li>                               
                                 </Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};
export default Header;
