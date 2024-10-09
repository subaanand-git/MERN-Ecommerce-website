import React from "react";
import img10 from "./picture/img10.webp";

const Testimonials = () => {
    return(
        <div className="container-fluid" id="testimonials">
            <div className="row">
            <div className="col-lg-4 text-center img11">
            <img src={img10} className="img10 pt-5" alt="img"></img>
            </div>

            <div className="col-lg-4 text-center pt-lg-5 mt-lg-5">
            <h3 style={{fontFamily:"sans-serif",fontWeight:"bold"}}><span className="comma">"</span>Priya Shetty</h3>
            <p className="mt-3">Loved the products immensely. Great quality and durability! Will only purchase from them!
            The product quality is consistently outstanding, exceeding my expectations every time.The ambiance here is always inviting and comfortable.
            Pricing is fair and transparent - definitely value for money.I highly recommend this product. I’m thrilled with the quality and will definitely shop at sai yogi again in the future. Highly recommended!”
            </p>
            </div>

            <div className="col-lg-4 text-center pt-lg-5 mt-lg-5">
            <h3 style={{fontFamily:"sans-serif",fontWeight:"bold"}}><span className="comma">"</span>Meera Sharma</h3>
            <p className="mt-3">They lit up the sky so beautifully! Everything sold here is of great quality, go for them without a doubt.
            I recently purchased a crackers from sai yogi, and I couldn’t be happier with my online shopping experience. Their website was user-friendly, making it easy to find the perfect item.
            The checkout process was smooth, and I received my order promptly. The crackers arrived in excellent condition, exactly as described on their website.   
            </p>
            </div>
            </div>            
        </div>
    );
}

export default Testimonials;
