import '../styles/style.css'



export default function Feature(){
    return(
        <div className="container-fluid pb-5">
        <div className="container pb-5">
            <div className="row">
                <div className="col-md-4">
                    <div className="d-flex mb-4 mb-lg-0 text-start">
                        <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-primary mr-3" style={{width: "100px"}}>
                            <i className="fa fa-2x fa-money-check-alt text-white"></i>
                        </div>
                        <div className="d-flex flex-column">
                            <h5 className="">Competitive Pricing</h5>
                            <p className="m-0">Magna sit magna dolor duo dolor labore rebum amet elitr est diam sea</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="d-flex mb-4 mb-lg-0 text-start"  >
                        <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-primary mr-3" style={{width: "100px"}}>
                            <i className="fa fa-2x fa-award text-white"></i>
                        </div>
                        <div className="d-flex flex-column">
                            <h5 className="">Best Services</h5>
                            <p className="m-0">Magna sit magna dolor duo dolor labore rebum amet elitr est diam sea</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="d-flex mb-4 mb-lg-0 text-start">
                        <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-primary mr-3" style={{width: "100px"}}>
                            <i className="fa fa-2x fa-globe text-white"></i>
                        </div>
                        <div className="d-flex flex-column">
                            <h5 className="">Worldwide Coverage</h5>
                            <p className="m-0">Magna sit magna dolor duo dolor labore rebum amet elitr est diam sea</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}