import React from 'react'
import { Link } from 'react-router-dom'
import gift_card from '../../images/Gift-cards.svg'
import section7 from '../../images/sction7_2.svg'
import testimonial from '../../images/Testimonial.svg'
import download from '../../images/downloadApp.svg'
import downloadStore from '../../images/Store.svg'
import section2 from '../../images/Section2.svg'
import iphone1 from '../../images/X-1.svg'
import iphone2 from '../../images/X-2.svg'
import section10 from '../../images/subscribe.svg'
import discover from '../../images/btn2.svg'
import readmore from '../../images/readmorebtn.svg'
import hero2 from '../../images/hero2.svg'
import eth from '../../images/Eth.svg'
import bank from '../../images/bank-building.svg'
import OurRates from '../../images/OurRates.svg'
import OurRates2 from '../../images/OurRates2.svg'
import OurRates3 from '../../images/OurRates3.svg'
import Get_started from '../../images/Button.svg'
import bitcoin from '../../images/bitcoin.svg'
import scrollt from '../../images/Scroll.svg'
import smallbtc from '../../images/smallbtc.svg'



const LandingPage = () => {


  return (
    <>
      {/* landing page layer 1 */}
      <div className="grid lg:grid-cols-2 sm:grid  sm:grid-cols-1 xs:grid  xs:grid-cols-1 heroBg min-h-[140vh] xs:min-h-[160vh]">
        <div className='mx-auto mt-36 xs:mt-16 xl:ml-36 lg:ml-36 xl:w-[85%] lg:w-[90%] sm:w-[80%] xs:w-[90%] '>
          <h2 className='text-white font-poppins lg:leading-normal sm:leading-normal xs:leading-snug lg:text-[40px] sm:text-4xl xs:text-3xl font-normal'>
            We provide easy solution
            to exchange your <span className='font-bold font-poppins'> Bitcoin/
              GiftCard for money</span>
          </h2>
          <p className='font-normal w-[89%] mt-8 leading-9 text-lg text-white'>CoinBase is a platform for trading your bitcoin and
            giftcard at the best rate, why not give us a trial.
          </p>
          <button className='mt-9'><img src={Get_started} alt="" /></button>

        </div>
        <div className='sm:mx-auto lg:mx-0 lg:ml-10' >
          <img src={hero2} alt="Bitcoin" className='sm:mt-16 xs:mt-3' />

        </div>

      </div>

      {/* landing page layer 2 */}

      <div className='flex  items-center justify-around px-32  font-poppins '>
       <div className='xs:mt-6 '> <img src={section2} alt="Hi imagae" className='sm:block sm:mx-auto xs:block xs:mx-auto' /></div>

        <div>
        <p className="text-2xl font-bold bg-gradient-to-b text-transparent bg-clip-text from-[#FD749B] to-[#281AC8]">Welcome To CoinBase</p>
        <hr className='w-12 border-2 mt-3 border-[#FD749B] rounded-md' />
          <p className=" my-4 leading-8 h-64 w-[490px]">We have the best rates . Simply start your exchange right now. Sign up for our Affiliate program and earn commission from each exchange. The earnings are credited in your account instantly and can be withdrawn right away. Also note some exchange directions are hidden for unregistered user. To ensure to have access to all our exchange directions and benefits kindly sign up and verify your identity.</p>
          <button class="mt-3 login-header text-[14px] rounded-full border-2 px-6 py-3 font-bold text-white">DISCOVER</button>
        </div>
      </div>

      {/* landing page section 3 */} 

      <div className='heroBg2 min-h-[152vh] xs:hidden sm:hidden lg:block '>
        <div className='xl:pt-[25%] lg:pt-[30%]'>
          <div className='max-w-[77%] mx-auto bg-white pb-4 rounded-3xl'>
            <div className='flex justify-between py-7'>
              <h2><img src={OurRates} alt="" className='ml-[64px]' /></h2>
              <h2><img src={OurRates2} alt="" className='ml-7' /></h2>
              <h2><img src={OurRates3} alt="" className='mr-[47px] pr-7' /></h2>
            </div>

            <hr className='mt-1 border border-[#BBBBBB]' />
            <div className='grid grid-cols-12'>
              <div className='col-span-4'>
                <div className='mt-14'>
                  <div className='flex  justify-evenly'>
                    <img src={smallbtc} alt="" className='-mt-7' />
                    <p className='text-sm font-normal mt-1'>BTC</p>
                    <div className='ml-3'>
                      <p className='mb-4'>We Buy @ <span className='font-bold text-sm'> ₦350/$ </span></p>
                      <p>We Sell @ <span className='font-bold text-sm'> ₦370/$ </span></p>
                    </div>
                  </div>
                  <div className='flex justify-evenly mt-12 '>
                    <img src={eth} alt="" className='ml-4 -mt-7' />
                    <p className='text-sm font-normal mt-1'>ETH</p>
                    <div className='ml-6'>
                      <p className='mb-3'>We Buy @ <span className='font-bold text-sm'> ₦345/$ </span></p>
                      <p className='mt-4'>We Sell @ <span className='font-bold text-sm'> ₦370/$ </span></p>
                    </div>
                  </div>

                </div>
              </div>
              <div className='col-span-4 mr-10'>
                <div className='flex flex-col justify-center mt-14'>

                  <div className='flex flex-wrap  justify-between items-center'>
                    <img src={bank} alt="" className='ml-1 mr-6' />
                    <p className='-ml-36'>Bank Transfer</p>
                    <p>NGN</p>
                  </div>
                  <div className='flex justify-end mt-3'>  <p className='mb-3  font-semibold'>  #3452030300303.24/$</p></div>
                  <div className='flex mt-10  justify-around items-center'>
                    <img src={smallbtc} alt="" className='ml-5'/>
                    <p className='ml-3'>Bitcoin</p>
                    <div className='ml-36'>
                      <p className='mb-3 '><span className='font-semibold mr-3'>399.98</span>BTC</p>
                    </div>
                  </div>
                  <div className='flex mt-10 justify-around items-center'>
                    <img src={eth} alt="" />
                    <p className=''>Ethereum</p>
                    <div className='ml-32'>
                      <p className='mb-3 '><span className='font-semibold mr-4'>100</span>ETH</p>
                    </div>
                  </div>


                </div>

              </div>
              <div className='col-span-3 flex flex-col justify-around items-center'>
                <div>
                  <button className='text-center mt-2 text-white w-[85.67px] h-[24px] text-[8px] font-bold leading-[25px]  bg-gradient-to-b  from-[#FD749B]  to-[#281AC8] rounded-[5px]'>
                    8 hours ago
                  </button>
                </div>
                <div className='flex -ml-28 mt-0  justify-evenly items-center'>
                  <p>Bitcoin BTC   <svg xmlns="http://www.w3.org/2000/svg" width="15" height="6" viewBox="0 0 15 6" fill="none" className='inline mx-2'>
                    <path d="M0.256782 3.84489H11.279V5.38288C11.279 5.45232 11.3043 5.51231 11.355 5.56312C11.4058 5.6139 11.4659 5.63924 11.5353 5.63924C11.6101 5.63924 11.6715 5.61525 11.7194 5.56716L14.2828 3.00388C14.3307 2.95582 14.3547 2.89437 14.3547 2.81969C14.3547 2.74486 14.3307 2.68339 14.2826 2.63544L11.7275 0.0801288C11.6634 0.0266535 11.5992 0 11.5351 0C11.4604 0 11.3989 0.0240163 11.351 0.0720488C11.3029 0.120165 11.279 0.181496 11.279 0.256294V1.79429H0.256782C0.187371 1.79429 0.127303 1.81962 0.0765768 1.87037C0.0258511 1.92113 0.000488281 1.98117 0.000488281 2.05058V3.58857C0.000488281 3.65798 0.0258231 3.71805 0.0765768 3.76878C0.127331 3.8195 0.187371 3.84489 0.256782 3.84489Z" fill="url(#paint0_linear_32_2837)" />
                    <defs>
                      <linearGradient id="paint0_linear_32_2837" x1="7.89529" y1="-0.887657" x2="8.02039" y2="9.11069" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#FD749B" />
                        <stop offset="1" stop-color="#281AC8" />
                      </linearGradient>
                    </defs>
                  </svg>    Bank
                    <p> Transfer NGN</p></p>
                </div>
                <div className='-ml-2 mt-14'>
                  <span className='font-bold'>  1.16</span> BTC <svg xmlns="http://www.w3.org/2000/svg" width="15" height="11" viewBox="0 0 15 11" fill="none" className='inline mx-1'>
                    <path d="M0.25727 3.84489H11.2795V5.38288C11.2795 5.45232 11.3048 5.51231 11.3555 5.56312C11.4063 5.6139 11.4664 5.63924 11.5358 5.63924C11.6106 5.63924 11.672 5.61525 11.7199 5.56716L14.2833 3.00388C14.3312 2.95582 14.3552 2.89437 14.3552 2.81969C14.3552 2.74486 14.3312 2.68339 14.2831 2.63544L11.728 0.0801288C11.6638 0.0266535 11.5997 0 11.5356 0C11.4609 0 11.3994 0.0240163 11.3514 0.0720488C11.3034 0.120165 11.2794 0.181496 11.2794 0.256294V1.79429H0.25727C0.187859 1.79429 0.127791 1.81962 0.0770651 1.87037C0.0263394 1.92113 0.000976562 1.98117 0.000976562 2.05058V3.58857C0.000976562 3.65798 0.0263113 3.71805 0.0770651 3.76878C0.127819 3.8195 0.187859 3.84489 0.25727 3.84489Z" fill="url(#paint0_linear_32_2832)" />
                    <path d="M14.0985 6.92105H3.07635V5.383C3.07635 5.31359 3.05096 5.25352 3.00026 5.2028C2.94951 5.15204 2.88941 5.12671 2.82003 5.12671C2.7452 5.12671 2.68384 5.15072 2.63578 5.19876L0.0725367 7.7619C0.0245886 7.8101 0.000488281 7.87137 0.000488281 7.94628C0.000488281 8.01561 0.0244764 8.07444 0.0725367 8.12234L2.62782 10.6857C2.69192 10.7391 2.756 10.7657 2.82011 10.7657C2.8895 10.7657 2.94959 10.7404 3.00032 10.6897C3.05102 10.6389 3.07641 10.5789 3.07641 10.5094V8.97149H14.0985C14.168 8.97149 14.2279 8.94627 14.2788 8.89546C14.3295 8.84465 14.3547 8.78466 14.3547 8.71514V7.1772C14.3547 7.10776 14.3294 7.04778 14.2788 6.99708C14.2279 6.94638 14.168 6.92105 14.0985 6.92105Z" fill="url(#paint1_linear_32_2832)" />
                    <defs>
                      <linearGradient id="paint0_linear_32_2832" x1="7.89578" y1="-0.887657" x2="8.02088" y2="9.11069" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#FD749B" />
                        <stop offset="1" stop-color="#281AC8" />
                      </linearGradient>
                      <linearGradient id="paint1_linear_32_2832" x1="7.89533" y1="4.23909" x2="8.02041" y2="14.237" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#FD749B" />
                        <stop offset="1" stop-color="#281AC8" />
                      </linearGradient>
                    </defs>
                  </svg> <span className='font-bold'>696152299929.23 </span>NGN
                </div>
                <hr className='w-[90%] border border-[#BBBBBB] ' />
                <div className='-ml-20'>
                  Amazon Card    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="6" viewBox="0 0 15 6" fill="none" className='inline mx-2'>
                    <path d="M0.256782 3.84489H11.279V5.38288C11.279 5.45232 11.3043 5.51231 11.355 5.56312C11.4058 5.6139 11.4659 5.63924 11.5353 5.63924C11.6101 5.63924 11.6715 5.61525 11.7194 5.56716L14.2828 3.00388C14.3307 2.95582 14.3547 2.89437 14.3547 2.81969C14.3547 2.74486 14.3307 2.68339 14.2826 2.63544L11.7275 0.0801288C11.6634 0.0266535 11.5992 0 11.5351 0C11.4604 0 11.3989 0.0240163 11.351 0.0720488C11.3029 0.120165 11.279 0.181496 11.279 0.256294V1.79429H0.256782C0.187371 1.79429 0.127303 1.81962 0.0765768 1.87037C0.0258511 1.92113 0.000488281 1.98117 0.000488281 2.05058V3.58857C0.000488281 3.65798 0.0258231 3.71805 0.0765768 3.76878C0.127331 3.8195 0.187371 3.84489 0.256782 3.84489Z" fill="url(#paint0_linear_32_2837)" />
                    <defs>
                      <linearGradient id="paint0_linear_32_2837" x1="7.89529" y1="-0.887657" x2="8.02039" y2="9.11069" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#FD749B" />
                        <stop offset="1" stop-color="#281AC8" />
                      </linearGradient>
                    </defs>
                  </svg>  Bank
                  <p className='mt-2'>Transfer NGN</p>
                </div>

              </div>
              <img src={scrollt} alt="" className='col-span-1 mt-6 ml-14' />
            </div>

          </div>

        </div>

      </div>

      {/* landing page layer 4  */}

      <div className='font-poppins flex  items-center justify-between px-[250px] py-1 my-16 '>

        <div>
          <p className="font-bold text-2xl xl:w-[59%] sm:leading-normal  bg-gradient-to-b from-[#FD749B]  to-[#281AC8] bg-clip-text text-transparent">Great experience <br />
          with CoinBase</p>
          <hr className='w-12 border-2 border-pink-500 rounded-sm lg:mt-5 sm:mx-auto  sm:mt-6 xs:mx-auto xs:mt-6 lg:mx-0' />
          <p className=" my-2 leading-9 h-64 w-[380px] pr-5 text-justify">CoinBase is an online site and a p2admin platform that allows users to buy, sell and/ or exchange digital and fiat assets safely. Owned and managed by CoinBase Business Services established and Incoperated in Nigeria.
          </p>
          <button class="rounded-full text-[14px] login-header border px-9 py-3 font-bold text-white">DISCOVER</button>
        </div>

        <div>
          <img className="" src="/images/landing4.png" alt="lading4 pic" />
        </div>

      </div>

      {/* landing page layer 5  */}

      <div className='landingSection5 min-h-[40vh] '>
        <div className='mt-32'>.
          <div className='lg:max-w-[65%] md:w-[70%] sm:w-[80%] xs:w-[85%] mx-auto mt-28 mb-20 pb-20 shadow-2xl bg-white rounded-[50px] '>
            <div className='pt-14 xs:py-3'>  <h2 className='font-bold lg:text-[28px] xl:w-[53%] sm:leading-normal lg:w-[55%] sm:text-2xl sm:mx-auto xs:text-2xl xs:mx-auto  xs:w-[80%] bg-gradient-to-b from-[#FD749B]  to-[#281AC8] bg-clip-text text-transparent xs:text-center sm:text-center  '>Trade from anywhere</h2></div>
            <hr className='w-10 border-2 mx-auto mt-3 border-[#FD749B] rounded-md' />
            <div className='grid grid-cols-2 xs:grid-cols-1 mt-10 px-24'>
              <div className='md:px-24 md:py-20 sm:p-20 xs:p-14 mx-auto border-2 border-fuchsia-800 rounded-3xl'>
                <img src={bitcoin} alt="bitcoin" />
                <h3 className='mt-7 font-bold text-base'>Bitcoin</h3>
              </div>
              <div className='md:px-24 md:py-20 sm:p-20 xs:p-14 mx-auto  border-2 border-fuchsia-800 rounded-3xl xs:mt-5'>
                <img src={gift_card} alt="bitcoin" />
                <h3 className='mt-12 font-bold text-base'>Gift Cards</h3>
              </div>
            </div>

          </div>
        </div>
      </div>


      {/* landing page section 6  */}
      <div className='lg:mt-36 font-poppins'>
        <div className='max-w-[90%] mx-auto'>
          <h2 className='font-bold lg:text-[28px] xl:w-[53%] sm:leading-normal lg:w-[55%] sm:text-2xl sm:mx-auto xs:text-2xl xs:mx-auto  xs:w-[80%] bg-gradient-to-b from-[#FD749B]  to-[#281AC8] bg-clip-text text-transparent xs:text-center sm:text-center  '>Our blog</h2>
          <hr className='w-12 border-2 mx-auto mt-3 border-[#FD749B] rounded-md' />
          <h3 className='font-normal text-base text-center mt-7'>Get to know the latest stuff via our blog post.</h3>
          <div className='flex justify-center items-center relative mt-12'>

            <div className='border-2 h-[286px] bg-white relative left-36 -z-10 w-[30%] grayscale p-10 rounded-2xl xs:hidden sm:hidden lg:block'>
              <p className='flex justify-start  mt-3 text-[#888888] text-xs'>
                <span> 19 June, 2019 </span>
                <hr className='border-t-2 w-4 rotate-90 mx-2 mt-2' />
                <span>BUSINESS</span>
              </p>
              <h2 className=' text-xl mt-3 text-zinc-500'>HOW TO SELL YOUR ITUNES
                GIFTCARD WITH US</h2>
              <p className='mt-3 w-[70%] text-[10px] text-zinc-500'>Lorem ipsum dolor sit amet, magna habemus
                ius ad, qui minimum voluptaria in. Ad mei modus
                quodsi complectitur, postea...</p>
              <button className='mt-3 grayscale'><img src={readmore} alt="" /></button>
            </div>

            <div className='border-2 rounded-[20px] border-fuchsia-800 shadowBlog  bg-white relative sm:w-[80%] lg:w-[30%] xs:w-[95%] z-10 py-5 px-[15px] xs:p-5  '>
              <p className='flex justify-start mt-3  text-xs'>
                <span> 19 June, 2019 </span>
                <hr className='border-t-2 w-4 rotate-90 mx-2 mt-2' />
                <span>BUSINESS</span>
              </p>
              <h2 className='font-bold text-2xl mt-3 leading-10 bg-gradient-to-b from-[#FD749B]  to-[#281AC8] bg-clip-text text-transparent'>ETH TO NAIRA EXCHANGE
                RATE IS NOW #400 PER...</h2>
              <p className='mt-3 xl:w-[88%] lg:w-[100%] text-xs leading-7'>Lorem ipsum dolor sit amet, magna habemus
                ius ad, qui minimum voluptaria in. Ad mei modus
                quodsi complectitur, postea...</p>
              <Link to="/blogContent" ><button className='mt-3'><img src={readmore} alt="" /></button></Link>
            </div>


            <div className='border-2 h-[286px] relative -z-10 right-16 w-[30%] grayscale p-10 rounded-2xl xs:hidden sm:hidden lg:block'>
              <p className='flex justify-start mt-3 text-[#888888] text-xs'>
                <span> 19 June, 2019 </span>
                <hr className='border-t-2 w-4 rotate-90 mx-2 mt-2' />
                <span>BUSINESS</span>
              </p>
              <h2 className=' text-xl mt-3 text-zinc-500'>EXCHANGE 5 PRODUCTS & 
GET 1 FREE PRODUCT.</h2>
              <p className='mt-3 w-[70%] text-[10px]'>Lorem ipsum dolor sit amet, magna habemus
                ius ad, qui minimum voluptaria in. Ad mei modus
                quodsi complectitur, postea...</p>
              <button className='mt-3 grayscale'><img src={readmore} alt="" /></button>
            </div>
          </div>
        </div>
      </div>


      {/* landing page layer 7  */}

      <div className='font-poppins section7Bg min-h-[170vh] xs:min-h-[150vh] pb-[160px]'>
        <div className='max-w-[80%] mx-auto '>.
          <div className='w-[35%]  xs:w-[90%] mx-auto sm:mt-[420px] xs:mt-80'>
            <h2 className='text-center font-bold text-[28px]  text-white'>10,000 Satisfied clients
              around the world</h2>
            <hr className='w-12 border-2 mx-auto mt-5 border-[#FD749B] rounded-md' />
          </div>
          <div className='w-[55%] xs:w-[95%] mx-auto mt-4 text-white'>
            <p className='text-base text-center font-normal leading-[40px]'>Yeah! we’re proud with numbers. We’ve helped thousands of clients all around the world with our bespoke service. Hover ontop of them pic to view their testimonials.</p>

          </div>
          <div className='xs:hidden relative' >
            <img src={section7} alt=" Imagea" />
            <img src={testimonial} alt="" className='absolute xl:left-[530px] md:left-[30%] xl:top-52 md:top-[20%] sm:hidden md:block' />
          </div>

        </div>
      </div>

      {/* landing page layer 8  */}
      <div className='max-w-[80%] mx-auto'>
        <div className='flex flex-col items-center'>
          <div className='xs:py-5'><img src={download} alt="" /></div>
          <hr className='w-12 border-2 mx-auto mt-5 border-[#FD749B] rounded-md' />
          <div className='w-[35%] xs:w-[80%] mt-7'>
            <p className='text-base text-center font-poppins font-normal text-[16px] leading-loose'>Discover exclusive deals and discounts with
              our mobile experience.</p>
          </div>
          <div className='mt-5'>
            <img src={downloadStore} alt="" />
          </div>
        </div>

      </div>

      {/* landing page layer download app 9  */}
      <div className='section9 max-h-[80vh] mb-96 xs:hidden'>.
        <div className='flex mt-64 justify-center  flex-wrap' >
          <div className='mr-5'>
            <img src={iphone1} alt="" />
          </div>
          <div>
            <img src={iphone2} alt="" />
          </div>
        </div>

      </div>

      {/* landing page layer 10  */}
      <div className='mt-48'>
        <div className='flex flex-col items-center '>
          <h2 className='xs:px-5 mt-32'><img src={section10} alt="" /></h2>
          <hr className='w-12 border-2 mx-auto mt-5 border-[#FD749B] rounded-md' />
          <div className='w-[30%] xs:w-[80%] mt-7'>
            <p className='text-center font-normal font-poppins leading-loose'>Subscribe to our newsletter for daily/weekly update of our products and services.</p>
          </div>
        </div>
        <div className='flex justify-center  my-12  mb-36'>
          <form action="" className='flex justify-center xs:grid xs:grid-cols-1 xs:gap-5'>
            <input type="Email" placeholder='Email ' className=' mx-3 px-3 py-2 placeholder-gray-500 border border-pink-300 rounded-[50px] focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 w-96 xs:w-[90%] ' required />
            <button type='submit' className='self-center xs:mx-auto'><img src={discover} alt="" className='' /></button>
          </form>

        </div>
      </div>

    </>
  )
}

export default LandingPage;