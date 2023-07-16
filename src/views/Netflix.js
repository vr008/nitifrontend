import React, { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import './css/swiper-bundle.min.css';
import './css/netflix.css';
import './css/style.css';
import netflixlogo from './img/logo.PNG';
import m1 from './img/m1.PNG';
import m2 from './img/m2.PNG';
import m3 from './img/m3.PNG';
import m4 from './img/m4.PNG';
import m5 from './img/m5.PNG';
import m6 from './img/m6.PNG';

const Netflix = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiper = new Swiper(swiperRef.current, {
      slidesPerView: 'auto',
      spaceBetween: 0,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

    return () => {
      swiper.destroy(true, true);
    };
  }, []);

  const goToNextSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goToPrevSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };
  const goToSlide = (index) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index);
    }
  };
  const generatePaginationBullets = () => {
    if (swiperRef.current && swiperRef.current.swiper && swiperRef.current.swiper.pagination) {
      const { bullets } = swiperRef.current.swiper.pagination;
      return bullets.map((bullet, index) => (
        <span
          key={index}
          className={`swiper-pagination-bullet ${index === swiperRef.current.swiper.activeIndex ? 'swiper-pagination-bullet-active' : ''}`}
          onClick={() => goToSlide(index)}
        ></span>
      ));
    }
    return null;
  };

  return (
    <body>
      <header>
        <div className="netflixLogo">
          <a id="logo" href="#home">
            <img src={netflixlogo} alt="Logo Image" />
          </a>
        </div>
        <nav className="main-nav">
          <a href="#home" className="fo">
            <b>Home</b>
          </a>
          <a href="#tvShows" className="fo">
            <b>TV Shows</b>
          </a>
          <a href="#movies" className="fo">
            <b>Movies</b>
          </a>
          <a href="#originals" className="fo">
            <b>Originals</b>
          </a>
          <a href="#recentlyAdded" className="fo">
            <b>Recently Added</b>
          </a>
          <a href="#myList" className="fo">
            <b>My List</b>
          </a>
        </nav>
        <nav className="sub-nav">
          <a href="#">
            <i className="fas fa-search sub-nav-logo"></i>
          </a>
          <a href="#">
            <i className="fas fa-bell sub-nav-logo"></i>
          </a>
          <a href="#">Account</a>
        </nav>
      </header>

      <div className="swiper-container" ref={swiperRef}>
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="container1">
              <div className="card">
                <h1 className="face face1">Movies</h1>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="container1">
              <div className="card">
                <img className="face face1" src={m1} alt="" />
                <div className="face face2">
                  <div className="content">
                    <h3 className="heading">Code</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.
                    </p>
                    <a href="#">Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="container1">
              <div className="card">
                <img className="face face1" src={m2} alt="" />
                <div className="face face2">
                  <div className="content">
                    <h3 className="heading">Code</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.
                    </p>
                    <a href="#">Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="container1">
              <div className="card">
                <img className="face face1" src={m3} alt="" />
                <div className="face face2">
                  <div className="content">
                    <h3 className="heading">Code</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.
                    </p>
                    <a href="#">Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="container1">
              <div className="card">
                <img className="face face1" src={m4} alt="" />
                <div className="face face2">
                  <div className="content">
                    <h3 className="heading">Code</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.
                    </p>
                    <a href="#">Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="container1">
              <div className="card">
                <img className="face face1" src={m5} alt="" />
                <div className="face face2">
                  <div className="content">
                    <h3 className="heading">Code</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.
                    </p>
                    <a href="#">Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="container1">
              <div className="card">
                <img className="face face1" src={m6} alt="" />
                <div className="face face2">
                  <div className="content">
                    <h3 className="heading">Code</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.
                    </p>
                    <a href="#">Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-pagination">{generatePaginationBullets()}</div>
        <div className="swiper-button-next" onClick={goToNextSlide}></div>
        <div className="swiper-button-prev" onClick={goToPrevSlide}></div>
      </div>
    </body>
  );
};

export default Netflix;