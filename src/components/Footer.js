import "../styles/style.css";
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <>
            <div className="container-fluid bg-dark text-white-50 py-5 px-sm-3 px-lg-5">
                <div className="row pt-5">
                    <div className="col-lg-3 col-md-6 mb-5">
                        <Link to="/" className="navbar-brand">
                            <h1 className="text-primary"><span className="text-white">TRAVEL</span>ER</h1>
                        </Link>
                        <p>Sed ipsum clita tempor ipsum ipsum amet sit ipsum lorem amet labore rebum lorem ipsum dolor. No sed vero lorem dolor dolor</p>
                        <h6 className="text-white text-uppercase mt-4 mb-3">Follow Us</h6>
                        <div className="d-flex justify-content-start">
                            <a className="btn btn-outline-primary btn-square mr-2" href="https://x.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-outline-primary btn-square mr-2" href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-outline-primary btn-square mr-2" href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                            <a className="btn btn-outline-primary btn-square" href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-5">
                        <h5 className="text-white text-uppercase mb-4">Our Services</h5>
                        <div className="d-flex flex-column justify-content-start">
                            <Link className="text-white-50 mb-2" to="/about"><i className="fa fa-angle-right mr-2"></i>About</Link>
                            <Link className="text-white-50 mb-2" to="/destination"><i className="fa fa-angle-right mr-2"></i>Destination</Link>
                            <Link className="text-white-50 mb-2" to="/service"><i className="fa fa-angle-right mr-2"></i>Services</Link>
                            <Link className="text-white-50 mb-2" to="/packages"><i className="fa fa-angle-right mr-2"></i>Packages</Link>
                            <Link className="text-white-50 mb-2" to="/team"><i className="fa fa-angle-right mr-2"></i>Guides</Link>
                            <Link className="text-white-50 mb-2" to="/testimonial"><i className="fa fa-angle-right mr-2"></i>Testimonial</Link>
                            <Link className="text-white-50" to="/blogs"><i className="fa fa-angle-right mr-2"></i>Blog</Link>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-5">
                        <h5 className="text-white text-uppercase mb-4">Useful Links</h5>
                        <div className="d-flex flex-column justify-content-start">
                            <Link className="text-white-50 mb-2" to="/privacy"><i className="fa fa-angle-right mr-2"></i>Privacy Policy</Link>
                            <Link className="text-white-50 mb-2" to="/terms"><i className="fa fa-angle-right mr-2"></i>Terms & Conditions</Link>
                            <Link className="text-white-50 mb-2" to="/faqs"><i className="fa fa-angle-right mr-2"></i>FAQs</Link>
                            <Link className="text-white-50" to="/support"><i className="fa fa-angle-right mr-2"></i>Support</Link>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-5">
                        <h5 className="text-white text-uppercase mb-4">Contact Us</h5>
                        <p><i className="fa fa-map-marker-alt mr-2"></i>123 Street, New York, USA</p>
                        <p><i className="fa fa-phone-alt mr-2"></i>+012 345 67890</p>
                        <p><i className="fa fa-envelope mr-2"></i>info@example.com</p>
                        <h6 className="text-white text-uppercase mt-4 mb-3">Newsletter</h6>
                        <div className="w-100">
                            <div className="input-group">
                                <input type="email" className="form-control border-light" placeholder="Your Email" />
                                <div className="input-group-append">
                                    <button className="btn btn-primary px-3">Sign Up</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid bg-dark text-white border-top py-4 px-sm-3 px-md-5">
                <div className="row">
                    <div className="col-lg-6 text-center text-md-left mb-3 mb-md-0">
                        <p className="m-0 text-white-50">Copyright &copy; {new Date().getFullYear()}. All Rights Reserved.</p>
                    </div>
                    <div className="col-lg-6 text-center text-md-right">
                        <p className="m-0 text-white-50">Designed by <a href="/" target="_blank" rel="noopener noreferrer"> Dev</a></p>
                    </div>
                </div>
            </div>
        </>
    );
}
