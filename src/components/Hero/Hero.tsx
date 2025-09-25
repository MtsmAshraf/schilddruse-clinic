"use client"
import React from 'react'
import styles from "./hero.module.css"
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import pregnantImg from "../../../public/images/pregnant.webp"
import fatImg from "../../../public/images/fat.webp"
import bigNeckImg from "../../../public/images/big-neck-2.webp"
import butterFlies from "../../../public/images/slide-inner-2.webp"
import innerImg from "../../../public/images/thyroid-nodules.webp"
import oldImg from "../../../public/images/slide-old.webp"
import thyroid from "../../../public/images/slide-thyroid.webp"
import childrenImg from "../../../public/images/children-blog.jpeg"

import 'swiper/css';
import "swiper/css/bundle";
import 'swiper/css/navigation'; 
import 'swiper/css/pagination'; 

const Hero = ({
  lo
} : {
  lo: string
}) => {
   useGSAP(() => {
    gsap.from(".stagger-text", {
        y: 70,
        opacity: 0,
        // ease: "circ",
        duration: 0.8, 
        delay: 0.4,
        // stagger: 0.1 // this means the delat betweem the staggered elememts is 0.1
        stagger: {
            amount: 0.3,
            grid: [1,1],
            axis: "y",
            // ease: "circ.inOut",
            // from: "random"
        }
    })
    gsap.from("#hero-img", {
        x: -100,
        opacity: 0,
        filter: "blur(20px)",
        // ease: "circ",
        duration: 0.6,
        delay: 0.6
    })
     }, [])

  return (
    <section className={lo === "ar" ? styles.hero + " " + styles.ar : styles.hero} id='hero'>
        <div className={styles.swiper}>
            <Swiper
                loop
                autoplay={{
                    delay: 10000
                }}
                slidesPerView= {1}
                spaceBetween={0}
                pagination={{
                    clickable: true,
                    el: `.heroPagination`
                }}
                modules={[Navigation, Pagination, Autoplay]}
                navigation={{
                    nextEl: '.featured-swiper-button-next',
                    prevEl: '.featured-swiper-button-prev'
                }}
                effect='slide'
                className='mySwiperProdHero'
                autoHeight={true}
                >
                <SwiperSlide className={styles.slide + " " + styles.main}>
                    <div className="container">
                        <div className={styles.text}>
                            <h2 className='stagger-text'>
                                Schilddrüsen-ordination
                            </h2>
                            <p className='stagger-text'>
                                Dr.in med.univ. Fairoz Mohammed
                            </p>
                            <h4 className='stagger-text'>
                                Fachärztin für Nuklearmedizin und Schilddrüse <br />
                                (Nuclear Medicine and Thyroid specialist)
                            </h4>
                        </div>
                    </div>
                    <div className={styles.img}>
                        <video 
                            loop
                            muted
                            playsInline
                            autoPlay 
                        >
                            <source src="/butterfly.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className={styles.overlay}>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                        <div className={styles.text}>
                            <h2 className='stagger-text'>
                                Schilddrüse bei Kinderwunsch, während der Schwanger-schaft und nach der Geburt
                            </h2>
                        </div>
                    <div className={styles.img}>
                        <Image src={pregnantImg} alt='Schilddrüse bei Kinderwunsch, während der Schwanger-schaft und nach der Geburt Image'></Image>
                    </div>
                    <div className={styles.overlay}>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                        <div className={styles.text}>
                            <h2>
                                childdrüse und Veränderungen von Gewicht und Stimmung
                            </h2>
                        </div>
                    <div className={styles.img}>
                        <Image src={fatImg} alt='childdrüse und Veränderungen von Gewicht und Stimmung Image'></Image>
                    </div>
                    <div className={styles.overlay}>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                        <div className={styles.text}>
                            <h2>
                                Halsschmerzen und Schilddrüsenhor-monstörungen
                            </h2>
                        </div>
                    <div className={styles.img}>
                        <Image src={bigNeckImg} alt='Halsschmerzen und Schilddrüsenhor-monstörungen Image'></Image>
                    </div>
                    <div className={styles.overlay}>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                        <div className={styles.text}>
                            <h2>
                                Besprechung und Erklärung von Schilddrüsen-Labortests
                            </h2>
                        </div>
                    <div className={styles.img}>
                        <Image src={butterFlies} alt='Besprechung und Erklärung von Schilddrüsen-Labortests Image'></Image>
                    </div>
                    <div className={styles.overlay}>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                        <div className={styles.text}>
                            <h2>
                                Abklärung von Schilddrüsen-knoten
                            </h2>
                        </div>
                    <div className={styles.img}>
                        <Image src={innerImg} alt='Abklärung von Schilddrüsen-knoten Image'></Image>
                    </div>
                    <div className={styles.overlay}>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                        <div className={styles.text}>
                            <h2>
                                Konsultation vor und nach einer Schilddrüsen-operation
                            </h2>
                        </div>
                    <div className={styles.img}>
                        <Image src={oldImg} alt='Konsultation vor und nach einer Schilddrüsen-operation Image'></Image>
                    </div>
                    <div className={styles.overlay}>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                        <div className={styles.text}>
                            <h2>
                                Feinnadelbiopsie bei Bedarf
                            </h2>
                        </div>
                    <div className={styles.img}>
                        <Image src={thyroid} alt='Feinnadelbiopsie bei Bedarf Image'></Image>
                    </div>
                    <div className={styles.overlay}>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                        <div className={styles.text}>
                            <h2>
                                Schilddrüsenerkrankungen bei Kindern
                            </h2>
                        </div>
                    <div className={styles.img}>
                        <Image src={childrenImg} alt='Schilddrüsenerkrankungen bei Kindern Image'></Image>
                    </div>
                    <div className={styles.overlay}>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className={styles.heroPagination}>
                <div className={`heroPagination`}></div>
            </div>
            <button className='featured-swiper-button-prev'>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button className='featured-swiper-button-next'>
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
        </div>
    </section>
  )
}

export default Hero