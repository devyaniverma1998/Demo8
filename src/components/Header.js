import "../styles/style.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <>
            {/* Top Header */}
            <div className="container-fluid bg-light pt-3 d-none d-lg-block">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 text-center text-lg-left mb-2 mb-lg-0">
                            <div className="d-inline-flex align-items-center">
                                <p><i className="fa fa-envelope me-2"></i>info@example.com</p>
                                <p className="text-body px-3">|</p>
                                <p><i className="fa fa-phone-alt me-2"></i>+012 345 6789</p>
                            </div>
                        </div>
                        <div className="col-lg-6 text-center text-lg-right">
                            <div className="d-inline-flex align-items-center">
                                <a className="text-primary px-3" href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a className="text-primary px-3" href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a className="text-primary px-3" href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                                <a className="text-primary px-3" href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a className="text-primary ps-3" href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-youtube"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navbar */}
            <div className="container-fluid position-relative nav-bar p-0">
                <div className="container-lg position-relative p-0 px-lg-3" style={{ zIndex: "9" }}>
                    <nav className="navbar navbar-expand-lg bg-light navbar-light shadow-lg py-3 py-lg-0 ps-3 ps-lg-5" style={{justifyContent:"space-between"}}>
                        <Link to="/" className="navbar-brand">
                            <h1 className="m-0 text-primary"><span className="text-dark">TRAVEL</span>ER</h1>
                        </Link>
                        <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end px-3" id="navbarCollapse">
                            <div className="navbar-nav  py-0" > {/* Change ms-auto to me-auto */}
                                <Link to="/" className="nav-item nav-link active">Home</Link>
                                <Link to="/about" className="nav-item nav-link">About</Link>
                                <Link to="/service" className="nav-item nav-link">Services</Link>
                                <Link to="/packages" className="nav-item nav-link">Tour Packages</Link>
                                <Link to="/contact" className="nav-item nav-link">Contact</Link>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
}
