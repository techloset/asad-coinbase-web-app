
const Footer = () => {
    return (
        <>
            <div className="bg-black mt-3 text-white">
                <div className="py-14 container mx-auto">
                    <div className="flex items-center justify-around">
                        <div>
                            <img src="/images/footerlogo.png" alt="logo" className="text-5xl mb-5"/>
                            <p className="mt-3"> Fusce ut elit aliquet, fermentum leo vel, <br /> tempus nunc. Fusce eu rhoncus augue. <br />Fusce vel metus pharetra, fermentum</p>
                            <img className="mt-3" src="/images/SocialMediaIcons.png" alt="social" />
                        </div>

                        <div className="text-white ">
                            <h1 className="text-2xl mb-5">Coin Base Links</h1>
                            <p>Home</p>
                            <p>About Us</p>
                            <p>Blog</p>
                            <p>Sell</p>
                            <p>Contact Us</p>
                        </div>

                        <div className="text-white">
                            <h1 className="text-2xl mb-5">Contact Us</h1>
                            <p >(+234)9463524645</p>
                            <p >coinbase@yahoo.com</p>
                            <br />
                            <br />
                            <p >Download Over App</p> </div>
                        

                        <div className="text-white">
                            <h1 className="text-2xl mb-5">CoinBase Insagram</h1>
                         <img className="" src="/images/footerbox.png" alt="social" />
                            <img className="mt-2" src="/images/footerbox.png" alt="social" />      
                        </div>

                    </div>
                    <p className="text-gray-200 ml-20 mt-8">2019 Design by Muhammad Asad</p>
                </div>
            </div>
        </>
    )
}

export default Footer;