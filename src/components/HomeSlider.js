import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Swiper, {
  Navigation,
  Pagination,
  A11y,
  Keyboard,
  EffectCoverflow,
  Controller,
  Lazy,
} from "swiper";
import menuList from "src/shared/menu-list";
import GithubStats from "@/components/GithubStats";
import { ReactComponent as Logo } from "@/img/logo.svg";

Swiper.use([
  Navigation,
  Pagination,
  A11y,
  Keyboard,
  EffectCoverflow,
  Controller,
  Lazy,
]);

import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/a11y/a11y.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/thumbs/thumbs.min.css";

function SlideCenter({ children, className, bgColor = "white" }) {
  return (
    <div className={`bg-${bgColor}`}>
      <div
        className={`mx-auto max-w-4xl flex justify-center flex-col ${className}`}
        style={{ height: 500 }}
      >
        {children}
      </div>
    </div>
  );
}

export default function HomeSlider() {
  const swiperFront = useRef(null);
  const galleryTopSwiper = useRef(null);
  const galleryThumbsSwiper = useRef(null);

  const createSwipers = () => {
    swiperFront.current = new Swiper(".header-swiper-front", {
      slidesPerView: "auto",
      centeredSlides: true,
      spaceBetween: 100,
      effect: "coverflow",
      speed: 600,
      coverflowEffect: {
        slideShadows: true,
      },
      pagination: {
        el: ".header-swiper-front .swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".header-swiper-front .swiper-button-next",
        prevEl: ".header-swiper-front .swiper-button-prev",
      },
      keyboard: true,
      a11y: true,
      on: {
        slideChange: function (s) {
          if (s.activeIndex === 2) {
            s.el.querySelector(".swiper-pagination").style.display = "none";
          } else {
            s.el.querySelector(".swiper-pagination").style.display = "";
          }
        },
      },
    });
    galleryTopSwiper.current = new Swiper(".swiper-gallery-top", {
      slidesPerView: 1,
      spaceBetween: 10,
      nested: true,
      resistanceRatio: 0,
      preloadImages: false,
      lazy: true,
    });
    galleryThumbsSwiper.current = new Swiper(".swiper-gallery-thumbs", {
      slidesPerView: 5,
      spaceBetween: 10,
      centeredSlides: true,
      touchRatio: 0.2,
      slideToClickedSlide: true,
      nested: true,
      resistanceRatio: 0,
    });
    galleryTopSwiper.current.controller.control = galleryThumbsSwiper.current;
    galleryThumbsSwiper.current.controller.control = galleryTopSwiper.current;
  };

  const destroySwipers = () => {
    if (swiperFront.current) swiperFront.current.destroy();
    if (galleryTopSwiper.current) galleryTopSwiper.current.destroy();
    if (galleryThumbsSwiper.current) galleryThumbsSwiper.current.destroy();
  };

  useEffect(() => {
    createSwipers();
    return () => destroySwipers();
  });
  return (
    <div
      className="swiper-container header-swiper-front"
      style={{ "--swiper-theme-color": "#6332f6" }}
    >
      <div className="swiper-pagination" />
      <div className="swiper-button-next" />
      <div className="swiper-button-prev" />
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <SlideCenter>
            <div className="inline-flex">
              <Logo
                className="swiper_logo rounded-full flex-shrink-0"
                width="180"
                height="180"
                alt="Swiper"
              />

              <div className="ml-10">
                <div className="text-6xl font-bold text-primary">Swiper</div>
                <div className="text-5xl my-2 font-bold">
                  The Most Modern Mobile Touch Slider
                </div>
                <nav className="mb-2 mt-12 space-x-4 font-medium">
                  {menuList.map(({ name, link }) => (
                    <Link key={link} href={link}>
                      <a>{name}</a>
                    </Link>
                  ))}
                </nav>
                <div className="text-gray-700 mb-5 mt-3">
                  MIT Licensed, v6.4.5 released on December 18, 2020 |
                  <span> </span>
                  <a
                    href="https://github.com/nolimits4web/swiper/blob/master/CHANGELOG.md"
                    target="_blank"
                  >
                    Changelog
                  </a>{" "}
                  !TODO!
                </div>
                <GithubStats />
              </div>
            </div>
          </SlideCenter>
        </div>
        <div className="swiper-slide">
          <SlideCenter>
            <span className="text-5xl font-bold mb-16">Top Notch Features</span>
            <ul className="flex flex-wrap text-lg text-black font-medium">
              {[
                "Library Agnostic",
                "Mutation Observer",
                "Flexbox Layout",
                "Full True RTL Support",
                "Multi Row Slides Layout",
                "3D Effects",
                "Two-wayControl",
                "Full Navigation Control",
                "Rich API",
                "Most FlexibleSlides Layout Grid",
                "Parallax Transitions",
                "Images Lazy Loading",
                "Virtual Slides",
                "And many more ...",
              ].map((text, index) => (
                <li key={index} className="w-1/2 flex items-center my-1">
                  <svg
                    className="text-primary mr-2"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {text}
                </li>
              ))}
              <li></li>
            </ul>
          </SlideCenter>
        </div>
        <div className="swiper-slide swiper-slide-gallery">
          <SlideCenter bgColor="black" className="text-white">
            <span className="text-5xl font-bold">
              Build Complex Touch Galleries
            </span>
            <div
              className="swiper-container swiper-gallery-top"
              style={{ height: "64%", width: "100%" }}
            >
              <div className="swiper-wrapper">
                {Array.from({ length: 5 }).map((el, index) => (
                  <div
                    key={index}
                    data-background={`images/demos/nature-${index + 1}.jpg`}
                    className="swiper-slide swiper-lazy"
                  >
                    <div className="swiper-lazy-preloader"></div>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="swiper-container swiper-gallery-thumbs"
              style={{ height: "20%", width: "100%" }}
            >
              <div className="swiper-wrapper">
                {Array.from({ length: 5 }).map((el, index) => (
                  <div
                    key={index}
                    style={{
                      backgroundImage: `url(images/demos/nature-${
                        index + 1
                      }.jpg)`,
                    }}
                    className="swiper-slide"
                  />
                ))}
              </div>
            </div>
          </SlideCenter>
        </div>
        <div className="swiper-slide">
          <SlideCenter className="items-center">
            <span className="text-5xl font-bold">Start Using It Now</span>
          </SlideCenter>
        </div>
      </div>
    </div>
  );
}