import menuList from "../shared/menu-list";
import Link from "next/link";
import sponsors from "../shared/sponsors";

const menu = [{ name: "Swiper", link: "/" }, ...menuList].map(
  ({ name, link }) => {
    return (
      <Link key={link} href={link}>
        {name}
      </Link>
    );
  }
);

const sponsorsEl = sponsors.map(({ href, title, src, width }) => {
  return (
    <a
      className="flex justify-center items-center p-4 border text-center hover:bg-gray-50"
      href={href}
      key={src}
      title={title}
      target="_blank"
    >
      <img width={width} src={`images/${src}`} />
    </a>
  );
});

export default function Footer() {
  return (
    <footer className="border-t-8 border-primary text-center p-4">
      <div className="max-w-5xl mx-auto">
        <div>
          Supported by:{" "}
          <a
            href="https://www.colognewebdesign.de"
            target="_blank"
            title="COLOGNE WEBDESIGN"
          >
            COLOGNE WEBDESIGN
          </a>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 my-4 gap-x-3">
          {sponsorsEl}
        </div>
        <div className="text-center my-4">
          <a href="https://www.netlify.com" target="_blank">
            <img
              className="inline"
              src="https://www.netlify.com/img/global/badges/netlify-color-bg.svg"
            />
          </a>
        </div>
        <nav className="my-4 space-x-4">{menu}</nav>
        <div className="text-gray-700">
          {new Date().getFullYear()} © Swiper by{" "}
          <a href="https://github.com/nolimits4web">Vladimir Kharlampidi</a>
        </div>
      </div>
    </footer>
  );
}
