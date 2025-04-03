
import '../styles/style.css';
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '@fortawesome/fontawesome-free/css/all.min.css';






export default function Carousel() {
    const settings = {
        dots: false,  // Disable dots for brand logos
        infinite: true,
        speed: 500,
        slidesToShow: 1, // Number of brands visible at once
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,  // Hide arrows for a clean look
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    return (
        <>
            <div className="container-fluid p-0">
                <div id="header-carousel" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <Slider {...settings}>
                            <div className="carousel-item active">
                                <img className="w-100" src="img/carousel-1.jpg" alt="not found" />
                                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                    <div className="p-3" style={{ width: "900px" }}>
                                        <h4 className="text-white text-uppercase mb-md-3">Tours & Travel</h4>
                                        <h1 className="display-3 text-white mb-md-4">Let's Discover The World Together</h1>
                                        <a href="/" className="btn btn-primary py-md-3 px-md-5 mt-2">Book Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="w-100" src="img/carousel-2.jpg" alt="not found" />
                                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                    <div className="p-3" style={{ width: "900px" }}>
                                        <h4 className="text-white text-uppercase mb-md-3">Tours & Travel</h4>
                                        <h1 className="display-3 text-white mb-md-4">Discover Amazing Places With Us</h1>
                                        <a href="/" className="btn btn-primary py-md-3 px-md-5 mt-2">Book Now</a>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                    <a className="carousel-control-prev" href="#header-carousel" data-slide="prev">
                        <div className="btn btn-dark" style={{ width: "45px", height: "45px" }}>
                            <span className="carousel-control-prev-icon mb-n2"></span>
                        </div>
                    </a>
                    <a className="carousel-control-next" href="#header-carousel" data-slide="next">
                        <div className="btn btn-dark" style={{ width: "45px", height: "45px" }}>
                            <span className="carousel-control-next-icon mb-n2"></span>
                        </div>
                    </a>
                </div>
            </div>

        </>
    )
}