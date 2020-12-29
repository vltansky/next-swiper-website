import { WithSidebarLayout } from "../layouts/withSidebar";
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

export function SlideCenter({ children }) {
  return (
    <div
      className="mx-auto max-w-4xl flex item-center justify-center flex-col"
      style={{ height: 500 }}
    >
      {children}
    </div>
  );
}
export default function Home() {
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
              <nav className="mb-2 mt-12">
                {menuList.map(({ name, link }) => (
                  <Link key={link} href={link}>
                    <a className="mr-4 font-medium">{name}</a>
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
          <span>Top Notch Features</span>
          <ul>
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
              <li key={index}>
                <svg
                  className="text-primary"
                  width="15"
                  height="15"
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
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
  );
}
