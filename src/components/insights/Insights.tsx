import React from 'react'

const Insights = () => {
  return (
    <div>
        <section className="px-6 py-12 bg-black sm:py-24">
   <div className="flex flex-col w-full py-10 mx-auto max-w-7xl gap-y-10 lg:px-8 lg:py-0">
      <h2 className="font-serif text-4xl text-rovio300 sm:text-5xl md:text-6xl text-ink"><b>Latest crypto real estate insight</b></h2>
      <div className="grid items-start grid-cols-1 gap-x-12 gap-y-24 md:grid-cols-2">
         <a className="relative flex items-center gap-2 transition-all cursor-pointer base-clickable" data-discover="true" href="/blog/crypto-real-estate-demystified">
            <div className="contents">
               <div className="flex items-center justify-center transition-all pointer-events-none">
                  <div className="flex flex-col items-center w-full gap-4">
                     <div className="flex flex-col gap-4">
                        <div className="flex items-center w-full gap-2 text-xs font-bold tracking-wide uppercase text-muted">
                           <p>by Johnny Schiro</p>
                           <div className="flex-1 w-full h-px opacity-25 bg-muted"></div>
                           <p>3 min read</p>
                        </div>
                        <img className="block aspect-[16/4] w-full rounded object-cover" src="https://realopen.ghost.io/content/images/2024/08/E297A959-6173-4389-B134-AFC0F55B0120.webp" alt="Another real estate closing funded by Bitcoin and Ethereum"/>
                        <h2 className="font-sans text-xl font-bold">Crypto Real Estate Demystified</h2>
                        <p className="text-lg">The term Crypto Real Estate covers various innovative uses of crypto in real estate, from cryptocurrency transactions to property tokenization and smart contracts. BlockEstate is an accelerant for these emerging applications. Learn how.</p>
                        <div>
                           <button className="relative flex items-center gap-2 px-4 py-1 text-sm font-medium text-black transition-all duration-75 bg-white rounded-full cursor-pointer base-clickable hover:bg-gray-200 active:bg-gray-300 hover:text-black active:text-black">
                              <div className="contents">
                                 <div className="flex items-center justify-center transition-all pointer-events-none">Read more</div>
                                 <img src='/icons/arrow.svg' alt='arrow'/>
                              </div>
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </a>
         <a className="relative flex items-center gap-2 transition-all cursor-pointer base-clickable" data-discover="true" href="/blog/new-options-for-buying-real-estate-with-crypto">
            <div className="contents">
               <div className="flex items-center justify-center transition-all pointer-events-none">
                  <div className="flex flex-col items-center w-full gap-4">
                     <div className="flex flex-col gap-4">
                        <div className="flex items-center w-full gap-2 text-xs font-bold tracking-wide uppercase text-muted">
                           <p>by Johnny Schiro</p>
                           <div className="flex-1 w-full h-px opacity-25 bg-muted"></div>
                           <p>2 min read</p>
                        </div>
                        <img className="block aspect-[16/4] w-full rounded object-cover" src="https://realopen.ghost.io/content/images/2024/05/buy-a-home-with-crypto.webp" alt="Home home purchased with bitcoin"/>
                        <h2 className="font-sans text-xl font-bold">New Options for Buying Real Estate with Crypto</h2>
                        <p className="text-lg">More flexibility, efficiency, and control: we've just added two new funding options for buying real estate with crypto.</p>
                        <div>
                           <button className="relative flex items-center gap-2 px-4 py-1 text-sm font-medium text-black transition-all duration-75 bg-white rounded-full cursor-pointer base-clickable hover:bg-gray-200 active:bg-gray-300 hover:text-black active:text-black">
                              <div className="contents">
                                 <div className="flex items-center justify-center transition-all pointer-events-none">Read more</div>
                                 <img src='/icons/arrow.svg' alt='arrow'/>
                              </div>
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </a>
      </div>
   </div>
</section>
    </div>
  )
}

export default Insights