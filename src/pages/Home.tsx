import { Hero } from '../components/Hero'
import Features from '../components/Features'
import NewArrivals from '../components/NewArrivals'
import PopularProducts from '../components/PopularProducts'
import Banner from '../components/Banner'
import About from '../components/About'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'
import Blog from './Blog'

export const Home = () => {
  return (
    <>
    <Hero />
    <Features />
    <NewArrivals />
    <PopularProducts />
    <Banner />
    <About />
    <Footer />
    </>
  )
}
