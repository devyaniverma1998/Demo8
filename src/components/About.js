import '../styles/style.css'



export default function About(){
    return(
        <div className="container-fluid py-5">
        <div className="container pt-5">
            <div className="row text-start">
                <div className="col-lg-6" >
                    <div className="position-relative h-100">
                        <img className="position-absolute w-100 h-100" src="img/about.jpg"  />
                    </div>
                </div>
                <div className="col-lg-6 pt-5 pb-lg-5 ">
                    <div className="about-text bg-white p-4 p-lg-5 my-lg-5 text-start">
                        <h6 className="text-primary text-uppercase" >About Us</h6>
                        <h1 className="mb-3">We Provide Best Tour Packages In Your Budget</h1>
                        <p>Dolores lorem lorem ipsum sit et ipsum. Sadip sea amet diam dolore sed et. Sit rebum labore sit sit ut vero no sit. Et elitr stet dolor sed sit et sed ipsum et kasd ut. Erat duo eos et erat sed diam duo</p>
                        <div className="row mb-4">
                            <div className="col-6">
                                <img className="img-fluid" src="img/about-1.jpg" 
alt=" not found"/>
                            </div>
                            <div className="col-6">
                                <img className="img-fluid" src="img/about-2.jpg" 
alt=" not found"/>
                            </div>
                        </div>
                        <a href="/" className="btn btn-primary mt-1">Book Now</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}