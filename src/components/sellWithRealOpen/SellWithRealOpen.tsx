import React from 'react'

const SellWithRealOpen = () => {
  return (
    <div className='bg-violet-100'>
        <div className="px-6 py-12 theme-light bg-violet-100 sm:py-24">
   <div className="max-w-screen-sm mx-auto text-center">
      <div className="space-y-8">
         <div className="mx-auto h-[125px] w-[125px]">
            <img src='/icons/earth.svg' alt='earth'/>
         </div>
         <h3 className="font-serif text-4xl sm:text-5xl text-dark-blue">Sell with BlockEstate</h3>
         <p className="font-sans text-xl font-medium text-dark-blue">Include the crypto community in your buyer pool and leverage our massive global marketing reach.</p>
      </div>
      <div className="flex items-center justify-center gap-2 mt-12">
         <a className="relative flex items-center gap-2 px-4 py-2 text-base font-medium text-white transition-all duration-75 rounded-full cursor-pointer base-clickable bg-violet-900 hover:bg-violet-800 active:bg-violet-700 hover:text-white active:text-white" data-discover="true" href="/sign-up">
            <div className="contents">
               <div className="flex items-center justify-center transition-all pointer-events-none">Get started for free</div>
               <img src='/icons/arrow-white.svg' alt='arrow'/>
            </div>
         </a>
         <a className="relative flex items-center gap-2 px-4 py-2 text-base font-medium transition-all duration-75 bg-transparent rounded-full cursor-pointer base-clickable hover:bg-black/10 active:bg-black/20 active:text-violet-800 text-violet-900" data-discover="true" href="/sell">
            <div className="contents">
               <div className="flex items-center justify-center transition-all pointer-events-none">Benefits &amp; process</div>
               <img src='/icons/arrow.svg' alt='arrow'/>
            </div>
         </a>
      </div>
   </div>
</div>
    </div>
  )
}

export default SellWithRealOpen