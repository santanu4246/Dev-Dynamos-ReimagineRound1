import React, { useEffect, useRef, useState } from "react";
import "./SwipeComponent.css";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css/bundle";
import { EffectFlip } from "swiper/modules";
import { EffectCreative } from "swiper/modules";
import { EffectCards } from "swiper/modules";
// const AirJordan =
//   "https://res.cloudinary.com/difxhccup/image/upload/v1719988135/Airjordan_ilfd3a.png";
// const Dunk =
//   "https://res.cloudinary.com/difxhccup/image/upload/v1719988135/Dunk_urvlk3.png";
// const Blazer =
//   "https://res.cloudinary.com/difxhccup/image/upload/v1719988135/Blazer_zdxklo.png";

// const AirForce =
//   "https://res.cloudinary.com/difxhccup/image/upload/v1719988134/Airforce_khhfwn.png";

const AirJordan =
  "https://res.cloudinary.com/difxhccup/image/upload/v1720004543/Screenshot_2024-07-03_162533-removebg-preview_re8865.webp";

const Dunk =
  "https://res.cloudinary.com/difxhccup/image/upload/v1720004543/Screenshot_2024-07-03_162232-removebg-preview_k8ouma.webp";

const Blazer =
  "https://res.cloudinary.com/difxhccup/image/upload/v1720005098/Screenshot_2024-07-03_163707-removebg-preview_shujyk.webp";

const AirForce =
  "https://res.cloudinary.com/difxhccup/image/upload/v1720004542/Screenshot_2024-07-03_162118-removebg-preview_zgreqd.webp";


import GrassPlatform from "../../assets/SwipeSectionAsset/GrassPlatform-ezgif.com-gif-to-webp-converter.webp";
import RockyPlatform from "../../assets/SwipeSectionAsset/RockyPlatform-ezgif.com-gif-to-webp-converter.webp";
import ElectroPlatform from "../../assets/SwipeSectionAsset/ezgif.com-gif-to-webp-converter.webp";
import RoadPlatform from "../../assets/SwipeSectionAsset/RoadPlatform-ezgif.com-gif-to-webp-converter.webp";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { SiNike } from "react-icons/si";
import { useExtractColor } from "react-extract-colors";
const airJordanXxxVii3 =
  "https://res.cloudinary.com/difxhccup/image/upload/v1719929199/air-jordan-xxxviii-2_wnwntt-removebg-preview_wewxtn.png";
const airMax2702 =
  "https://res.cloudinary.com/difxhccup/image/upload/v1719929202/air-max-270-6_vvpinf-removebg-preview_nioces.png";
const customPhantomLuna6 =
  "https://res.cloudinary.com/difxhccup/image/upload/v1719929204/custom-phantom-luna-5_zby2ua-removebg-preview_aeucfg.png";
const jordanStadium6 =
  "https://res.cloudinary.com/difxhccup/image/upload/v1719929200/jordan-stadium-3_ezj9hj-removebg-preview_immejp.png";
function handleMovement(e) {
  // let Moveimg = document.querySelectorAll(".SmallIndicatingProduct");
  // Moveimg.forEach((item) => {
  //   const Axis = item.getBoundingClientRect();
  //   const x = (e.clientX - Axis.left) / Axis.width;
  //   const y = (e.clientY - Axis.top) / Axis.height;
  //   const Movex = (x - 0.2) * 20;
  //   const Movey = (y - 0.2) * 20;
  //   item.style.transform = `translate(${Movex}px,${Movey}px)`;
  // });
}

function handleEnter1() {
  let IncreaseDiv1 = document.querySelector(".lengthdiv1");
  // console.log("hey");
  IncreaseDiv1.style.width = "110%";
  IncreaseDiv1.style.height = "110%";
}
function handleLeave1() {
  let IncreaseDiv1 = document.querySelector(".lengthdiv1");
  IncreaseDiv1.style.width = "0%";
  IncreaseDiv1.style.height = "0%";
}
function handleEnter2() {
  let IncreaseDiv2 = document.querySelector(".lengthdiv2");
  // console.log("hey");
  IncreaseDiv2.style.width = "110%";
  IncreaseDiv2.style.height = "110%";
}
function handleLeave2() {
  let IncreaseDiv2 = document.querySelector(".lengthdiv2");
  IncreaseDiv2.style.width = "0%";
  IncreaseDiv2.style.height = "0%";
}

function handleMouseMoveHero() {}

function SwipeComponent() {
  const HeroImage = [AirJordan, Dunk, Blazer, AirForce];

  let i = 0;
  let empty = [];
  for (i = 0; i < HeroImage.length; i++) {
    const { dominantColor, darkerColor, lighterColor } = useExtractColor(
      HeroImage[i]
    );
    empty[i] = dominantColor;
  }

  // const [index, setIndex] = useState(0)

  // let Finalcolor;
  // function HandleForward(){
  //   console.log(index);
  //   console.log(empty);
  //   console.log(empty[index]);

  //    console.log("Empty",empty[index])
  //    console.log("Final",Finalcolor)
  //    if(index===3 || index===-1){

  //     setIndex(0)
  //   }else{
  //   setIndex(previous=>previous+1)
  // }
  //   Finalcolor = empty[index];

  // }

  // function Handlebackward(){
  //   console.log(empty);
  //   if(index<0){
  //     setIndex(4)
  //    }
  //   setIndex(previous=>previous-1)
  //   console.log("Empty",empty[index])
  //    Finalcolor = empty[index];
  //   console.log("Final",Finalcolor)
  // }

  const [innerWidth, setinnerWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setinnerWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.pageX; // X-coordinate of the cursor
      const windowWidth = window.innerWidth; // Width of the window

      const distanceFromCenter = mouseX - windowWidth / 2; // Distance from the center of the window

      // Maximum translation in pixels (adjust as needed)
      const maxTranslation = 500;

      // Calculate translation based on percentage of distance from center
      const translation =
        maxTranslation * (distanceFromCenter / (windowWidth / 2));

      setTranslateX(translation); // Update state to move the element
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const heroBlur = useRef(null);
  const blurContainer = useRef(null);
  useEffect(() => {
    function handleCursorUpdate(event) {
      setPosition({ x: event.clientX, y: event.clientY });
    }
    document.addEventListener("mousemove", handleCursorUpdate);

    return () => {
      document.removeEventListener("mousemove", handleCursorUpdate);
    };
  }, []);

  useEffect(() => {
    if (blurContainer.current && heroBlur.current) {
      const rect = blurContainer.current.getBoundingClientRect();
      const x = position.x;
      const y = position.y;
      if (
        y >= rect.top + 150 &&
        y <= rect.bottom - 100 &&
        x >= rect.left &&
        x <= rect.right
      ) {
        heroBlur.current.style.scale = 1;
        heroBlur.current.style.left = `${x - 180}px`;
        heroBlur.current.style.top = `${y - 250}px`;
      } else {
        heroBlur.current.style.scale = 0;
      }
    }
  }, [position]);

  Swiper.i;
  const NameSlide = document.querySelector(".myswiperv2");
  const PreviousSlidebutton = document.querySelector(".Prev.Btn");
  const NextSlidebutton = document.querySelector(".Next.Btn");
  function HandleName() {
    // console.log(NameSlide);
    // console.log(PreviousSlidebutton);
    // console.log(NextSlidebutton);
  }
  return (
    <>
      <div className="Bg-container" onMouseMove={handleMovement}>
        <div className="NameShoeonSwipe">
          <Swiper
            className="myswiperv2"
            modules={[
              Navigation,
              Pagination,
              Scrollbar,
              A11y,
              Autoplay,
              EffectFlip,
              EffectCreative,
              EffectCards,
            ]}
            navigation={{
              nextEl: ".Next.Btn",
              prevEl: ".Prev.Btn",
            }}
            pagination={true}
            slidesPerView={1}
            loop={true}
            speed={750}
            spaceBetween={0}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide>AirJordan</SwiperSlide>
            <SwiperSlide>Dunk</SwiperSlide>
            <SwiperSlide>Blazer</SwiperSlide>
            {/* <SwiperSlide>AirForce</SwiperSlide> */}
          </Swiper>
        </div>
        <Swiper
          className="my-swiper"
          modules={[
            Navigation,
            Pagination,
            Scrollbar,
            A11y,
            Autoplay,
            EffectFlip,
            EffectCreative,
            EffectCards,
          ]}
          navigation={{
            nextEl: ".Next.Btn",
            prevEl: ".Prev.Btn",
          }}
          // autoplay={{
          //   delay: 4000,
          //   disableOnInteraction: false,
          // }}
          speed={750}
          shortSwipes={true}
          spaceBetween={0}
          centeredSlides={true}
          grabCursor={false}
          loop={true}
          slidesPerView={1}
          //   pagination={{
          //     dynamicBullets: true,
          //     dynamicMainBullets: 1,
          //     clickable: true,
          //   }}
          // effect='cards'
          // cardsEffect={{
          //     perSlideRotate:10,
          //     slideShadows:false
          // }}
          effect="creative"
          creativeEffect={{
            perspective: true,
            prev: {
              translate: ["-100%", "100%", 0],
              rotate: [45, 0, -45],
            },
            next: {
              translate: ["100%", "100%", 0],
              rotate: [-45, 0, 45],
            },
          }}
          onSlideChange={HandleName}
          // onSlideNextTransitionStart={HandleForward}
          // onSlidePrevTransitionStart={Handlebackward}
        >
          <div className="BgText " ref={blurContainer} id="blurContainer">
            <div className="textOnHeroSectionSmall absolute text-[20px] w-[15rem] leading-[100%] text-black right-[20%] top-[70%] font-[500]">
              Unleash Your Potential with Nike: Performance, Style, Innovation,
              and Comfort
            </div>
            {innerWidth > 768 ? (
              <p
                className="relative"
                style={{ backgroundPositionX: `${translateX}px` }}
              >
                Elevate Your Game
                <br />
                with Nike
              </p>
            ) : (
              <p className="text-[23vw] leading-[90%] " id="mobileViewTextYeh">
                Elevate
                <br />
                Your
                <br />
                Game
              </p>
            )}
            <div
              className="heroBlur"
              ref={heroBlur}
              id="blurHero"
              style={{ opacity: innerWidth <= 768 ? "0" : "1" }}
            ></div>
          </div>

          <SwiperSlide className="slider">
            <img
              className="SmallIndicatingProduct"
              src={airJordanXxxVii3}
              alt
            ></img>
            <img
              className="SmallIndicatingProduct"
              src={airJordanXxxVii3}
              alt
            ></img>
            <img
              className="SmallIndicatingProduct"
              src={airJordanXxxVii3}
              alt
            ></img>
            <img
              className="SmallIndicatingProduct"
              src={airJordanXxxVii3}
              alt
            ></img>
            <div className="SwipeDiv">
              <img src={AirJordan} alt="" className="HeroShoe" />
              <img className="PlatformImg" src={RockyPlatform} alt="" /> 
            </div>
          </SwiperSlide>
          <SwiperSlide className="slider">
            <img className="SmallIndicatingProduct" src={airMax2702} alt></img>
            <img className="SmallIndicatingProduct" src={airMax2702} alt></img>
            <img className="SmallIndicatingProduct" src={airMax2702} alt></img>
            <img className="SmallIndicatingProduct" src={airMax2702} alt></img>
            <div className="SwipeDiv">
              <img src={Dunk} alt="" className="HeroShoe" />
              <img className="PlatformImg" src={GrassPlatform} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="slider">
            <img
              className="SmallIndicatingProduct"
              src={customPhantomLuna6}
              alt
            ></img>
            <img
              className="SmallIndicatingProduct"
              src={customPhantomLuna6}
              alt
            ></img>
            <img
              className="SmallIndicatingProduct"
              src={customPhantomLuna6}
              alt
            ></img>
            <img
              className="SmallIndicatingProduct"
              src={customPhantomLuna6}
              alt
            ></img>

            <div className="SwipeDiv">
              <img src={Blazer} alt="" className="HeroShoe" />
              <img className="PlatformImg" src={RoadPlatform} alt="" />
            </div>
          </SwiperSlide>
          {/* <SwiperSlide className="slider">
            <img
              className="SmallIndicatingProduct"
              src={jordanStadium6}
              alt
            ></img>
            <img
              className="SmallIndicatingProduct"
              src={jordanStadium6}
              alt
            ></img>
            <img
              className="SmallIndicatingProduct"
              src={jordanStadium6}
              alt
            ></img>
            <img
              className="SmallIndicatingProduct"
              src={jordanStadium6}
              alt
            ></img>
            <div className="SwipeDiv">
              <img src={AirForce} alt="" className="HeroShoe" />
              <img className="PlatformImg" src={GrassPlatform} alt="" />
            </div>
          </SwiperSlide> */}
          <div
            className="Prev Btn"
            onMouseEnter={handleEnter1}
            onMouseLeave={handleLeave1}
          >
            <div className="lengthdiv1"></div>
            <FaArrowLeftLong className="SlideNavArrow" />
          </div>
          <div
            className="Next Btn"
            onMouseEnter={handleEnter2}
            onMouseLeave={handleLeave2}
          >
            <div className="lengthdiv2"></div>
            <FaArrowRightLong className="SlideNavArrow" />
          </div>
        </Swiper>
      </div>
    </>
  );
}

export default SwipeComponent;
