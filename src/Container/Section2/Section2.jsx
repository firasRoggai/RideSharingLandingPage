import React from 'react'
import './Section2.scss'
import { clock, money, computerGuy } from '../../assets'
const Section2 = () => {
    let list = [
        { img: clock, header: 'Flexible working hours', text: 'some realy flexible working flexible working hours here' },
        { img: money, header: 'Flexible working hours', text: 'some realy flexible working flexible working hours here' },
        { img: computerGuy, header: 'Flexible working hours', text: 'some realy flexible working flexible working hours here' }]
        .map((element,index) => {
            let direction = index % 2 ? 'md:mr-36':'md:ml-36';
            return <div className='flex flex-col md:px-36 md:p-5 py-5'>
                <div className={`bg-white md:h-5/6 md:w-4/5 flex justify-between my-1 p-10 md-:rounded-none rounded-lg ${direction}`}>
                    <div className=' grid items-center'>
                        <div className='text-center'>
                        <h1 className='text-2xl md:text-4xl font-bold md:font-normal'><span className='pr-5'>{`0${index+1}.`}</span>{element.header}</h1>
                        <p>{element.text}</p>
                        </div>
                    </div>
                    <div className='md:block hidden'>
                        <img className='h-full' src={element.img} alt="" />
                    </div>
                </div>
            </div>
        })
    return (
        <section className='md:my-16 py-5'>
            <h1 className='text-center text-4xl font-bold'><span className='text-primary'>TERE</span> BENEFITS</h1>
            <div className='my-8 px-3 rounded-lg'>
            {list}
            </div>
        </section>
    )
}
export default Section2;
