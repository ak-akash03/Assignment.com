import React from "react";
import image from "../../Accets/IMAGE/AboutIMG.png";
import "./About.css";

export default function About() {
  return (
    <>
      <section className="about-us">
        <div className="about maindiv">
          <div className="firstdiv">
          <img src={image} className="pic" />
          </div>
          <div className="text seconddiv">
            <h2>About Us</h2>
            <p>
              We strive to deliver students and academic researchers the best
              writing assist software accessible through web browser. Our
              software not only helps you speed up your assignment and essay
              writing experience, Dr Assignment will help you improve your
              writing quality and academic grades. Our online programs are built
              with a team of professional writers, we understand what is needed
              the most from our users. Our services include streamlined
              assignment writing software, the famous Assignment master used by
              over 500,000 students,, auto essay & assignment generator, auto
              article rewriter, auto bibliography referencing, academic research
              assist software and article shuffler.
            </p>
            <div className="data">
              <a href="#" className="hire">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
