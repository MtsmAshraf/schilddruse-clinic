"use client"
import React, { useEffect, useState } from 'react'
import styles from "./hero.module.css"
import { useTranslations } from 'next-intl'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { PopupButton } from 'react-calendly'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectCoverflow, Navigation, Pagination } from 'swiper/modules'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import pregnantImg from "../../../public/images/pregnant.jpeg"
import fatImg from "../../../public/images/fat.jpeg"
import 'swiper/css';
import "swiper/css/bundle";
import 'swiper/css/navigation'; 
import 'swiper/css/pagination'; 

const Hero = ({
  lo
} : {
  lo: string
}) => {
    const t = useTranslations("HomePage")
   useGSAP(() => {
    gsap.from(".stagger-text", {
        y: 100,
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
     
    // getting root element on the client side
    
    const [rootElement, setRootElement] = useState<HTMLElement>();

    useEffect(() => {
    // Runs only on client
    const el: HTMLElement = document.body;
    if (el) {
        setRootElement(el);
    }
    }, []); 
  return (
    <section className={lo === "ar" ? styles.hero + " " + styles.ar : styles.hero} id='hero'>
        <div className={styles.swiper}>
            <Swiper
                loop
                autoplay={{
                    delay: 7000
                }}
                slidesPerView= {1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                    el: `.heroPagination`
                }}
                modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
                navigation={{
                    nextEl: '.featured-swiper-button-next',
                    prevEl: '.featured-swiper-button-prev'
                }}
                effect='coverflow'
                className='mySwiperProdHero'
                autoHeight={true}
                >
                <SwiperSlide className={styles.slide + " " + styles.main}>
                    <div className="container">
                        <div className={styles.text}>
                            <h2 className='stagger-text'>
                                {
                                    t("Hero.slogan")
                                }
                            </h2>
                            <p className='stagger-text'>
                                {
                                    t("Hero.p1")
                                }
                            </p>
                            <p className='stagger-text'>
                                {
                                    t("Hero.p2")
                                }
                            </p>
                            <div className={styles.btns + " " + "stagger-text"}>
                                <PopupButton
                                    className='book-btn main'
                                    url="https://calendly.com/mo32000a/schilddruse"
                                    /*
                                    * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
                                    * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
                                    */
                                    rootElement={rootElement!}
                                    text={`${t("Hero.btns.b1")}`}
                                />
                            </div>
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
                        {/* <Image src={pregnantImg} alt='Test Image'></Image> */}
                    </div>
                    <div className={styles.overlay}>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                    <div className="container">
                        <div className={styles.text}>
                            <h2 className='stagger-text'>
                                {
                                    t("Hero.slogan")
                                }
                            </h2>
                            <p className='stagger-text'>
                                {
                                    t("Hero.p1")
                                }
                            </p>
                            <p className='stagger-text'>
                                {
                                    t("Hero.p2")
                                }
                            </p>
                            <div className={styles.btns + " " + "stagger-text"}>
                                <PopupButton
                                    className='book-btn main'
                                    url="https://calendly.com/mo32000a/schilddruse"
                                    /*
                                    * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
                                    * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
                                    */
                                    rootElement={rootElement!}
                                    text={`${t("Hero.btns.b1")}`}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={styles.img}>
                        <Image src={pregnantImg} alt='Test Image'></Image>
                    </div>
                    <div className={styles.overlay}>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                    <div className="container">
                        <div className={styles.text}>
                            <h2 className='stagger-text'>
                                {
                                    t("Hero.slogan")
                                }
                            </h2>
                            <p className='stagger-text'>
                                {
                                    t("Hero.p1")
                                }
                            </p>
                            <p className='stagger-text'>
                                {
                                    t("Hero.p2")
                                }
                            </p>
                            <div className={styles.btns + " " + "stagger-text"}>
                                <PopupButton
                                    className='book-btn main'
                                    url="https://calendly.com/mo32000a/schilddruse"
                                    /*
                                    * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
                                    * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
                                    */
                                    rootElement={rootElement!}
                                    text={`${t("Hero.btns.b1")}`}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={styles.img}>
                        <Image src={fatImg} alt='Test Image'></Image>
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