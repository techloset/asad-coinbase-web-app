
import React from 'react'
import { Link } from 'react-router-dom'
import drop from '../images/Dropdown.svg'
import { useState } from "react";


const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <>
      <div className="py-3 container mx-auto xs:hidden font-poppins">
        <div className="flex items-center  justify-around my-5">
          <div className="b">
            <Link to="./"><img src="/images/Logo.png" alt="logo" /> </Link>
          </div>

          <div className="flex justify-between">
            <Link to="./">  <span className="ml-20 font-bold">Home</span> </Link>
            <Link to="./about"> <span className="ml-20 font-bold">About Us</span></Link>
            <Link to="./blog">  <span className="ml-20 font-bold">Blog</span></Link>
            <span className="ml-20 font-bold">Contact Us</span>
          </div>

          <div className="flex items-center ">
            <span className="ml-3 font-bold">Sell Bitcoin/GiftCard</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="6" viewBox="0 0 8 6" fill="none" className='inline mt-6 ml-2'>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.82673 5.12603C4.42977 5.70824 3.57124 5.70824 3.17428 5.12603L0.745171 1.56334C0.292575 0.899528 0.767979 0 1.5714 0H6.42961C7.23303 0 7.70844 0.899529 7.25584 1.56334L4.82673 5.12603Z" fill="#333333" />
          </svg>
         
          <img src={drop} alt="" className='absolute top-[80px] right-[68px] 2xl:hidden xl:block sm:hidden xs:hidden ' />

            <button class="login-header rounded-3xl border-2 w-[157px] h-[54px] ml-4 font-bold text-white">LOGIN</button>
          </div>
        </div>
      </div>

      {/* Mobile view  */}

      <nav className="w-full bg-white shadow sm:hidden">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <div className="logo lg:col-span-3 my-auto sm:col-span-6">
                <Link to="./" ><img src="/images/Logo.png" alt="logo" /></Link>
              </div>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className="text-gray-600 hover:text-blue-600">
                  <Link to="./" >
                    Home
                  </Link>
                </li>
                <li className="text-gray-600 hover:text-blue-600">
                  <Link to="/about">About Us</Link>
                </li>
                <li className="text-gray-600 hover:text-blue-600">
                  <Link to="./blog">
                    Blog
                  </Link>
                </li>
                <li className="text-gray-600 hover:text-blue-600">
                  <Link to="/blogContent">Blog Content</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar;
