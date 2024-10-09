import React from "react";

const Contact = () => {
    return(
        <div className="container-fluid bg-dark pb-5">
          <section className="py-5" id="footer">
            <div className="container">
            <div className="row py-5">
            {/* <!--------(Grid-1)--------> */}
            <div className="col-lg-4 col-12">
            <div className="card bg-dark" style={{width: "18rem"}}>
            <div className="card-body">
            <h3 className="card-title" style={{color: "white"}}>Hours</h3>
            </div>
            <ul className="list-group list-group-flush">
            <li className="list-group-item bg-dark h6">Monday - Friday: 9 am - 6 pm</li>
            <li className="list-group-item bg-dark h6">Saturday: 10 am - 4 pm</li>
            <li className="list-group-item bg-dark h6">Sunday: Closed</li>
            </ul>
            </div>
            </div>

            {/* <!--------(Grid-2)--------> */}
            <div className="col-lg-4 col-12">
            <div className="card bg-dark" style={{width: "18rem"}}>
            <div className="card-body">
            <h3 className="card-title bg-dark" style={{color: "white"}}>Contact Info</h3>
            </div>
            <ul className="list-group list-group-flush">
            <li className="list-group-item bg-dark h6"><i class="bi bi-phone pe-3 h5"></i>1-800-124-567</li>
            <li className="list-group-item bg-dark h6"><i class="bi bi-envelope pe-3 h5"></i>info@demolink.org</li>
            <li className="list-group-item bg-dark h6"><i class="bi bi-geo-alt pe-3 h5"></i>22 St.Black Road,Bangalore</li>
            </ul>
            </div>
            </div>

            {/* <!--------(Grid-3)--------> */}
            <div className="col-lg-4 col-12">
            <h3 className="pt-lg-0 pt-3">Sign Up for our Newsletter</h3>
            <nav className="navbar navbar-light bg-dark py-3">
            <div className="container-fluid">
            <form className="d-flex">
            <input className="form-control mx-2" type="search" placeholder="Enter your Email" aria-label="Search"/>
            <button className="btn bg-success" type="submit" id="button">submit</button>
            </form>
            </div>
            </nav>

           {/* <!--------icons-------->   */}
           <h3 className="py-lg-5">Follow Us<i class="bi bi-facebook px-4"></i>
           <i className="bi bi-twitter"></i><i class="bi bi-instagram px-4"></i>
           <i className="bi bi-google"></i></h3>
           </div>
           </div>
           {/* <p className="h6 text-center mt-lg-5">Copyright @2024 All rights reseived | This template is made with by ProWeb</p> */}
           </div>
          </section>        
        </div>
);
}

export default Contact;
