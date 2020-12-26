import styles from "./footer.module.css";
import menuList from "../menu-list";

const menu = [{ name: "Swiper", link: "/" }, ...menuList].map(
  ({ name, link }) => {
    return (
      <a key={link} href={link} className="mr-4">
        {name}
      </a>
    );
  }
);

const sponsors = [
  {
    href:
      "https://codersrank.io/?utm_source=partner&utm_medium=referral&utm_campaign=vladimir",
    title: "CodersRank - Ultimate Profile for Coders",
    src: "sponsors/codersrank.svg",
    width: "200",
  },
  {
    href: "https://leaderboard.tech",
    title: "Developers Leaderboard",
    src: "sponsors/developers-leaderboard.svg",
    width: "300",
  },
].map(({ href, title, src, width }) => {
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
        <div className="flex justify-center my-4">{sponsors}</div>
        <div className="text-center">
          <a
            className="inline-block"
            href="https://www.netlify.com"
            target="_blank"
          >
            <img src="https://www.netlify.com/img/global/badges/netlify-color-bg.svg" />
          </a>
        </div>
        <nav className="my-2">{menu}</nav>
        <div>
          {new Date().getFullYear()} © Swiper by{" "}
          <a href="https://github.com/nolimits4web">Vladimir Kharlampidi</a>
        </div>
      </div>
    </footer>
  );
}
