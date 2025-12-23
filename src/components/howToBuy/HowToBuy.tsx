import React from 'react'

const HowToBuy = () => {
    return (
        <div>
            <div className="w-full bg-black">
                <section className="py-16 mx-5 lg:mx-auto lg:max-w-4xl">
                    <div className="flex flex-col items-center gap-8 text-center">
                        <div className="flex flex-col w-full gap-4">
                            <h3 className="font-serif text-4xl sm:text-5xl text-ink">
                                <b>Buy any home on the market</b>
                            </h3>
                            <div className="object-contain">
                                <img src="/images/house-for-sale-crypto-accepted-ST5FYMDV.png" className="text-center lg:mx-auto lg:max-w-xl" alt="a store where you can buy jewelry with crypto" />
                            </div>
                            <p className="text-lg text-gray-50">Buy real estate with Bitcoin, Ethereum, USDC, or any other marketable cryptocurrency. With BlockEstate you're a cash buyer in the eyes of every seller—so any home on the market is an option.</p>
                        </div>
                        <a className="relative flex items-center gap-2 px-5 py-3 text-base font-medium text-black transition-all duration-75 bg-white rounded-full cursor-pointer base-clickable lg:w-auto hover:bg-gray-200 active:bg-gray-300 hover:text-black active:text-black" data-discover="true" href="/buy">
                            <div className="contents">
                                <div className="flex items-center justify-center transition-all pointer-events-none">
                                    How to buy with crypto
                                    <img src='/icons/arrow.svg' alt='arrow' />
                                </div>
                            </div>
                        </a>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default HowToBuy