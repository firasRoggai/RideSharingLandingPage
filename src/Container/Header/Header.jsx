import React from 'react'
import './Header.scss'
import {hero} from '../../assets'
const Header = ()=>{

    return (
        <header className='grid md:grid-cols-2 grid-cols-1 md:px-11 items-end '>
            <div className='h-4/5 flex items-end md:order-1 order-2 mt-10'>
                <div className="">
                <div>
                    <div className='md:text-6xl text-3xl  font-bold text-center md:text-start'>
                DOWNLOAD APP
                SAVE MONEY, MAKE
                FRIENDS!
                    </div>
                </div>
                <div className='my-5 '>
                <p className='text-gray-500 text-center md:text-start px-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum incidunt omnis itaqu
                 Lorem  Harum incidunt omnis itaque asperiores minus repudiandae unde quia iure iste quasi!</p>
                </div>
                <div className='my-5 flex justify-evenly  md:justify-start'>
                    <button href="http://" className='py-2 md:mr-5 px-6 bg-black rounded text-white'>Download</button>
                    <button href="http://" className='py-2 md:mr-5 px-6 border-black border-[1px] hover:bg-black hover:text-white transition rounded'>Download</button>
                </div>
                </div>
            </div>
            <div className='h-4/5 self-center flex  justify-center md:order-2 order-1 mb-10 '>
                <img className='h-fit w-fit' src={hero} alt="" />
            </div>
        </header>
    )
}
export default Header;
