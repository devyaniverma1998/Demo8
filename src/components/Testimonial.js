
import '../styles/style.css';
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '@fortawesome/fontawesome-free/css/all.min.css';



export default function Testimonial() {
    const settings = {
        dots: false,  // Disable dots for brand logos
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Number of brands visible at once
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,  // Hide arrows for a clean look
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
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
        <div class="container-fluid py-5">
            <div class="container py-5">
                <div class="text-center mb-3 pb-3">
                    <h6 class="text-primary text-uppercase" >Testimonial</h6>
                    <h1>What Say Our Clients</h1>
                </div>
                <div class="owl-carousel testimonial-carousel">
                    <Slider {...settings} className='sliderrr'>
                        <div class="text-center pb-4">
                            <img class="img-fluid mx-auto" src="img/testimonial-1.jpg" style={{ width: "100px" }} />
                            <div class="testimonial-text bg-white p-4 mt-n5">
                                <p class="mt-5">Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
                                </p>
                                <h5 class="text-truncate">Client Name</h5>
                                <span>Profession</span>
                            </div>
                        </div>
                        <div class="text-center">
                            <img class="img-fluid mx-auto" src="img/testimonial-2.jpg" style={{ width: "100px" }} />
                            <div class="testimonial-text bg-white p-4 mt-n5">
                                <p class="mt-5">Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
                                </p>
                                <h5 class="text-truncate">Client Name</h5>
                                <span>Profession</span>
                            </div>
                        </div>
                        <div class="text-center">
                            <img class="img-fluid mx-auto" src="img/testimonial-3.jpg" style={{ width: "100px" }} />
                            <div class="testimonial-text bg-white p-4 mt-n5">
                                <p class="mt-5">Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
                                </p>
                                <h5 class="text-truncate">Client Name</h5>
                                <span>Profession</span>
                            </div>
                        </div>
                        <div class="text-center">
                            <img class="img-fluid mx-auto" src="img/testimonial-4.jpg" style={{ width: "100px" }} />
                            <div class="testimonial-text bg-white p-4 mt-n5">
                                <p class="mt-5">Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
                                </p>
                                <h5 class="text-truncate">Client Name</h5>
                                <span>Profession</span>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}