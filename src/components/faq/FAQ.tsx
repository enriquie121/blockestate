import React from 'react'
import './faq.css'
const FAQ = () => {
    return (
        <div className='bg-primary'>
            <div className="max-w-screen-md px-6 py-12 mx-auto space-y-20 sm:py-24">
                <div className="space-y-12">
                    <h2 className="px-10 font-serif text-4xl text-center sm:text-5xl md:text-6xl text-ink">Frequently asked questions</h2>
                    <dl className="mt-6 divide-y divide-gray-700">
                        <details className="accordion-item">
                            <summary className="flex items-start justify-between w-full py-6 cursor-pointer">
                                <dt>
                                    <p className="font-sans text-lg text-ink">Can I buy property with crypto?</p>
                                </dt>
                                <span className="flex items-center ml-6 accordion-item__disclosure-arrow h-7">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" aria-hidden="true" className="w-6 h-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                    </svg>
                                </span>
                            </summary>
                            <dd className="pb-6 pr-12 -mt-4 space-y-4 text-lg text-muted">Yes, you can buy a home with cryptocurrency using BlockEstate's crypto-to-fiat service.
                                The platform allows you to purchase any property—whether on-market or off-market—using Bitcoin,
                                Ethereum, USDC, and other marketable cryptocurrencies. The process offers a seamless experience,
                                protecting you from volatility and ensuring compliance with legal and financial regulations.
                            </dd>
                        </details>
                        <details className="accordion-item">
                            <summary className="flex items-start justify-between w-full py-6 cursor-pointer">
                                <dt>
                                    <p className="font-sans text-lg text-ink">Do escrow companies accept crypto for real estate purchases?</p>
                                </dt>
                                <span className="flex items-center ml-6 accordion-item__disclosure-arrow h-7">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" aria-hidden="true" className="w-6 h-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                    </svg>
                                </span>
                            </summary>
                            <dd className="pb-6 pr-12 -mt-4 space-y-4 text-lg text-muted">Most escrow companies do not directly accept cryptocurrency. To buy a home with crypto,
                                you can leverage BlockEstate's crypto-to-fiat service to convert your crypto into fiat en route to
                                escrow. This allows you to fund a traditional cash purchase with your crypto funds.
                            </dd>
                        </details>
                        <details className="accordion-item">
                            <summary className="flex items-start justify-between w-full py-6 cursor-pointer">
                                <dt>
                                    <p className="font-sans text-lg text-ink">Where can I find listings that accept crypto?</p>
                                </dt>
                                <span className="flex items-center ml-6 accordion-item__disclosure-arrow h-7">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" aria-hidden="true" className="w-6 h-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                    </svg>
                                </span>
                            </summary>
                            <dd className="pb-6 pr-12 -mt-4 space-y-4 text-lg text-muted">BlockEstate allows you to purchase any property with crypto, so there's no need to limit
                                your search to crypto-friendly listings. You can buy from any seller (individual, builder,
                                developer, bank, or otherwise), and they will receive fiat at closing. So you are never
                                limited to searching for sellers that accept crypto.
                            </dd>
                        </details>
                        <details className="accordion-item">
                            <summary className="flex items-start justify-between w-full py-6 cursor-pointer">
                                <dt>
                                    <p className="font-sans text-lg text-ink">How does BlockEstate work with cryptocurrency?</p>
                                </dt>
                                <span className="flex items-center ml-6 accordion-item__disclosure-arrow h-7">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" aria-hidden="true" className="w-6 h-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                    </svg>
                                </span>
                            </summary>
                            <dd className="pb-6 pr-12 -mt-4 space-y-4 text-lg text-muted">BlockEstate simplifies real estate purchases with cryptocurrency by converting your digital
                                assets into fiat currency through our prime OTC trading desk. This conversion ensures that your
                                offer is treated as an all-cash offer by the seller, eliminating concerns about crypto volatility
                                and slippage.
                            </dd>
                        </details>
                        <details className="accordion-item">
                            <summary className="flex items-start justify-between w-full py-6 cursor-pointer">
                                <dt>
                                    <p className="font-sans text-lg text-ink">What if crypto prices drop during the transaction?</p>
                                </dt>
                                <span className="flex items-center ml-6 accordion-item__disclosure-arrow h-7">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" aria-hidden="true" className="w-6 h-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                    </svg>
                                </span>
                            </summary>
                            <dd className="pb-6 pr-12 -mt-4 space-y-4 text-lg text-muted">BlockEstate mitigates price volatility by converting your crypto at the time of closing.
                                Our RealScore system assesses the stability of your offer, taking into account factors like
                                portfolio diversity and market conditions. This allows us to present a secure offer to the seller,
                                minimizing the risk of price fluctuations affecting your purchase.
                            </dd>
                        </details>
                        <details className="accordion-item">
                            <summary className="flex items-start justify-between w-full py-6 cursor-pointer">
                                <dt>
                                    <p className="font-sans text-lg text-ink">How do I invest in real estate with crypto?</p>
                                </dt>
                                <span className="flex items-center ml-6 accordion-item__disclosure-arrow h-7">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" aria-hidden="true" className="w-6 h-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                    </svg>
                                </span>
                            </summary>
                            <dd className="pb-6 pr-12 -mt-4 space-y-4 text-lg text-muted">There are several options for investing in real estate with crypto. Services like BlockEstate
                                convert your crypto to fiat as part of a real estate purchase, tokenization
                                allows you to buy shares of a real estate investment (offering a lower entry barrier), and a growing
                                number of sellers are willing to accept a direct crypto transaction.
                            </dd>
                        </details>
                        <details className="accordion-item">
                            <summary className="flex items-start justify-between w-full py-6 cursor-pointer">
                                <dt>
                                    <p className="font-sans text-lg text-ink">Why shouldn't I just sell my crypto and pay in cash?</p>
                                </dt>
                                <span className="flex items-center ml-6 accordion-item__disclosure-arrow h-7">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" aria-hidden="true" className="w-6 h-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                    </svg>
                                </span>
                            </summary>
                            <dd className="pb-6 pr-12 -mt-4 space-y-4 text-lg text-muted">You can sell your crypto first and then pay with cash—but that approach is lossy and
                                requires you to cash out before you even have a purchase contract. BlockEstate offers a seamless
                                solution with prime slippage-free pricing, no withdrawal limits, and the option to stay in crypto
                                until closing day.
                            </dd>
                        </details>
                        <details className="accordion-item">
                            <summary className="flex items-start justify-between w-full py-6 cursor-pointer">
                                <dt>
                                    <p className="font-sans text-lg text-ink">How does BlockEstate ensure the legitimacy of crypto funds?</p>
                                </dt>
                                <span className="flex items-center ml-6 accordion-item__disclosure-arrow h-7">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" aria-hidden="true" className="w-6 h-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                    </svg>
                                </span>
                            </summary>
                            <dd className="pb-6 pr-12 -mt-4 space-y-4 text-lg text-muted">BlockEstate, in collaboration with regulated institutional partners, ensures full compliance
                                with KYC (Know Your Customer) and AML (Anti-Money Laundering) regulations. This guarantees that
                                all transactions are legitimate and secure for both buyers and sellers.
                            </dd>
                        </details>
                        <details className="accordion-item">
                            <summary className="flex items-start justify-between w-full py-6 cursor-pointer">
                                <dt>
                                    <p className="font-sans text-lg text-ink">What is RealScore and how does it impact my offer?</p>
                                </dt>
                                <span className="flex items-center ml-6 accordion-item__disclosure-arrow h-7">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" aria-hidden="true" className="w-6 h-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                    </svg>
                                </span>
                            </summary>
                            <dd className="pb-6 pr-12 -mt-4 space-y-4 text-lg text-muted">RealScore is BlockEstate's proprietary system that rates your offer based on its stability
                                amidst market volatility. It evaluates your crypto portfolio, collateral, and the closing timeline,
                                providing a score that helps both buyers and sellers understand the transaction's security.
                            </dd>
                        </details>
                        <details className="accordion-item">
                            <summary className="flex items-start justify-between w-full py-6 cursor-pointer">
                                <dt>
                                    <p className="font-sans text-lg text-ink">Can I use borrowed crypto to make a purchase?</p>
                                </dt>
                                <span className="flex items-center ml-6 accordion-item__disclosure-arrow h-7">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" aria-hidden="true" className="w-6 h-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                    </svg>
                                </span>
                            </summary>
                            <dd className="pb-6 pr-12 -mt-4 space-y-4 text-lg text-muted">Yes, BlockEstate is neutral regarding the source of your crypto funds. Whether your crypto
                                is directly held or financed, our platform facilitates the transaction seamlessly.
                            </dd>
                        </details>
                    </dl>
                </div>
                <div className="flex flex-col items-center max-w-sm gap-4 mx-auto ">
                    <p className="font-medium text-center text-ink">Have more questions? We're here to chat.</p>
                    <a className="relative flex items-center gap-2 px-4 py-2 text-base font-medium text-black transition-all duration-75 bg-white rounded-full cursor-pointer base-clickable hover:bg-gray-200 active:bg-gray-300 hover:text-black active:text-black" data-discover="true" href="/contact">
                        <div className="contents">
                            <div className="flex items-center justify-center transition-all pointer-events-none">Get in touch</div>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                            </svg>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default FAQ