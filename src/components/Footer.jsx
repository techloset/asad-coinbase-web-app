import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className="bg-black mt-3 text-zinc-400 font-poppins">
                <div className="py-14 container mx-auto">
                    <div className="flex items-center justify-around">
                        <div>
                            <img src="/images/footerlogo.png" alt="logo" className="text-5xl mb-12" />
                            <p className="mt-3"> Fusce ut elit aliquet, fermentum leo vel, <p className='mb-1'> tempus nunc. Fusce eu rhoncus augue. </p> <p className='mb-3'>Fusce vel metus pharetra, fermentum</p></p>
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                <img className="mt-3 w-[150px]" src="/images/SocialMediaIcons.png" alt="social" />
                            </a>
                        </div>

                        <div className="text-zinc-400 ">
                            <h1 className="text-2xl mb-5 text-white">Coin Base Links</h1>
                            <Link to="/"> <p className='mb-3'>Home</p> </Link>
                            <Link to="./about"> <p className='mb-3'>About Us</p></Link>
                            <Link to="/blog"> <p className='mb-3'>Blog</p></Link>
                            <Link to="./"> <p className='mb-3'>Sell</p></Link>
                            <Link to="./"><p>Contact Us</p></Link>
                        </div>

                        <div className="text-zinc-400">
                            <h1 className="text-2xl mb-5 text-white">Contact Us</h1>
                            <p className='mb-3'>(+234)9463524645</p>
                            <p className='mb-3'>coinbase@yahoo.com</p>
                            <p className='text-black mb-3'> . </p>
                            <p className='text-black '> . </p>
                            <p >Download Over App</p> </div>


                        <div className="text-white">
                            <h1 className="text-2xl mb-5">CoinBase Insagram</h1>
                            <div className='mt-8 flex flex-wrap gap-3 max-w-xs'>
                                <img src="/images/footerbox.png" alt="social" />
                                <img src="/images/plus.png" alt="social" />
                                <img src="/images/footerbox.png" alt="social" />
                                <img src="/images/footerbox.png" alt="social" />
                                <img src="/images/footerbox.png" alt="social" />
                                <img src="/images/footerbox.png" alt="social" />
                                <img src="/images/footerbox.png" alt="social" />
                                <img src="/images/footerbox.png" alt="social" />
                            </div>
                        </div>

                    </div>
                    <p className="text-gray-200 ml-20 mt-8">2019 Design by Muhammad Asad</p>
                </div>
            </div>
        </>
    )
}

export default Footer;