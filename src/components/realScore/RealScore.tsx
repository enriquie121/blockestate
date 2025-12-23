import React from 'react'
import './realScore.css'
const RealScore = () => {
  return (
    <div className='bg-custom'>
       <div className="px-6 py-12 theme-light sm:py-24">
   <div className="container grid items-center grid-cols-1 gap-12 mx-auto md:grid-cols-2">
      <div>
         <div className="space-y-4 text-left">
            <div className="flex flex-col items-start gap-2 pb-4">
               <div className="flex items-center gap-2">
                  <div className="px-3 py-1 text-xs font-bold text-white uppercase rounded-full bg-violet-700">New</div>
               </div>
               <h3 className="font-serif text-4xl text-violet-100 sm:text-5xl text-ink">RealScore™</h3>
            </div>
            <p className="font-sans text-xl font-medium text-violet-300 text-quiet">Nix the seller's crypto concerns with RealScore™.</p>
            <p className="font-sans text-xl font-medium text-violet-300 text-quiet">Our patent-pending technology analyzes your crypto basket, adjusts for coin-specific volatility, and presents a clear stability grade for your offer.</p>
         </div>
         <div className="flex items-center gap-2 mt-12">
            <a className="relative flex items-center gap-2 px-4 py-2 text-base font-medium text-black transition-all duration-75 bg-white rounded-full cursor-pointer base-clickable hover:bg-gray-200 active:bg-gray-300 hover:text-black active:text-black" data-discover="true" href="/real-score">
               <div className="contents">
                  <div className="flex items-center justify-center transition-all pointer-events-none">How it works</div>
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                     <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                  </svg>
               </div>
            </a>
         </div>
      </div>
      <div className="overflow-hidden rounded shadow-lg">
         <div className="w-full space-y-4 bg-white border border-gray-200 rounded">
            <div className="p-4 space-y-4">
               <div className="flex items-center gap-2">
                  <img src="/icons/logo-icon.svg" alt="BlockEstate" className="w-6 h-6"/>
                  <div className="flex justify-between w-full">
                     <p className="text-violet-900"><strong>RealScore</strong></p>
                     <p className="text-xs text-gray-400">by BlockEstate</p>
                  </div>
               </div>
               <div className="space-y-4">
                  <p className="text-lg font-medium text-green-600">This offer is extremely unlikely to be affected by volatility.</p>
                  <div className="space-y-2">
                     <p className="text-sm text-gray-400">RealScores are calculated using a combination of:</p>
                     <div className="grid grid-cols-1 gap-1 text-sm text-green-800 md:grid-cols-2">
                        <div className="flex items-center gap-1">
                           <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" aria-hidden="true" className="text-green-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                           </svg>
                           <p>Diversified portfolio of coins</p>
                        </div>
                        <div className="flex items-center gap-1">
                           <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" aria-hidden="true" className="text-green-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                           </svg>
                           <p>Holdings in excess of offer</p>
                        </div>
                        <div className="flex items-center gap-1">
                           <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" aria-hidden="true" className="text-green-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                           </svg>
                           <p>Additional assets as collateral</p>
                        </div>
                        <div className="flex items-center gap-1">
                           <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" aria-hidden="true" className="text-green-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                           </svg>
                           <p>7-day closing minimizes risk</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="p-4 space-y-4 bg-gray-100">
               <div className="grid items-end justify-center grid-cols-6 gap-1">
                  <div className="flex flex-col items-center col-span-1 gap-1">
                     <div className="flex items-center justify-center w-full h-2 bg-opacity-50 rounded bg-rose-500"></div>
                  </div>
                  <div className="flex flex-col items-center col-span-4 gap-1">
                     <div className="flex items-center justify-center w-full h-2 bg-yellow-500 bg-opacity-50 rounded"></div>
                  </div>
                  <div className="flex flex-col items-center col-span-1 gap-1">
                     <div className="flex items-center justify-center w-full h-2 bg-green-500 rounded">
                        <div className="w-5 h-5 bg-green-500 border-4 rounded-full shadow flex-0 border-green-50"></div>
                     </div>
                  </div>
               </div>
               <div className="text-center">
                  <p className="text-sm font-bold tracking-wide text-green-600 uppercase">Excellent</p>
                  <div className="max-w-md mx-auto text-sm text-green-800">Downside volatility in crypto values larger than any in the past <strong className="whitespace-nowrap">3 years</strong> would be required to jeopardize this offer.</div>
               </div>
            </div>
         </div>
      </div>
   </div>
</div> 
    </div>
  )
}

export default RealScore