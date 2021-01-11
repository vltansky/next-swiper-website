import menuList from "./menu-list";
import Link from "next/link";
import sponsors from "./sponsors";

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
      className="flex justify-center items-center p-4 mx-2 border text-center hover:bg-gray-50"
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
    <footer className="border-t-8 border-primary text-center py-4">
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
        <div className="flex justify-center my-4">{sponsorsEl}</div>
        <nav className="my-2 space-x-4">{menu}</nav>
        <div>
          {new Date().getFullYear()} © Swiper by{" "}
          <a href="https://github.com/nolimits4web">Vladimir Kharlampidi</a>
        </div>
      </div>
    </footer>
  );
}
