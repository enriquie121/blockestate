import React from 'react'

const Agents = () => {
    return (
        <div className='bg-custom'>
            <div className="px-6 py-12 sm:py-24">
                <div className="max-w-screen-sm mx-auto text-center">
                    <div className="space-y-8">
                        <h3 className="w-full font-serif text-4xl sm:text-5xl text-ink">Attention Agents &amp; Brokers</h3>
                        <p className="font-sans text-xl font-medium text-ink">BlockEstate Partner Agents are winning more listings, closing monster deals, and making big waves as crypto-expert agents.</p>
                    </div>
                    <div className="flex items-center justify-center gap-2 mt-12">
                        <a className="relative flex items-center gap-2 px-4 py-2 text-base font-medium text-black transition-all duration-75 bg-white rounded-full cursor-pointer base-clickable hover:bg-gray-200 active:bg-gray-300 hover:text-black active:text-black px-4rue" href="/agents">
                            <div className="contents">
                                <div className="flex items-center justify-center transition-all pointer-events-none">Learn how</div>
                                <img src='/icons/arrow.svg' alt='arrow'/>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Agents