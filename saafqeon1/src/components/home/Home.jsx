import React from 'react'
import HeroSection from './HeroSection'
import Layout from '../../layout/Layout'
import Carousel from './Carousel'
import CardList from './Cardlist'

const Home = () => {
  return (
    <Layout>
        <HeroSection />
        <Carousel />
        <CardList />
    </Layout>
  )
}

export default Home