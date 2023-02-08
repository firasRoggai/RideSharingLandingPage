import React from 'react'
import { useState } from 'react'
import './Navbar.scss'
import { logo } from '../../assets'
const Navbar = () => {
    const [menu, setMenu] = useState(false)
    const ulList = ["Home","How to work","Contact"].map((element,index) => {
        return <li key={index} className={`py-3 px-3 md:px-5 md:my-0 my-5`} ><a href="http://">{element}</a></li>
    })
    return (
        <>
            {menu && <div className='bg-gray-300 fixed z-50 w-full h-screen px-2 py-5'>
                <div className='flex justify-end'>
                    <button className='bg-black px-5 py-1 text-white' onClick={()=>{setMenu(!menu)}}>Close</button>
                </div>
                <ul className='flex flex-col justify-center h-full'>
                    {ulList}
            <div><div className="btn bg-primary px-6 py-1.5 inline md:inline-block rounded text-white">Help Center</div></div>
                </ul>
                
            </div>}
        <nav className='flex justify-between px-4 md:px-10 items-center'>
            <div className="flex items-center w-32 h-24"><img src={logo} alt="" /></div>
            <ul className='flex-auto justify-end px-20 hidden md:flex'>
                {ulList}
            </ul>
            <div className="btn bg-primary px-6 py-1.5 hidden md:inline-block rounded text-white">Help Center</div>
            <button className='md:hidden py-2 px-5 bg-black text-white' onClick={() => {setMenu(!menu)}}>MENU</button>
        </nav>
        </>
    )
}
export default Navbar;
