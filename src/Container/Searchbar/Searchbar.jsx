import React from 'react'
import './Searchbar.scss'

const Searchbar = () => {
    return (
        <div className='md:py-10 md:px-12 md:my-16'>
            <div className='bg-primary rounded-lg py-5  md:py-4  md:px-16 grid grid-cols-1 md:grid-cols-5 gap-3'>
                <div className='col-span-2 md:py-5 px-5'>
                    <p className='text-white'>
                    Lorem ipsum dolor, sit amet adipisicing <br />
                    elit. Nulla optio minima illo natus consequuntur at.
                    </p>
                    </div>
                <div className=' col-span-3 md:py-5 grid grid-cols-1 justify-center px-4   md:flex md:items-center'>
                    <input className='w-full my-3 md:-my-0 md:w-3/5 py-3 px-3' type="text" />
                    <button className='bg-black text-white py-3 px-10 md:px-14 md:mx-3' >APPLY TO DRIVE</button>
                </div>
            </div>
        </div>
    )
}
export default Searchbar;
