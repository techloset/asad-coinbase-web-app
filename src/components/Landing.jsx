//import rectangle from '../../public/images/rectangle.png';

const Landing = () => {
    return (
        <>
            {/* landing page layer 1 */}
            <div className='flex  items-center justify-around my-3 px-8 py-5 '>
                <div>
                    <p className="text-3xl leading-10">We provide easy solution <br />
                        to exchange your <span className="text-3xl text-white-400 font-bold"> Bitcoin/
                            <br /> GiftCard for money</span></p>
                    <p className="my-9 leading-8">CoinBase is a platform for trading your bitcoin and <br />
                        giftcard at the best rate, why not give us a trial.</p>
                    <button class="rounded-2xl bg-white-400 border-2 px-6 py-3 font-bold text-purple-500">GET STARTED</button>
                </div>

                <div>
                    <img className="" src="/images/landingRight.png" alt="landing pic" />
                </div>
            </div>

            {/* landing page layer 2 */}

            <div className='flex  items-center justify-around px-8 py-5 '>
                <div>
                    <img className="" src="/images/layer.png" alt="layer pic" />
                </div>

                <div>
                    <p className="text-2xl font-bold text-purple-500">Welcome To CoinBase</p>
                    <p className=" my-4 leading-8 h-64 w-96">We have the best rates . Simply start your exchange right now. Sign up for our Affiliate program and earn commission from each exchange. The earnings are credited in your account instantly and can be withdrawn right away. Also note some exchange directions are hidden for unregistered user. To ensure to have access to all our exchange directions and benefits kindly sign up and verify your identity.</p>
                    <button class="rounded-2xl bg-white-400 border-2 px-6 py-3 font-bold text-purple-500">DISCOVER</button>
                </div>
            </div>

  {/* landing page layer 3 */}
        </>
    )
}

export default Landing;