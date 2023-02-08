import React from 'react'
import './Section1.scss'
import { circle, phone } from '../../assets'
const Section1 = () => {
    let text = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta ad eligendi nulla libero iusto labore id. Illum dolore eos aperiam."
    let boxes = [1, 2].map((element) => {
        let counter = element;
        let direction = element < 2 ? 'md:items-end md:text-end' : 'md:items-start md:text-start';
        return <div className={`h-full grid grid-row-2 items-center `}>
            <div className={`flex flex-col items-center text-center ${direction}`}>
                <div className='my-1'>
                    <span className='text-white bg-primary py-3 px-5 rounded-[100%] inline-block'>{counter++}</span>
                </div>
                <h3 className='text-xl font-bold my-1'>REQUEST A RIDE</h3>
                <span className='text-gray-600 px-2 md:px-0'>{text}</span>
            </div>
            <div className={` flex flex-col items-center text-center ${direction}` }>
                <div className='my-1'><span className='text-white bg-primary py-3 px-5 rounded-[100%] inline-block'>{++counter}</span></div>
                <h3 className='text-xl font-bold my-1'>REQUEST A RIDE</h3>
                <span className='text-gray-600'>{text}</span>
            </div>
        </div>
    })
    return (
        <section className='py-10'>
            <div className='h-40 flex flex-col justify-center items-center'>
                <h1 className='text-2xl md:text-4xl font-bold py-1'>HOW <span className='text-primary'>TERE</span> WORKS</h1>
                <p className='w-full px-3 md:px-0 md:w-2/5 text-center py-3 text-gray-600'>Lorem ipsum . Velit, officiis dolorem ea porro, nisi repellat dolorum praesentium quam cum vero voluptate quae hic quia omnis error eius quod, magnam perspiciatis!</p>
            </div>
            <div className='min-h-120 grid grid-col-1 md:grid-cols-3 gap-8'>
                <div className='md:order-1 order-2'>
                    {boxes[0]}
                </div>
                <div className=' h-full flex items-center justify-center my-4 md:my-0 order-1 md:order-2'>
                    <img src={circle} alt="" srcset="" />
                    <img className='absolute h-[70.333333%]' src={phone} alt="" />
                </div>
                <div className='md:order-3 order-3'>
                    {boxes[1]}
                </div>

            </div>
        </section>
    )
}
export default Section1;
