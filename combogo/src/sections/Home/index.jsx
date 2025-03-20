import styles from "./styles.module.css";
import { useState, useEffect } from "react";
import Slide1 from "../../assets/slide1.png";
import Slide2 from "../../assets/slide2.png";
import Slide3 from "../../assets/slide3.png";
import Slide4 from "../../assets/slide4.png";
import Capa from "../../assets/capa2.png";

import { Scroll } from "phosphor-react";

export function Home() {
    const [slide, setSlide] = useState(0);

    useEffect(() => {
        const intervalo = setInterval(() => {
            setSlide((prevSlide) => (prevSlide < 300 ? prevSlide + 100 : 0));
        }, 5000);

        return () => clearInterval(intervalo);
    }, []);

    

    return (
        <section className={styles.container} id="home">
            <div className={styles.slideContainer}>
                <div className={styles.slider} style={{transform: `translateX(-${slide}%)`}}>
                    <img src={Slide1} alt="" style={{ backgroundColor: "blue" }} />
                    <img src={Slide2} alt="" style={{ backgroundColor: "red" }}/>
                    <img src={Slide3} alt="" style={{ backgroundColor: "yellow" }}/>
                    <img src={Slide4} alt="" style={{ backgroundColor: "green" }}/>
                </div>
            </div>

            <img src={Capa} alt="logo" className={styles.logo} />

            {/* <svg className={styles.seta} xmlns="http://www.w3.org/2000/svg" width="57" height="57" viewBox="0 0 57 57" fill="none">
                <circle cx="28.5" cy="28.5" r="28.5" fill="#5D5D5D" fill-opacity="0.3"/>
                <path d="M30.5 15C30.5 14.1716 29.8284 13.5 29 13.5C28.1716 13.5 27.5 14.1716 27.5 15L30.5 15ZM27.9393 44.0607C28.5251 44.6464 29.4749 44.6464 30.0607 44.0607L39.6066 34.5147C40.1924 33.9289 40.1924 32.9792 39.6066 32.3934C39.0208 31.8076 38.0711 31.8076 37.4853 32.3934L29 40.8787L20.5147 32.3934C19.9289 31.8076 18.9792 31.8076 18.3934 32.3934C17.8076 32.9792 17.8076 33.9289 18.3934 34.5147L27.9393 44.0607ZM27.5 15L27.5 43L30.5 43L30.5 15L27.5 15Z" fill="white"/>
            </svg> */}

          <a href="#sobre" className={styles.btn}>
            <div className={styles.scroll}> </div>
          </a>

            
        </section>
    );
}