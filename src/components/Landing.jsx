//import rectangle from '../../public/images/rectangle.png';

const Landing = () => {
    return (
        <>
            {/* landing page layer 1 */}
            <div className="relative">
                <div
                    className="static flex items-center justify-around my-3 px-8 pt-5 pb-40 bg-cover "
                    style={{ backgroundImage: "url('/images/rectangle.png')" }}
                >
                    <div>
                        <p className="text-3xl leading-10 text-white">We provide easy solution <br />
                            to exchange your <span className="text-3xl text-white font-bold"> Bitcoin/
                                <br /> GiftCard for money</span></p>
                        <p className="my-9 leading-8 text-white">CoinBase is a platform for trading your bitcoin and <br />
                            giftcard at the best rate, why not give us a trial.</p>
                        <button className="rounded-3xl bg-white border-2 px-6 py-3 font-bold text-purple-500">GET STARTED</button>
                    </div>

                    <div>
                        <img className="" src="/images/landingRight.png" alt="landing pic" />
                    </div>

                    {/* curve white image */}
                    <div
      className="absolute bottom-[-200px] left-0 w-full h-[calc(50%+20px)]"
      style={{
        backgroundImage: "url('/images/path4.png')",
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* white text of image */}
                    </div>
                </div>
            </div>

            {/* landing page layer 2 */}

            <div className='flex  items-center justify-around px-8 py-5 mt-16 '>
                <div>
                    <img className="" src="/images/layer.png" alt="layer pic" />
                </div>

                <div>
                    <p className="text-2xl font-bold text-purple-500">Welcome To CoinBase</p>
                    <p className=" my-4 leading-8 h-64 w-96">We have the best rates . Simply start your exchange right now. Sign up for our Affiliate program and earn commission from each exchange. The earnings are credited in your account instantly and can be withdrawn right away. Also note some exchange directions are hidden for unregistered user. To ensure to have access to all our exchange directions and benefits kindly sign up and verify your identity.</p>
                    <button class="rounded-2xl bg-gradient-to-r from-pink-600 to-blue-500 border-2 px-6 py-3 font-bold text-white">DISCOVER</button>
                </div>
            </div>

            {/* landing page layer 3 */}
        </>
    )
}

export default Landing;