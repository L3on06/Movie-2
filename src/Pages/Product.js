import React, { useEffect, useState } from "react";
import '../Assets/Styles/Global.css';
import '../Assets/Styles/Components.css';
import { useParams } from "react-router-dom";
import Nav from "../Components/Nav";
import NoImage from '../Assets/Images/noimage.png'
import axios from 'axios'
import Footer from "../Components/Footer";


function Product() {
    const { id } = useParams();
    const [movie, setMovie] = useState()
    // const [loading, setLoading] = useState(true)

    const API_KEY = 'api_key=f1927fe38d1e157a80cc612bae6d51fc'
    const BASE_URL = 'https://api.themoviedb.org/3'
    const API_URL = `${BASE_URL}/movie/${id}?${API_KEY}`

    useEffect(() => {
        axios.get(API_URL)
            .then(resp => {
                setMovie(resp.data)
                console.log(resp.data)
                // setLoading(false)
            })
            .catch(e => console.log(e))
    }, [])

    return (
        <div>
            <div className="product about-bg ">
                <Nav />
                <div className="m20-TB">
                    {movie &&
                        <div className="primary-color grid-col2 container p50-RL">
                            {movie.poster_path === null ? <img className="product-img" src={NoImage} alt="card"></img> : <img className="product-img" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="Card"></img>}
                            <div className="p50-RL">
                                <h4 className="product-title m50-TB text-center">{movie.title}</h4>
                                <p className="product-des">{movie.overview}</p>
                                <button className="product-btn flex m50-TB">Watch Now</button>
                            </div>
                        </div>}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Product;
