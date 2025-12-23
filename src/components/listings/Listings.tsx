import React, { useState } from 'react'
import './listings.css'
import { CommercialListings, FeaturedListings, HoutsonListings, MiamiListings, NewYorkListings } from './ListingData'
const Listings = () => {
   const [activeTab, setActiveTab] = useState(1)
   return (
      <div>
         <div className="py-24 space-y-8 bg-black theme-black">
            <div className="text-center">
               <h3 className="font-serif text-4xl sm:text-5xl text-ink">Latest Listings</h3>
            </div>
            <div className="scrollbar-hidden no-scrollbar mx-5 flex items-baseline space-x-2 overflow-x-scroll px-3 py-1.5 text-gray-400 sm:justify-center md:space-x-4" id="headlessui-radiogroup-:r5:" role="radiogroup" aria-labelledby="headlessui-label-:r6:">
               
               {/* Miami Tab */}
               <div
                  className={`cursor-pointer focus:outline-none ${activeTab === 1 ? 'text-white' : 'text-gray-400'}`}
                  role="radio"
                  aria-checked={activeTab === 1}
                  onClick={() => setActiveTab(1)}
               >
                  <div className="text-sm font-bold tracking-wide uppercase rounded whitespace-nowrap">Miami</div>
               </div>
               <p>/</p>

               <div
                  className={`cursor-pointer focus:outline-none ${activeTab === 2 ? 'text-white' : 'text-gray-400'}`}
                  role="radio"
                  aria-checked={activeTab === 2}
                  onClick={() => setActiveTab(2)}
               >
                  <div className="text-sm font-bold tracking-wide uppercase rounded whitespace-nowrap">New York</div>
               </div>

               <p>/</p>
               <div
                  className={`cursor-pointer focus:outline-none ${activeTab === 3 ? 'text-white' : 'text-gray-400'}`}
                  role="radio"
                  aria-checked={activeTab === 3}
                  onClick={() => setActiveTab(3)}
               >
                  <div className="text-sm font-bold tracking-wide uppercase rounded whitespace-nowrap">Houston</div>
               </div>

               <p>/</p>
               <div
                  className={`cursor-pointer focus:outline-none ${activeTab === 4 ? 'text-white' : 'text-gray-400'}`}
                  role="radio"
                  aria-checked={activeTab === 4}
                  onClick={() => setActiveTab(4)}
               >
                  <div className="text-sm font-bold tracking-wide uppercase rounded whitespace-nowrap">Commercial</div>
               </div>
               <div className="flex-shrink-0 w-2 h-px"></div>
            </div>
            <div className="w-px h-px bg-black shrink-0"></div>
            <div className="flex flex-1 gap-12 px-10 pb-2 overflow-scroll no-scrollbar snap-x snap-mandatory">
              {activeTab === 0 ? FeaturedListings.map((property) => (
               <a className="relative flex flex-col items-center justify-start gap-2 mx-auto transition-all cursor-pointer base-clickable w-72 shrink-0 snap-center md:w-96" data-discover="true" href="/property/3625-broward-lauderhill">
                  <div className="contents">
                     <div className="flex flex-col items-center justify-center w-full transition-all pointer-events-none">
                        <div className="mb-2 stack-dark shadow-stacked">
                           <div className="relative w-full h-40 overflow-hidden md:h-52">
                              <img src={property.imageURL} alt={property.propertyTitle + ' ' + property.location} className="object-cover object-center" />
                              <div className="absolute inset-x-0 flex justify-center top-2">
                                 <div className="z-20 px-4 py-1 text-xs font-bold tracking-wide text-black uppercase bg-white rounded-full shadow-xl">BlockEstate Feature</div>
                              </div>
                              <div className="absolute inset-0 flex flex-col justify-end w-full p-1 text-white bg-gradient-to-b from-black/0 via-black/0 to-black/75">
                                 <div className="flex justify-around gap-3 text-sm font-bold tabular-nums"><span className="text-gray-200 whitespace-nowrap">{property.priceUSD}</span><span className="text-orange-300 whitespace-nowrap">{property.priceBTC}</span><span className="whitespace-nowrap text-violet-300">{property.priceETH}</span></div>
                              </div>
                           </div>
                        </div>
                        <div className="mr-[-10px] space-y-2 pt-4">
                           <div className="flex flex-col items-baseline justify-between pl-[10px] text-left md:flex-row">
                              <p className="font-medium text-slate-100">{property.propertyTitle}</p>
                              <p className="text-sm font-medium tracking-wide uppercase text-slate-300">{property.location}</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </a>
              )): 
              activeTab === 1 ? MiamiListings.map((property) => (
               <a className="relative flex flex-col items-center justify-start gap-2 mx-auto transition-all cursor-pointer base-clickable w-72 shrink-0 snap-center md:w-96" data-discover="true" href="/property/3625-broward-lauderhill">
                  <div className="contents">
                     <div className="flex flex-col items-center justify-center w-full transition-all pointer-events-none">
                        <div className="mb-2 stack-dark shadow-stacked">
                           <div className="relative w-full h-40 overflow-hidden md:h-52">
                              <img src={property.imageURL} alt={property.propertyTitle + ' ' + property.location} className="object-cover object-center" />
                              <div className="absolute inset-x-0 flex justify-center top-2">
                                 <div className="z-20 px-4 py-1 text-xs font-bold tracking-wide text-black uppercase bg-white rounded-full shadow-xl">BlockEstate Feature</div>
                              </div>
                              <div className="absolute inset-0 flex flex-col justify-end w-full p-1 text-white bg-gradient-to-b from-black/0 via-black/0 to-black/75">
                                 <div className="flex justify-around gap-3 text-sm font-bold tabular-nums"><span className="text-gray-200 whitespace-nowrap">{property.priceUSD}</span><span className="text-orange-300 whitespace-nowrap">{property.priceBTC}</span><span className="whitespace-nowrap text-violet-300">{property.priceETH}</span></div>
                              </div>
                           </div>
                        </div>
                        <div className="mr-[-10px] space-y-2 pt-4">
                           <div className="flex flex-col items-baseline justify-between pl-[10px] text-left md:flex-row">
                              <p className="font-medium text-slate-100">{property.propertyTitle}</p>
                              <p className="text-sm font-medium tracking-wide uppercase text-slate-300">{property.location}</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </a>
              )) :
              activeTab === 2 ? NewYorkListings.map((property) => (
               <a className="relative flex flex-col items-center justify-start gap-2 mx-auto transition-all cursor-pointer base-clickable w-72 shrink-0 snap-center md:w-96" data-discover="true" href="/property/3625-broward-lauderhill">
                  <div className="contents">
                     <div className="flex flex-col items-center justify-center w-full transition-all pointer-events-none">
                        <div className="mb-2 stack-dark shadow-stacked">
                           <div className="relative w-full h-40 overflow-hidden md:h-52">
                              <img src={property.imageURL} alt={property.propertyTitle + ' ' + property.location} className="object-cover object-center" />
                              <div className="absolute inset-x-0 flex justify-center top-2">
                                 <div className="z-20 px-4 py-1 text-xs font-bold tracking-wide text-black uppercase bg-white rounded-full shadow-xl">BlockEstate Feature</div>
                              </div>
                              <div className="absolute inset-0 flex flex-col justify-end w-full p-1 text-white bg-gradient-to-b from-black/0 via-black/0 to-black/75">
                                 <div className="flex justify-around gap-3 text-sm font-bold tabular-nums"><span className="text-gray-200 whitespace-nowrap">{property.priceUSD}</span><span className="text-orange-300 whitespace-nowrap">{property.priceBTC}</span><span className="whitespace-nowrap text-violet-300">{property.priceETH}</span></div>
                              </div>
                           </div>
                        </div>
                        <div className="mr-[-10px] space-y-2 pt-4">
                           <div className="flex flex-col items-baseline justify-between pl-[10px] text-left md:flex-row">
                              <p className="font-medium text-slate-100">{property.propertyTitle}</p>
                              <p className="text-sm font-medium tracking-wide uppercase text-slate-300">{property.location}</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </a>
              )) :
              activeTab === 3 ? HoutsonListings.map((property) => (
               <a className="relative flex flex-col items-center justify-start gap-2 mx-auto transition-all cursor-pointer base-clickable w-72 shrink-0 snap-center md:w-96" data-discover="true" href="/property/3625-broward-lauderhill">
                  <div className="contents">
                     <div className="flex flex-col items-center justify-center w-full transition-all pointer-events-none">
                        <div className="mb-2 stack-dark shadow-stacked">
                           <div className="relative w-full h-40 overflow-hidden md:h-52">
                              <img src={property.imageURL} alt={property.propertyTitle + ' ' + property.location} className="object-cover object-center" />
                              <div className="absolute inset-x-0 flex justify-center top-2">
                                 <div className="z-20 px-4 py-1 text-xs font-bold tracking-wide text-black uppercase bg-white rounded-full shadow-xl">BlockEstate Feature</div>
                              </div>
                              <div className="absolute inset-0 flex flex-col justify-end w-full p-1 text-white bg-gradient-to-b from-black/0 via-black/0 to-black/75">
                                 <div className="flex justify-around gap-3 text-sm font-bold tabular-nums"><span className="text-gray-200 whitespace-nowrap">{property.priceUSD}</span><span className="text-orange-300 whitespace-nowrap">{property.priceBTC}</span><span className="whitespace-nowrap text-violet-300">{property.priceETH}</span></div>
                              </div>
                           </div>
                        </div>
                        <div className="mr-[-10px] space-y-2 pt-4">
                           <div className="flex flex-col items-baseline justify-between pl-[10px] text-left md:flex-row">
                              <p className="font-medium text-slate-100">{property.propertyTitle}</p>
                              <p className="text-sm font-medium tracking-wide uppercase text-slate-300">{property.location}</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </a>
              )) :
              CommercialListings.map((property) => (
               <a className="relative flex flex-col items-center justify-start gap-2 mx-auto transition-all cursor-pointer base-clickable w-72 shrink-0 snap-center md:w-96" data-discover="true" href="/property/3625-broward-lauderhill">
                  <div className="contents">
                     <div className="flex flex-col items-center justify-center w-full transition-all pointer-events-none">
                        <div className="mb-2 stack-dark shadow-stacked">
                           <div className="relative w-full h-40 overflow-hidden md:h-52">
                              <img src={property.imageURL} alt={property.propertyTitle + ' ' + property.location} className="object-cover object-center" />
                              <div className="absolute inset-x-0 flex justify-center top-2">
                                 <div className="z-20 px-4 py-1 text-xs font-bold tracking-wide text-black uppercase bg-white rounded-full shadow-xl">BlockEstate Feature</div>
                              </div>
                              <div className="absolute inset-0 flex flex-col justify-end w-full p-1 text-white bg-gradient-to-b from-black/0 via-black/0 to-black/75">
                                 <div className="flex justify-around gap-3 text-sm font-bold tabular-nums"><span className="text-gray-200 whitespace-nowrap">{property.priceUSD}</span><span className="text-orange-300 whitespace-nowrap">{property.priceBTC}</span><span className="whitespace-nowrap text-violet-300">{property.priceETH}</span></div>
                              </div>
                           </div>
                        </div>
                        <div className="mr-[-10px] space-y-2 pt-4">
                           <div className="flex flex-col items-baseline justify-between pl-[10px] text-left md:flex-row">
                              <p className="font-medium text-slate-100">{property.propertyTitle}</p>
                              <p className="text-sm font-medium tracking-wide uppercase text-slate-300">{property.location}</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </a>
              ))
              }
            </div>
         </div>
      </div>
   )
}

export default Listings