import React, { useEffect, useRef, useState } from 'react'
import './intro.css'

const Intro = () => {
    const words = ['real estate', 'condos', 'land', 'yachts', 'townhomes', 'apartements', 'chateaus', 'businesses', 'cotteges', 'islands', 'jets']
    const [currentWord, setCurrentWord] = useState(words[0])
    const [fadeState, setFadeState] = useState('fade-in')
    const indexRef = useRef(0)

    useEffect(() => {
        const wordInterval = setInterval(() => {
            setFadeState('fade-out')
            setTimeout(() => {
                indexRef.current = (indexRef.current + 1) % words.length
                setCurrentWord(words[indexRef.current])
                setFadeState('fade-in')
            }, 500)
        }, 3000)

        return () => clearInterval(wordInterval)
    }, [])

    return (
        <div className='bg-custom'>
            <div className="flex flex-col w-full py-10 mx-auto lg:max-w-7xl lg:py-0">
                <div className="relative flex flex-col mb-10 lg:my-20 lg:justify-between">
                    <div className="flex flex-col items-start mx-5 space-y-4 lg:col-span-3 lg:w-1/2">
                        <div className="space-y-6 bg-transparent lg:mx-0 lg:space-y-8">
                            <div className="flex flex-col gap-2 sm:items-start">
                                <h1 className="flex flex-col justify-start w-full font-serif text-5xl tracking-tight text-left">
                                    <span className="flex flex-row justify-start gap-x-2">
                                        <span>Buy </span>
                                        <span className={`transition-all ${fadeState} text-rovio300`}>{currentWord}</span>
                                    </span>
                                    <span>with crypto</span>
                                </h1>
                                <p className="font-sans text-lg font-bold tracking-tight text-left text-rovio300 text-quiet">Buy real estate with crypto…the seller receives cash</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-5 pt-10 space-y-5 text-lg leading-6 tracking-tight text-gray-50 lg:w-1/2">
                        <p>We convert your crypto to cash en route to escrow, so you don't need a crypto-friendly seller.</p>
                    </div>
                    <div className="px-9 flex w-full flex-col items-center pr-10 lg:absolute lg:right-0 lg:top-0 lg:w-[550px] lg:py-0 lg:pl-10 xl:pl-0">
                        <img src="/images/buying-real-estate-with-crypto-real-open-UAWARF4F.webp" alt="The process of buying real estate with crypto" />
                    </div>
                    <div className="w-full px-5 pt-5 space-y-5 text-lg leading-6 tracking-tight text-gray-50 lg:w-1/2">
                        <p>Buy houses, land, condos, or commercial property from developers, builders, individuals, or banks. You can purchase any real estate with Bitcoin, Ethereum, or any traded cryptocurrency.</p>
                        <p>No lossy public trades, no withdrawal limits, and no searching for crypto-friendly sellers. Leverage your crypto however you want to.</p>
                        <p className="font-semibold text-rovio300">Buy real estate with crypto—from any seller.</p>
                        <div className="flex flex-row items-center w-full gap-4 pt-5 lg:items-start">
                            <a className="relative flex items-center gap-2 px-5 py-3 text-base font-medium text-black transition-all duration-75 bg-white rounded-full cursor-pointer base-clickable lg:w-auto hover:bg-gray-200 active:bg-gray-300 hover:text-black active:text-black" data-discover="true" href="/sign-up">
                                <div className="contents">
                                    <div className="flex items-center justify-center transition-all pointer-events-none">Get started</div>
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                    </svg>
                                </div>
                            </a>
                            <a className="relative flex items-center gap-2 px-5 py-3 text-base font-medium transition-all duration-75 bg-transparent rounded-full cursor-pointer base-clickable lg:w-auto hover:bg-black/10 active:bg-black/20 active:text-violet-100 text-violet-100" data-discover="true" href="/buy">
                                <div className="contents">
                                    <div className="flex items-center justify-center transition-all pointer-events-none">Learn more</div>
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd">
                                        </path>
                                    </svg>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro