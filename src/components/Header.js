import menuList from "../shared/menu-list";
import GithubStats from "./GithubStats";
import Link from "next/link";
import { ReactComponent as Logo } from "@/img/logo.svg";
import Carbon from "./Carbon";

export default function Header() {
  return (
    <header className="bg-white border-b-8 py-6 border-primary">
      <div className="max-w-6xl mx-auto flex">
        <Link href="/">
          <a className="flex-shrink-0">
            <Logo
              className="swiper_logo rounded-full"
              width="150"
              height="150"
              alt="Swiper"
            />
          </a>
        </Link>
        <div className="ml-5">
          <div className="text-5xl font-bold text-primary">
            Swiper
            <span className="text-xs text-black ml-2 font-medium align-super">
              v{process.env.swiperReleaseVersion}
            </span>
          </div>
          <div className="text-3xl my-2 font-bold text-gray-900">
            Most Modern Mobile Touch Slider
          </div>
          <nav className="mb-2 mt-4 space-x-4">
            {menuList.map(({ name, link }) => (
              <Link key={link} href={link}>
                <a className="font-medium">{name}</a>
              </Link>
            ))}
          </nav>
          <GithubStats />
        </div>
        <div className="ml-auto self-center">
          <Carbon />
        </div>
      </div>
    </header>
  );
}
