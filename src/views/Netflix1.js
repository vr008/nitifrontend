import React, { useEffect } from 'react';
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

const Netflix1 = () => {
  useEffect(() => {
    const swiper = new Swiper('.swiper-container', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
      },
    });

    
  }, []);

  const handlePrev = () => {
    const swiper = document.querySelector('.swiper-container').swiper;
    swiper.slidePrev();
  };

  const handleNext = () => {
    const swiper = document.querySelector('.swiper-container').swiper;
    swiper.slideNext();
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

      <div className="container1">
        <div className="swiper-container">
          <div className="swiper-wrapper">
          <div className="swiper-slide">
              <div className="card">
                <img className="face face1" src={m1} alt="" />
                <h3 className="heading">Code</h3>
                <div className="face face2">
                  <div className="content">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.
                    </p>
                    <a href="#">Read More</a>
                  </div>
                </div>
              
            </div>

          
              <div className="card">
                <img className="face face1" src={m2} alt="" />
                <h3 className="heading">Code</h3>
                <div className="face face2">
                  <div className="content">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.
                    </p>
                    <a href="#">Read More</a>
                  </div>
                </div>
              </div>
            

           
              <div className="card">
                <img className="face face1" src={m3} alt="" />
                <h3 className="heading">Code</h3>
                <div className="face face2">
                  <div className="content">
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
     
        <div className="swiper-container">
          <div className="swiper-wrapper">
            
              <div className="card">
                <img className="face face1" src={m1} alt="" />
                <h3 className="heading">Code</h3>
                <div className="face face2">
                  <div className="content">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.
                    </p>
                    <a href="#">Read More</a>
                  </div>
                </div>
              
            </div>

          
              <div className="card">
                <img className="face face1" src={m2} alt="" />
                <h3 className="heading">Code</h3>
                <div className="face face2">
                  <div className="content">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.
                    </p>
                    <a href="#">Read More</a>
                  </div>
                </div>
              </div>
            

           
              <div className="card">
                <img className="face face1" src={m3} alt="" />
                <h3 className="heading">Code</h3>
                <div className="face face2">
                  <div className="content">
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
          <div className="swiper-button-next swiper-navBtn" onClick={handleNext}></div>
          <div className="swiper-button-prev swiper-navBtn" onClick={handlePrev}></div>
          <div className="swiper-pagination"></div>
        
      </body>
    
  );
};

export default Netflix1;
