import React from "react";
import img2 from "./picture/img2.webp";
import img3 from "./picture/img3.webp";
import img4 from "./picture/img4.webp";
import img5 from "./picture/img5.webp";
import img6 from "./picture/img6.webp";
import img7 from "./picture/img7.webp";
import img8 from "./picture/img8.webp";

const Home = () => {
    return(  
    <div className="content">   
     {/*----- Carousel part -----*/}
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>

          <div className="carousel-inner">
          <div className="carousel-item active">
          <img src={img3} className="d-block w-100" id="carousel-image" alt="img"></img>
          </div>
          <div className="carousel-item">
          <img src={img2} className="d-block w-100" id="carousel-image" alt="img"></img>
          </div>
          <div className="carousel-item">
          <img src={img4} className="d-block w-100" id="carousel-image" alt="img"></img>
          </div>
          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
          </button>
        </div>
 
     {/*----- Types -----*/}   
        <div className="row d-flex">
          <h1 className="text-center my-4" id="types">Types</h1>
          {/*----- img5 -----*/}

          <div className="col-xl-3 col-sm-6 text-center ps-4">
          <div className="card" style={{width: "17rem",border:"none"}}>
          <img src={img5} className="card-img-top" id="card-img-top" alt="img"></img>
          <div className="card-body">
          <h5 className="card-title text-center fs-3">Fountains</h5>
          </div>  
          </div>
          </div>

          {/*----- img6 -----*/} 
          <div className="col-xl-3 col-sm-6 text-center ps-4">
          <div className="card" style={{width: "17rem",border:"none"}}>
          <img src={img6} className="card-img-top" id="card-img-top" alt="img"></img>
          <div className="card-body">
          <h5 className="card-title text-center fs-3">Spinners</h5>
          </div>  
          </div>

          </div>

          {/*----- img7 -----*/} 
          <div className="col-xl-3 col-sm-6 text-center ps-4">
          <div className="card" style={{width: "17rem",border:"none"}}>
          <img src={img7} className="card-img-top" id="card-img-top" alt="img"></img>
          <div className="card-body">
          <h5 className="card-title text-center fs-3">Sparklers</h5>
          </div>  
          </div>
          </div>

          {/*----- img8 -----*/} 
          <div className="col-xl-3 col-sm-6 text-center ps-4">
          <div className="card" style={{width: "17rem",border:"none"}}>
          <img src={img8} className="card-img-top" id="card-img-top"alt="img"></img>
          <div className="card-body">
          <h5 className="card-title text-center fs-3">Smoke Bombs</h5>
          </div>  
          </div>
          </div>
        </div>
    </div>  
 );
}

export default Home;
