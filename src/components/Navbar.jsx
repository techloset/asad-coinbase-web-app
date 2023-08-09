// import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <div className="py-3 container mx-auto">
                <div className="flex items-center  justify-around my-5">
                    <div className="b"> <img src="/images/Logo.png" alt="logo" />
                    </div>

                    <div className="flex justify-between">
                        <span className="ml-6 font-bold">Home</span>
                        <span className="ml-6 font-bold">About Us</span>
                        <span className="ml-6 font-bold">Blog</span>
                        <span className="ml-6 font-bold">Contact Us</span>
                    </div>

                    <div className="flex items-center ">
                        <span className="ml-3 font-bold">Sell Bitcoin/GiftCard</span>
                        <button class="bg-gradient-to-r from-pink-600 to-blue-500 rounded-3xl border-2 px-7 py-3 ml-4 font-bold text-white">LOGIN</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;
