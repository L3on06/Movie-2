import React from "react";
import { Link } from "react-router-dom"
import '../Assets/Styles/Global.css';
import '../Assets/Styles/Components.css';
import NoImage from '../Assets/Images/noimage.png'


import { Navigation, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

function LatestProducts({ movies }) {


  return (
    <section className="LineBottom">
      <div className="latest-products primary-bg">
        <h1 className="xlg-text primary-color flex">Most recent</h1>
        <div className="flex card-container container">
          <Swiper
            modules={[Navigation, A11y, Autoplay]}
            grabCursor={true}
            touchEventsTarget={'container'}
            slidesPerView={4}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation
          >
            {movies && movies.map(movie => (
              <SwiperSlide>
                <div className="card">
                  {movie.poster_path === null ? <img className="card-img" src={NoImage} alt="card"></img> : <img className="card-img" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="Card"></img>}
                  <div className="card-body primary-color">
                    <h4 className="card-title">{movie.title}</h4>
                    <p className="card-des"></p>
                  </div>
                </div>
                <Link className="primary-btn flex secondary-color" to={`/product/${movie.id}`}>Whatch More</Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section >
  )
}

export default LatestProducts;
