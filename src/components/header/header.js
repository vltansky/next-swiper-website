import s from "./header.module.css";
import menuList from "../menu-list";
import Link from "next/link";

const menu = menuList.map(({ name, link }) => {
  return (
    <Link key={link} href={link}>
      <a className="mr-2">{name}</a>
    </Link>
  );
});
export default function Header() {
  return (
    <header className="bg-white border-b-8 py-6 border-primary">
      <div className="max-w-5xl mx-auto flex">
        <img
          className={`rounded-full ${s.logo}`}
          width="134"
          src="/images/logo.svg"
          alt="Swiper"
        />
        <div className="ml-5">
          <div className="text-5xl font-bold text-primary">
            Swiper
            <span className={`text-xs text-black ml-2 font-medium ${s.super}`}>
              v6.4.5
            </span>
          </div>
          <div className="text-3xl my-2 font-bold">
            Most Modern Mobile Touch Slider
          </div>
          <nav className="mt-2">{menu}</nav>
          <div className="github-buttons"></div>
        </div>
      </div>
    </header>
  );
}
