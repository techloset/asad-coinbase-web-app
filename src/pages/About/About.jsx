import React from 'react'
import section2 from '../../images/Section2.svg'
import abouthero2 from '../../images/abouthero2.svg'
import tree from '../../images/Tree.svg'
import sub from '../../images/subscribe.svg'
import discover from '../../images/btn2.svg'
import AboutQual from '../../images/Qualities.svg'



const About = () => {
    return (
        <>
            <div className=" lg:justify-around sm:grid  sm:grid-cols-1 xs:grid  xs:grid-cols-1 heroBg min-h-[120vh]  lg:flex">

                <div className=' xs:mx-auto mt-36 xs:mt-16 sm:mx-auto lg:w-[34%] sm:w-[50%] xs:w-[85%] lg:mx-0'>
                    <div className='text-white text-xs mb-5'><span>HOME/ABOUT</span></div>
                    <h2 className='text-5xl xs:text-3xl text-white font-bold  leading-snug'>
                        Great service,
                        Professional support
                    </h2>
                    <p className='mt-8 leading-9 text-lg text-white font-normal w-[89%]'>CoinBase is a platform for trading your bitcoin and
                        giftcard at the best rate, why not give us a trial.
                    </p>

                </div>
                <div className='sm:mx-auto lg:mx-0'>
                    <img src={abouthero2} alt="Bitcoin" className='mt-20' />
                </div>
            </div>
            {/* Section 1 */}
            <div className='lg:w-[30%] sm:w-[60%] xs:w-[90%] mx-auto sm:mt-10 lg:mt-0'>
                <h2 className='text-center font-bold text-lg bg-gradient-to-b from-[#FD749B]  to-[#281AC8] bg-clip-text text-transparent'>
                    “Morbi sagittis ultricies ex, a tempus lorem suscipit non. Donec semper leo ut lobortis condimentum. Orci varius natoque penatibus et magnis”

                </h2>
                <hr className='w-16 border-2 border-pink-500 rounded-sm mt-5 text-center mx-auto' />
                <p className='text-center mt-6'>Ramon Ridwan • CEO CoinBase</p>
            </div>
            {/* Section 2 */}
            <div className='mt-20 border-2 w-[70%] xs:w-[90%] mx-auto rounded-2xl border-purple-300'>
                <div className='flex flex-col justify-center items-center mt-5'>
                    <div><img src={section2} alt="" /></div>
               
                <div className='mt-10'><h2 className='font-bold text-3xl xs:text-2xl xs:text-center text-pink-400 '>About CoinBase</h2></div>
                <hr className='w-16 border-4 border-pink-500 rounded-xl mt-5 text-center mx-auto'/>
                <div className='w-[40%] xs:w-[90%] leading-10 mt-6 font-normal text-base'><p className='text-center'>CoinBase is an online site and a p2admin platform that allows users to buy, sell and/ or exchange digital and fiat assets safely. Owned and managed by CoinBase Business Services established and Incoperated in Nigeria.
                </p></div>
                <div className='mt-10 mb-8 xs:px-4'> <img src={AboutQual} alt="" /></div>
                </div>
            </div>


            {/* History part */}
            <div>
                <div className="flex justify-center sm:mt-24 sm:w-[80%] sm:mx-auto xs:mt-24 xs:w-[80%] xs:mx-auto mt-32 text-pink-400 sm:text-[28px] xs:text-[28px] text-5xl leading-[65px] font-bold">
                    Our History
                </div>
                <hr className='w-16 border-2 border-pink-500 rounded-sm mt-5 text-center mx-auto' />
                <div className="flex justify-center   mt-[100px]">
                    <div className="lg:ml-14">
                        <div className="lg:mt-5 lg:w-[400px] lg:h-[200px] sm:w-[80%] sm:mx-auto xs:w-[80%] xs:mx-auto">
                            <div className="flex lg:justify-end sm:justify-center xs:justify-center  text-pink-400  sm:text-[28px] xs:text-[28px] text-4xl font-bold">
                                May 2010
                            </div>
                            <div className="mt-5 lg-text-right sm:text-center sm:text-[14px] xs:text-[14px]  text-2xl leading-[30px]">
                                Ut enim mi, mattis at sollicitudin rhoncus, rhoncus eget sem.
                                Curabitur aliquam tellus eu nisl suscipit, at vestibulum ex rutrum.
                                Nulla facilisi. Cras ullamcorper pellentesque orci, nec vestibulum
                                nibh.uspendisse
                            </div>
                        </div>
                        <div className="lg:mt-[230px] lg:w-[400px] lg:h-[200px] sm:w-[80%] sm:mx-auto sm:text-center sm:mt-9 xs:w-[80%] xs:mx-auto xs:text-center xs:mt-9">
                            <div className="flex lg:justify-end sm:justify-center xs:justify-center  text-pink-400 sm:text-[28px] xs:text-[28px] text-4xl font-bold">
                                May 2019
                            </div>
                            <div className="mt-5 lg:text-right sm:text-center sm:text-[14px]  xs:text-[14px] text-2xl leading-[30px]">
                                Ut enim mi, mattis at sollicitudin rhoncus, rhoncus eget sem.
                                Curabitur aliquam tellus eu nisl suscipit, at vestibulum ex rutrum.
                                Nulla facilisi. Cras ullamcorper pellentesque orci, nec vestibulum
                                nibh.uspendisse
                            </div>
                        </div>
                    </div>
                    <div className='sm:hidden xs:hidden lg:block'>
                        <img className="ml-9" src={tree} alt="" />
                        <div className="mt-5  font-bold">To be continue…</div>
                    </div>
                    <div className="lg:mt-[240px] lg:w-[400px] lg:h-[200px] sm:hidden lg:block xs:hidden">
                        <div className="text-pink-400 sm:text-[28px] text-4xl font-bold">
                            May 2017
                        </div>
                        <div className="mt-5 text-left sm:text-[14px] text-2xl leading-[30px]">
                            Ut enim mi, mattis at sollicitudin rhoncus, rhoncus eget sem.
                            Curabitur aliquam tellus eu nisl suscipit, at vestibulum ex rutrum.
                            Nulla facilisi. Cras ullamcorper pellentesque orci, nec vestibulum
                            nibh.uspendisse
                        </div>
                    </div>
                </div>
            </div>

            {/* Meet the Team part */}

            <div className='mt-20 xs:hidden'>
                <div className='flex flex-col items-center justify-center'>
                    <h2 className='font-bold text-3xl text-pink-400'>Meet the team</h2>
                    <hr className='w-12 border-2 mx-auto mt-5 border-[#FD749B] rounded-md' />
                    <p className='w-[35%] text-center mt-4'>Meet the team that  makes the process of this system fast and painless as possible to provide you with good result </p>
                </div>

                <div className='mt-10 w-[90%] mx-auto'>
                    <div className='flex '>
                        <div className='border-2  bg-[#C4C4C4] left-10 relative w-[30%] -z-10 p-18 rounded-2xl'>
                        </div>
                        <div className='border-2 border-[#FD749B] bg-purple-200 relative w-[30%] z-10 p-20 rounded-2xl'>
                            <p className='text-white'>CEO</p>
                        </div>
                        <div className='border-2  bg-[#C4C4C4] right-10 relative w-[30%] -z-10 p-18 rounded-2xl'>
                        </div>
                    </div>
                </div>
            </div>

            {/* Subsuribe part*/}
            <div className='mt-20'>
                <div className='flex flex-col items-center '>
                    <h2 className='xs:px-3'><img src={sub} alt="" /></h2>
                    <hr className='w-12 border-2 mx-auto mt-5 border-[#FD749B] rounded-md' />
                    <div className='w-[30%] xs:w-[70%] mt-7'>
                        <p className='text-base text-center font-normal leading-loose'>Subscribe to our newsletter for daily/weekly update of our products and services.</p>
                    </div>
                </div>
                <div className='flex justify-center my-12  mb-36'>
                    <form action="" className='flex justify-center xs:grid xs:gap-4'>
                        <input type="Email" placeholder='Email *' className=' mx-8 px-3 py-2 placeholder-gray-500 border border-pink-300 rounded-[50px] focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 w-96 xs:w-[90%]  ' required />
                        <button type='submit' className='self-center xs:mx-auto'><img src={discover} alt="" className='' /></button>
                    </form>

                </div>
            </div>

        </>
    )
}

export default About