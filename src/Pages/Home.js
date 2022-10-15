import React from "react";
import Nav from '../Components/Nav'
import Header from '../Components/Header'
import LatestProducts from "../Components/LatestProducts"
import About from "../Components/About"
import Footer from '../Components/Footer'

function Home() {
  return (
    <>
      <Nav />
      <Header />
      <LatestProducts />
      <About />
      <Footer />
    </>
  )
}

export default Home;
