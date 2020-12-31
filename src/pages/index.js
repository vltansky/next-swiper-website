import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  A11y,
  Keyboard,
  EffectCoverflow,
  Thumbs,
  Lazy,
} from "swiper";
import { ReactComponent as Logo } from "@/img/logo.svg";
import menuList from "@/components/menu-list";
import GithubStats from "@/components/gh-stats";
import Link from "next/link";

SwiperCore.use([
  Navigation,
  Pagination,
  A11y,
  Keyboard,
  EffectCoverflow,
  Thumbs,
  Lazy,
]);

import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/a11y/a11y.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/thumbs/thumbs.min.css";
import Carbon from "@/components/carbon";

export function SlideCenter({ children, className, bgColor = "white" }) {
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

const headerSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);
  return (
    <Swiper
      navigation
      pagination
      slidesPerView="auto"
      centeredSlides
      spaceBetween={100}
      effect="coverflow"
      speed={600}
      coverflowEffect={{ slideShadows: true }}
      keyboard
      a11y
      // initialSlide={2}
      onSlideChange={(s) => {
        // if (s.activeIndex === $(".swiper-slide-gallery").index()) {
        //   $(s.el).find(".swiper-pagination").hide();
        // } else {
        //   $(s.el).find(".swiper-pagination").show();
        // }
      }}
    >
      <SwiperSlide>
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
      </SwiperSlide>
      <SwiperSlide>
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
      </SwiperSlide>
      <SwiperSlide>
        <SlideCenter bgColor="black" className="text-white">
          <span className="text-5xl font-bold">
            Build Complex Touch Galleries
          </span>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            thumbs={{ swiper: thumbsSwiper }}
            // onSwiper={setFirstSwiper}
            // controller={{ control: secondSwiper }}
            nested
            resistanceRatio={0}
            preloadImages={false}
            lazy
          >
            {Array.from({ length: 5 }).map((el, index) => (
              <SwiperSlide
                key={index}
                data-background={`images/demos/images/nature-${index}.jpg`}
                className="swiper-lazy"
              >
                <div className="swiper-lazy-preloader"></div>
                ts
              </SwiperSlide>
            ))}
          </Swiper>

          <Swiper
            slidesPerView={5}
            onSwiper={setThumbsSwiper}
            // onSwiper={setSecondSwiper}
            // controller={{ control: firstSwiper }}
            spaceBetween={10}
            centeredSlides
            touchRatio={0.2}
            slideToClickedSlide
            nested
            resistanceRatio={0}
          >
            <SwiperSlide></SwiperSlide>
          </Swiper>
        </SlideCenter>
      </SwiperSlide>
      <SwiperSlide>
        <SlideCenter className="items-center">
          <span className="text-5xl font-bold">Start Using It Now</span>
        </SlideCenter>
      </SwiperSlide>
    </Swiper>
  );
};

const feats = [
  {
    title: "Library Agnostic",
    descr: `Swiper doesn't require any JavaScript libraries like jQuery, which makes Swiper much smaller and faster. It can be safely used with libraries such as jQuery, Zepto, jQuery Mobile, etc.`,
  },
  {
    title: "1:1 Touch movement",
    descr: `By default, Swiper provides 1:1 touch movement interaction, but this ratio can be configured through Swiper settings`,
  },
  {
    title: "Mutation Observer",
    descr: `Swiper has an option to enable Mutation Observer, with this feature Swiper will be automatically reinitialized and recalculate all required parameters if you make dynamic changes to the DOM, or in Swiper styles itself`,
  },
  {
    title: "Rich API",
    descr: `Swiper comes with a very rich API. It allows creating your own pagination, navigation buttons, parallax effects and many more`,
  },
  {
    title: "Full True RTL Support",
    descr: `Swiper is the only slider that provides 100% RTL support with correct layout`,
  },
  {
    title: "Multi Row Slides Layout",
    descr: `Swiper allows a multiple row slides layout, with a few slides per column`,
  },
  {
    title: "Transition Effects",
    descr: `There are 3 new transition effects in addition to the usual Slide: Fade, 3D Cube and 3D Coverflow`,
  },
  {
    title: "Two-way Control",
    descr: `Now Swiper may be used as controller for any number of other Swipers, and even be controlled at the same time`,
  },
  {
    title: "Full Navigation Control",
    descr: `Swiper comes with all required built-in navigation elements, such as Pagination, Navigation arrows and Scrollbar`,
  },
  {
    title: "Flexbox Layout",
    descr: `Swiper uses modern flexbox layout for slides layout, which solves a lot of problems and time with size caclulations. Such layout also allows configuring the Slides grid using pure CSS`,
  },
  {
    title: "Most Flexible Slides Layout Grid",
    descr: `Swiper has a lot of parameters on initialization to make it as flexible as possible. You can control slides per view, per column, per group, space between slides, and many more`,
  },
  {
    title: "Parallax Transitions",
    descr: `Swiper supports modern parallax transition effects that can be used on any element inside of Swiper: images, text blocks, headings, backgrounds, etc.`,
  },
  {
    title: "Images Lazy Loading",
    descr: `Swiper Lazy Loading delays loading of images in inactive/invisible slides until the user swipes to them. Such feature could make the page load faster and improve Swiper performance`,
  },
  {
    title: "Virtual Slides",
    descr: `Swiper comes with Virtual Slides feature that is great when you have a lot of slides or content-heavy/image-heavy slides so it will keep just the required amount of slides in DOM`,
  },
  {
    title: "And many more ...",
    descr: `All Swiper well-known features are also here: Responsive, Scroll prevention, Resistant bounds, Autoplay, Loop mode, Nested Swipers`,
  },
];

const logos = [
  {
    src: "images/logo-adobe.jpg",
    title: "Adobe",
  },
  {
    src: "images/logo-cisco.jpg",
    title: "Cisco",
  },
  {
    src: "images/logo-alexa.jpg",
    title: "Alexa",
  },
  {
    src: "images/logo-bmw.jpg",
    title: "BMW",
  },
  {
    src: "images/logo-disney.jpg",
    title: "Disney",
  },
  {
    src: "images/logo-peugeot.jpg",
    title: "Peugeot",
  },
  {
    src: "images/logo-verizon.jpg",
    title: "Verizon",
  },
  {
    src: "images/logo-macrumors.jpg",
    title: "MacRumors",
  },
  {
    src: "images/logo-lacoste.jpg",
    title: "Lacoste",
  },
  {
    src: "images/logo-vodafone.jpg",
    title: "Vodafone",
  },
];

export function HomeHeading({ children }) {
  return <h2 className="text-5xl text-center font-bold mb-12">{children}</h2>;
}
export default function Home() {
  return (
    <>
      {headerSlider()}
      <div className="bg-primary h-36 mb-20">
        <Carbon />
      </div>
      <div className="mx-auto max-w-6xl text-lg">
        <div className="flex flex-col space-y-5">
          <h1 className="text-5xl font-bold mb-6">Swiper</h1>
          <p>
            Swiper is the most modern free mobile touch slider with hardware
            accelerated transitions and amazing native behavior. It is intended
            to be used in mobile websites, mobile web apps, and mobile
            native/hybrid apps.
          </p>
          <p>
            Swiper is not compatible with all platforms,{" "}
            <b>
              it is a modern touch slider which is focused only on modern
              apps/platforms to bring the best experience and simplicity
            </b>
            .
          </p>
          <p className="mb-2">
            Swiper, along with other great components, is a part of{" "}
            <a href="//framework7.io">Framework7</a> - a fully-featured
            framework for building iOS &amp; Android apps. Swiper is also a
            default slider component in the{" "}
            <a href="http://ionicframework.com/" target="blank">
              Ionic Framework
            </a>
            .
          </p>
        </div>
        <div className="mt-24">
          <HomeHeading>Powered With Top Notch Features</HomeHeading>
          <ul className="grid grid-cols-3 gap-x-6 gap-y-8 text-md">
            {feats.map(({ title, descr }) => (
              <li key={title}>
                <h3 className="font-bold text-2xl mb-4">{title}</h3>
                {descr}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-24">
          <HomeHeading>Used By Thousands</HomeHeading>
          <div className="grid grid-cols-5 gap-x-6 gap-y-8">
            {logos.map(({ src, title }) => (
              <div key={title}>
                <img src={src} alt={title} title={title} />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-24 text-center mb-20">
          <HomeHeading>And It Is Free</HomeHeading>
          <div className="my-4">
            Swiper is completely free and open-source (MIT Licensed)
          </div>

          <nav className="font-bold space-x-2 text-lg font-normal">
            {menuList.map(({ name, link }) => (
              <Link key={link} href={link}>
                <a className="bg-primary rounded-3xl text-white shadow-lg hover:no-underline hover:bg-opacity-95 duration-200 inline-block w-48 px-4 py-2 my-2">
                  {name}
                </a>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
