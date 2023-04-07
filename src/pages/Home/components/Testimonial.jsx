import React from "react";
import "../../../styles/Home/Testimonials.css";
import { testimonialData } from "../../../data/Testimonial";

const Testimonial = () => {
  return (
    <div className="testimonial-container">
      <div className="testimonials-cover">
        {testimonialData.map((data) => (
          <div className="testimonialData">
            <h4>{data.text1}</h4>
            <p>{data.text2}</p>

            <div>
              <img src={data.testifier} alt="" />
              <div>
                <p>{data.name}</p>
                <span>{data.title}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
