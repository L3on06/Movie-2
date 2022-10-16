import React, { useEffect, useState } from "react";
import Nav from '../Components/Nav'
import Header from '../Components/Header'
import LatestProducts from "../Components/LatestProducts"
import About from "../Components/About"
import Footer from '../Components/Footer'
import axios from 'axios'

function Home() {
  const [movies, setMovies] = useState([])

  const API_KEY = 'api_key=f1927fe38d1e157a80cc612bae6d51fc';
  const BASE_URL = 'https://api.themoviedb.org/3';
  const API_URL = `${BASE_URL}/discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc&${API_KEY}`


  useEffect(() => {
    axios.get(API_URL)
      .then(resp => setMovies(resp.data.results))
      .catch(e => console.log(e))
  }, [])

  return (
    <>
      <div className="main-bg">
        <Nav />
        <Header />
      </div>
      <LatestProducts movies={movies} />
      <About />
      <Footer />
    </>
  )
}

export default Home;
