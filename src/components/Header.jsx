import dImg from '../assets/images/userAsset/Letter_D_Cleaned.png';
import gIMG from '../assets/images/userAsset/G_cleaned.png';
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';
import { IoMdClose } from "react-icons/io";



const Header = () => {
    const [showOptions, setShowOptions] = useState(false);
    const hamburgerHandler = ()=> {
        setShowOptions(!showOptions);
    }
    return (
        <div className="flex items-center justify-between pt-4 font-serif md:w-[1200px] mx-auto mb-7">
            <div className='flex md:w-[200px] items-center relative px-4'>          
                <img src={dImg} alt="D Letter" className='w-10 md:w-[80px] absolute'/>
                <img src={gIMG} alt="G Letter" className='w-10 md:w-20 ml-5 md:ml-10' />             
            </div>
            <div>
                <ul className='hidden md:flex justify-between gap-4 text-[20px] font-[500] px-4 '>
                    <li className='hover:text-[#4e45d5] hover:font-[800] transition duration-[0.5s] hover:scale-[1.02]'><NavLink to="/about">About</NavLink></li>
                    <li className='hover:text-[#4e45d5] hover:font-[800] transition duration-[0.5s] hover:scale-[1.02]'><NavLink to="/projects">Services</NavLink></li>
                    <li className='hover:text-[#4e45d5] hover:font-[800] transition duration-[0.5s] hover:scale-[1.02]'><NavLink to='/gallery'>Gallery</NavLink></li>
                    <li className='hover:text-[#4e45d5] hover:font-[800] transition duration-[0.5s] hover:scale-[1.02]'><NavLink to='/contact'>Contact</NavLink></li>
                    <li className='hover:text-[#4e45d5] hover:font-[800] transition duration-[0.5s] hover:scale-[1.02]' ><NavLink to='/blog'>Blog</NavLink></li>
                </ul>
            </div>
            <div className='text-3xl md:hidden px-10' onClick={hamburgerHandler}>
                {showOptions ? <IoMdClose /> : <GiHamburgerMenu />}
            </div>

            {/* mobile view */}
             {showOptions && (
        <div className="md:hidden bg-white px-9 pb-4">
          <ul className="flex flex-col gap-4 text-[18px] font-medium">
            <li className="hover:text-[#4e45d5] transition duration-300">
              <NavLink to="/about" onClick={hamburgerHandler}>About</NavLink>
            </li>
            <li className="hover:text-[#4e45d5] transition duration-300">
              <NavLink to="/projects" onClick={hamburgerHandler}>Services</NavLink>
            </li>
            <li className="hover:text-[#4e45d5] transition duration-300">
              <NavLink to="/gallery" onClick={hamburgerHandler}>Gallery</NavLink>
            </li>
            <li className="hover:text-[#4e45d5] transition duration-300">
              <NavLink to="/contact" onClick={hamburgerHandler}>Contact</NavLink>
            </li>
            <li className="hover:text-[#4e45d5] transition duration-300">
              <NavLink to="/blog" onClick={hamburgerHandler}>Blog</NavLink>
            </li>
          </ul>
        </div>
            )}
        </div>
    );
}
export default Header; 