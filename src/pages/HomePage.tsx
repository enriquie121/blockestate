import React from 'react'
import Layout from '../layout/Layout'
import Intro from '../components/intro/Intro'
import HowToBuy from '../components/howToBuy/HowToBuy'
import Content from '../components/content/Content'
import Listings from '../components/listings/Listings'
import Insights from '../components/insights/Insights'
import RealScore from '../components/realScore/RealScore'
import Agents from '../components/agents/Agents'
import SellWithRealOpen from '../components/sellWithRealOpen/SellWithRealOpen'
import FAQ from '../components/faq/FAQ'
import Luck from "../components/Luck/Luck"

const Homepage = () => {
  return (
    <Layout>
      <Luck />
      <Intro />
      <HowToBuy/>
      <Content/>
      <Listings/>
      <Insights/>
      <RealScore/>
      <Agents/>
      <SellWithRealOpen/>
      <FAQ/>
    </Layout>
  )
}

export default Homepage