"use client";
import { useState } from "react";
import Link from "next/link";
import { HiMenu ,HiX} from "react-icons/hi";
import { motion } from 'framer-motion';
import Contact from "@/utils/Contact";
import '@/app/globals.css';

const NavBar = () => {
   
    // State Managment
    const [toggleDropDown,setToggleDropDown] = useState(false);
    const [contactScreen,setContactScreen] = useState(false);
  

    return (
      <div>
        {contactScreen && <Contact/>}

        <nav className="w-full px-5 fixed top-0  left-0 flex justify-between h-14 items-center z-50  shadow-2xl " style={{background:'#003366'}}> 
            <Link className="w-1/2 items-center text-center  flex text-pretty font-serif font-medium text-xl text-white "  href="/">
              Sarim.Dev
            </Link>
            {/* ? Desktop  Nav*/}
            <div className="w-full  justify-around h-full py-2  md:flex hidden" >
                <Link  href="/" className="px-3   items-center justify-center   font-semibold text-white flex text-center  rounded-md hover:bg-white hover:text-blue-900 " style={{transition:'0.4s'}}>Home</Link>
                <Link href="/#AboutMe"   className="px-3   items-center justify-center font-semibold text-white flex text-center  rounded-md hover:bg-white hover:text-blue-900 " style={{transition:'0.4s'}}>About Me</Link>
                <Link  href="/Projects" className="px-3   items-center justify-center font-semibold text-white flex text-center  rounded-md hover:bg-white hover:text-blue-900 " style={{transition:'0.4s'}}>Projects</Link>
                <Link href="/testimonials" className="px-3   items-center justify-center font-semibold text-white flex text-center  rounded-md hover:bg-white hover:text-blue-900 " style={{transition:'0.4s'}}>testimonials</Link>
                <button onClick={()=> setContactScreen(!contactScreen)} className="px-3   items-center justify-center font-semibold text-white flex text-center  rounded-md hover:bg-white hover:text-blue-900 " style={{transition:'0.4s'}}>Contact Me</button>
            </div>

            {/* ? Mobile  Nav*/}
            <div className='md:hidden  w-full h-full flex items-center justify-end '>
                <div className=" flex items-center justify-end   " style={{ transition: "opacity 0.7s ease-in-out" }}>
                {!toggleDropDown &&
                <HiMenu style={{transition:'0.4s'}} className="p-1 size-8 relative rounded-full bg-white hover:bg-blue-800  hover:text-white text-blue-900 " 
                  onClick={()=> setToggleDropDown(!toggleDropDown)} />}
                {toggleDropDown && <HiX style={{transition:'0.4s'}} className="p-1 size-8 relative rounded-full  hover:bg-white hover:text-blue-600  text-white" onClick={()=> setToggleDropDown(!toggleDropDown)} />}

            {toggleDropDown && (
                <motion.div
                            whileInView={{ x: [300, 0] }}
                            transition={{ duration: 0.85, ease: 'easeOut' }}
                            className={` top-full flex flex-col items-start justify-between absolute h-80  right-0 sm:w-2/3 w-5/6 p-4 shadow-2xl rounded-b-xl overflow-y-auto `}  style={{background:"#003366"}}
                          >
                    {/* <div className="absolute flex flex-col items-end  bg-white  top-full right-0  w-2/3 p-3" > */}
                       <Link  href="/" className="m-1   font-semibold text-white"  style={{transition:'0.4s'}}>Home</Link>
                       <Link href="/#AboutMe"  className="m-1  font-semibold text-white"  style={{transition:'0.4s'}}>About Me</Link>
                       <Link href="/Services" className="m-1  font-semibold text-white"  style={{transition:'0.4s'}}>Services</Link>
                       <Link  href="/Projects" className="m-1  font-semibold text-white"  style={{transition:'0.4s'}}>Projects</Link>
                       <Link href="/testimonials" className="m-1  font-semibold text-white"  style={{transition:'0.4s'}}>testimonials</Link>
                       <button className="m-1  font-semibold text-white" style={{transition:'0.4s'}}>Contact Me</button>
                    {/* </div> */}
                    </motion.div>
            )}
                </div>
                
            </div>
        </nav>
      </div>
    );
}

export default NavBar;