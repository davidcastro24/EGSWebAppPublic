import React from "react";
import { Container, Carousel, Button } from "react-bootstrap";
import styles from "../../styles/homeCar.module.css";
import {useRouter} from "next/router"
  
const HomeCarousel = () => {
  const router = useRouter();

  const handleClick = (url) =>{
    router.push(url);
  }

  return (
    <Container fluid>
      <Carousel fade>
        <Carousel.Item>
          <div className={styles.imgover}>
            <img
              className="d-block w-100 h-50"
              src="/images/cpu.png"
              alt="First slide"
            />
            <div className={styles.overlay}></div>
          </div>
          <Carousel.Caption>
            <h1>Let's Evolve Together: Shaping the Future of Business</h1>
            <p>
              We ensure top-quality solutions, made to satisfy your day to day
              needs. Our goal is to improve every aspect of your business you
              trust us with.
            </p>
            <Button variant="primary" onClick={() => handleClick("services")}>Learn More</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className={styles.imgover}>
            <img
              className="d-block w-100 h-50"
              src="/images/unleash.png"
              alt="Second slide in carousel"
            />
            <div className={styles.overlay}></div>
          </div>
          <Carousel.Caption>
            <h1>Unleash Your Potential</h1>
            <p>
              Join our thriving community of skilled professionals and unlock
              new opportunities to showcase your talents. Take control of your
              career, work remotely, and earn what you truly deserve.
            </p>
            <Button variant="primary">Learn More</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className={styles.imgover}>
            <img
              className="d-block w-100 h-50"
              src="/images/stars.png"
              alt="Third slide in carousel"
            />
            <div className={styles.overlay}></div>
          </div>
          <Carousel.Caption>
            <h1>Evolve Global Solutions</h1>
            <p>
              We're Reaching For the Stars, and Taking You With Us.
            </p>
            <Button variant="primary" href="about-us">Learn About Us</Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default HomeCarousel;
