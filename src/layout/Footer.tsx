import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer role="contentinfo" className="bg-primary" aria-labelledby="footer-heading">
    <h2 id="footer-heading" className="sr-only">Footer</h2>
    <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-16">
      <div className="xl:grid xl:grid-cols-3 xl:gap-8">
        <div className="space-y-8 xl:col-span-1">
          <a className="relative flex items-center gap-2 transition-all cursor-pointer base-clickable" href="/">
            <div className="contents">
              <div className="footer-company-about">
                <div className="h-auto w-36 flex items-center">
                  <img width="48" height="87" src="/logo.svg" alt="BlockEstate" />
                  <span className="text-gray-400 hover:text-gray-500 text-[24px] ml-4">BlockEstate</span>
                </div>
              </div>
            </div>
          </a>
          <p className="text-base text-muted">Connecting Crypto with Real Estate</p>
          <div className="flex space-x-6">
            <a className="text-gray-400 hover:text-gray-500" href="https://www.instagram.com/realopen.io/">
              <span className="sr-only">Instagram</span>
              <img src='/icons/instagram.svg' alt='instagram' width='24px' height='24px'/>
            </a>
            <a className="text-gray-400 hover:text-gray-500" href="https://twitter.com/realopen_io">
              <span className="sr-only">Twitter</span>
              <img src='/icons/twitter.svg' alt='Twitter' width='24px' height='24px'/>
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 mt-12 xl:col-span-2 xl:mt-0">
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 className="footer-heading">For Buyers</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a href="/buy" className="footer-link">How it works</a>
                </li>
                <li>
                  <a href="/login" className="footer-link">Buyer's portal</a>
                </li>
                <li>
                  <a href="/agents/directory" className="footer-link">Agent directory</a>
                </li>
              </ul>
            </div>
            <div className="mt-12 md:mt-0">
              <h3 className="footer-heading">For Sellers</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a href="/sell" className="footer-link">How it works</a>
                </li>
                <li>
                  <a href="/login" className="footer-link">Seller's portal</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 className="footer-heading">For Agents</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a href="/agents" className="footer-link">Find out more</a>
                </li>
                <li>
                  <a href="/start" className="footer-link">Connect with us</a>
                </li>
              </ul>
            </div>
            <div className="mt-12 md:mt-0">
              <h3 className="footer-heading">Company</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a className="footer-company-heading" href="/about">
                    <div className="contents">
                      <div className="footer-company-about">About</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a className="footer-company-heading" href="/contact">
                    <div className="contents">
                      <div className="footer-company-about">Contact</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a className="footer-company-heading" href="/press-and-news">
                    <div className="contents">
                      <div className="footer-company-about">Press &amp; News</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a className="footer-company-heading" href="tel:+13109101722">
                    <div className="contents">
                      <div className="footer-company-about">+1 310 910 1722</div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-start gap-4 pt-10 lg:justify-center">
        <div className="flex gap-8 pt-8">
          <div className="flex flex-wrap justify-start gap-2 text-base text-gray-400 whitespace-nowrap xl:text-center">
            <div className="w-48 md:mr-6 md:w-auto">
              <a href="/mls" className="footer-link">Latest MLS listings</a>
            </div>
            <div className="w-48 md:mr-6 md:w-auto">
              <a href="/mls/ny/10021" className="footer-link">Manhattan</a>
            </div>
            <div className="w-48 md:mr-6 md:w-auto">
              <a href="/mls/ny" className="footer-link">New York</a>
            </div>
            <div className="w-48 md:mr-6 md:w-auto">
              <a href="/mls/fl/33140" className="footer-link">Miami Beach</a>
            </div>
            <div className="w-48 md:mr-6 md:w-auto">
              <a href="/mls/fl" className="footer-link">South Florida</a>
            </div>
            <div className="w-48 md:mr-6 md:w-auto"><a href="/mls/tx" className="footer-link">Houston</a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-start gap-4 pt-10 lg:justify-center">
        <div className="flex gap-3 md:gap-8">
          <p className="text-base text-gray-400 whitespace-nowrap xl:text-center">© 2024 BlockEstate, Inc.</p>
          <div className="text-base text-gray-400 whitespace-nowrap">
            <a className="footer-company-heading" href="/legal/privacy">
              <div className="contents">
                <div className="footer-company-about">Privacy Policy</div>
              </div>
            </a>
          </div>
          <div className="text-base text-gray-400 whitespace-nowrap">
            <a className="footer-company-heading" href="/legal/tos">
              <div className="contents">
                <div className="footer-company-about">Terms</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer