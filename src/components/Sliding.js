import React from "react";
import "./sliding.css";
import "react-multi-carousel/lib/styles.css";
import Footer from "./Footer";
import { Col, Container, Row } from "react-bootstrap";
import img from "../data/wallpaper.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const deviceType = "web";
const Sliding = () => {
  return (
    <div className="cliked">
      <Container>
        <h4 className="photographer">More photographers in Mumbai</h4>

        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={deviceType !== "mobile" ? true : false}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          deviceType={deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          <div>
            <img src={img} alt="not found" />
          </div>
          <div>
            <img src={img} alt="not found" />
          </div>
          <div>
            <img src={img} alt="not found" />
          </div>
          <div>
            <img src={img} alt="not found" />
          </div>
          <div>
            <img src={img} alt="not found" />
          </div>
        </Carousel>
      </Container>
      <Footer />
    </div>
  );
};

export default Sliding;
