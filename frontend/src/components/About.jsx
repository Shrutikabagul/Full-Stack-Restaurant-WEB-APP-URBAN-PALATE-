import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
           <p>Welcome to Urban Palate, where we blend culinary passion with exquisite taste.</p>  
           <p>Located in the heart of Pune City, Urban Palate offers a unique dining experience featuring a diverse menu that caters to all tastes and dietary preferences</p> 
           <p>Our talented chefs create flavorful and beautifully presented dishes from the freshest  locally-sourced ingredients </p>
           <p> With a warm ambiance and stylish yet comfortable interior, Urban Palate is perfect for any occasion.</p> 
           <p>Our dedicated team ensures that every visit is memorable with friendly service and attention to detail. 
            Join us at Urban Palate and discover why we're a favorite dining destination in Pune.</p>
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;