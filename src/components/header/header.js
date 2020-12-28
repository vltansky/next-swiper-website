import s from "./header.module.css";
import menuList from "../menu-list";
import GithubStats from "../gh-stats";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white border-b-8 py-6 border-primary">
      <div className="max-w-5xl mx-auto flex">
        <Link href="/">
          <a>
            <img
              className={`rounded-full ${s.logo}`}
              width="134"
              src="/images/logo.svg"
              alt="Swiper"
            />
          </a>
        </Link>
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
          <nav className="mb-2 mt-4">
            {menuList.map(({ name, link }) => (
              <Link key={link} href={link}>
                <a className="mr-2 font-semibold">{name}</a>
              </Link>
            ))}
          </nav>
          <GithubStats />
        </div>
      </div>
    </header>
  );
}
