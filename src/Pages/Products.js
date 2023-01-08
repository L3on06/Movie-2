import { useEffect, useState } from 'react'
import Footer from "../Components/Footer";
import NoImage from '../Assets/Images/noimage.png'
import Nav from "../Components/Nav"
import axios from 'axios'
import { Link } from "react-router-dom"
import '../Assets/Styles/Global.css';
import '../Assets/Styles/Components.css';

function Products() {
  const [page, setPage] = useState(1)
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');

  const API_KEY = 'api_key=f1927fe38d1e157a80cc612bae6d51fc';
  const BASE_URL = 'https://api.themoviedb.org/3'

  useEffect(() => {
    const API_URL = `${BASE_URL}/discover/movie/?page=${page}&certification_country=US&certification=R&sort_by=vote_average.desc&${API_KEY}`

    axios.get(API_URL)
      .then(resp => {
        setMovies(resp.data.results)
      })
      .catch(e => console.log(e))
  }, [page])

  const prevPage = (e) => {
    e.preventDefault()

    const prev_page = page - 1

    if (prev_page < 1) return

    setPage(prev_page)
  }

  const nextPage = (e) => {
    e.preventDefault()

    const next_page = page + 1

    if (next_page > 200) return

    setPage(next_page)
  }

  return (
    <div className='products-bg '>
      <Nav />
      <div>
        <div>
          <form className='search-container text-center p50-All'>
            <input className='search' onChange={(e) => setSearch(e.target.value)} type="search" name='search' placeholder='Search...'></input>
          </form>
          <div className="primary-color products  p50-RL container">
            {movies && movies.filter((item) => {
              return search.toLowerCase() === "" ? item : item.title.toLowerCase().includes(search)
            }).map(movie => (
              <div>
                <Link to={`/product/${movie.id}`}>
                  {movie.poster_path === null ? <img loading='lazy' className="products-img" src={NoImage} alt="card"></img> : <img className="products-img" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="Card"></img>}
                </Link>
                <div className="primary-color">
                  <h4 className="products-title m50-TB text-center">{movie.title}</h4>
                  <Link className="products-btn flex m50-TB secondary-color" to={`/product/${movie.id}`}>Watch Now</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="container">
          <ul className="pagination primary-color">
            <li><a className='arrow primary-color' href="/" onClick={prevPage}>&lt;</a></li>
            <li>{page}</li>
            <li><a className='arrow primary-color' href="/" onClick={nextPage}>&gt;</a></li>
          </ul>
        </div>
      </div>
      <Footer />
    </div >
  )
}

export default Products;
