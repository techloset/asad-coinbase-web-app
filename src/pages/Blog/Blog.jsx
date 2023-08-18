import React from 'react'
import Bloghero from '../../images/BlogHero.svg'
import main1 from '../../images/exchange1.svg'
import main2 from '../../images/main2.svg'
import main3 from '../../images/main3.svg'
import GetReady from '../../images/GetReady.svg'
import GetReady2 from '../../images/GetReady2.svg'
import Discover from '../../images/btn2.svg'
import GetReady1 from '../../images/GetReady1.svg'




function Blog() {
    const Cards = [
        {
            id: 1,
            p1: "Lorem ipsum dolor sit amet, magna habemus ius ad, qui minimum voluptaria in. Ad mei modus quodsi complectitur, postea verterem persecuti cu est, sea epicuri.",
            btn: <img src={Discover} alt="Discover" className="" />,
            mainimg: <img src={main1} alt="" className="rounded-tl-3xl rounded-tr-3xl" />,
            heading: <img src={GetReady} alt="" className="" />,
            subp: "19 June, 2019",
            subp2: "BUSINESS",
        },
        {
            id: 2,
            mainimg: <img src={main2} alt="" className="rounded-tl-3xl rounded-tr-3xl" />,
            heading: <img src={GetReady1} alt="" className="" />,
            subp: "19 June, 2019",
            subp2: "BUSINESS",
            p1: "Lorem ipsum dolor sit amet, magna habemus ius ad, qui minimum voluptaria in. Ad mei modus quodsi complectitur, postea verterem persecuti cu est, sea epicuri.",
            btn: <img src={Discover} alt="Discover" className="" />,
        },
        {
            id: 3,
            mainimg: <img src={main3} alt="" className="rounded-tl-3xl rounded-tr-3xl" />,
            heading: <img src={GetReady2} alt="" className="" />,
            subp: "19 June, 2019",
            subp2: "BUSINESS",
            p1: "Lorem ipsum dolor sit amet, magna habemus ius ad, qui minimum voluptaria in. Ad mei modus quodsi complectitur, postea verterem persecuti cu est, sea epicuri.",
            btn: <img src={Discover} alt="Discover" className="" />,
        }

    ]
    return (
        <>

            <div className="heroBg min-h-[120vh]  lg:flex lg:justify-around sm:grid  sm:grid-cols-1 xs:grid  xs:grid-cols-1  ">

                <div className='lg:w-[34%] sm:w-[50%] xs:w-[85%] xs:mx-auto mt-36 xs:mt-16 sm:mx-auto lg:mx-0'>
                    <div className='text-white text-xs mb-5'><span>HOME/BLOG</span></div>
                    <h2 className='text-5xl text-white font-["Open Sans"] leading-snug'>
                        Stay updated,
                        Never miss a post.
                    </h2>
                    <p className='mt-8 leading-9 text-lg text-white font-normal w-[89%]'>Get to know the latest stuff about our services
                        via our blog post.
                    </p>

                </div>
                <div className='sm:mx-auto lg:mx-0' >
                    <img src={Bloghero} alt="Bitcoin" className='mt-20' />
                </div>
            </div>

            <div className='w-[70%] xs:w-[90%] mx-auto'>
                {/* Maping  Function card  */}
                {Cards.map((info) => (
                    <div className='mt-9 mb-5'>


                        {info.mainimg}
                        <div className='flex flex-col justify-center items-center  cardborder'>
                            <h2 className='mt-7 mx-4' >{info.heading}</h2>
                            <p className='flex justify-center mt-7  text-xs  '>
                                <span>{info.subp}</span>
                                <hr className='border-t-2 w-4 rotate-90 mx-2 mt-2 border-[#333333] ' />
                                <span>{info.subp2}</span>
                            </p>
                            <p className='w-[70%] text-center text-base font-norma mt-7'>
                                {info.p1}
                            </p>
                            {/* link */}
                            <button className='mt-7 mb-12'>{info.btn}</button>

                        </div>

                    </div>))}


            </div>
            <div className='flex flex-wrap justify-center mt-24 mb-40'>


                <nav aria-label="Page navigation example">
                    <ul class="inline-flex xs:flex-wrap xs:justify-center -space-x-px text-base h-10">
                        <li className='mt-5 mr-2'>
                        </li>
                        <li>
                            <a href="#" aria-current="page" class="flex items-center login-header  text-white rounded-full mt-5 mr-3 justify-center px-4 h-10 leading-tight border border-gray-300 hover:bg-purple-800 hover:text-white ">01</a>


                        </li>
                        <li>
                            <a href="#" aria-current="page" class="flex items-center bg-white   text-gray-600 rounded-full mt-5 mr-3 justify-center px-4 h-10 leading-tight border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">02</a>
                        </li>
                        <li>
                            <a href="#" aria-current="page" class="flex items-center bg-white   text-gray-600 rounded-full mt-5 mr-3 justify-center px-4 h-10 leading-tight border border-gray-300 hover:bg-gray-100 hover:text-gray-700">03</a>
                        </li>
                        <li>
                            <a href="#" aria-current="page" class="flex items-center bg-white   text-gray-600 rounded-full mt-5 mr-3 justify-center px-4 h-10 leading-tight border border-gray-300 hover:bg-gray-100 hover:text-gray-700">...</a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center justify-center p-4 h-10 leading-tight rounded-full mt-5 text-gray-500 bg-white border border-gray-300  hover:bg-gray-100 hover:text-gray-700 ">Next</a>
                        </li>
                    </ul>
                </nav>

            </div>

        </>
    )
}

export default Blog
