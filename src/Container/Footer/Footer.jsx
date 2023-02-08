import React from 'react'
import './Footer.scss'

const Footer = ()=>{
    const currentYear = new Date().getFullYear()
    return (
        
        <div className='bg-black py-4 text-white grid justify-center'>
            <p>Made with ❤️ by <a href="https://firasportfolio.netlify.app/">Firas</a> @ {currentYear}</p>
        </div>
    )
}
export default Footer;
