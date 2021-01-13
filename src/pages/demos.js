import fs from "fs";
import path from "path";
import React, { useEffect, useRef } from "react";
import Heading from "@/components/Heading";
import { WithSidebarLayout } from "@/layouts/withSidebar";

export async function getStaticProps() {
  const demosFolder = path.resolve(process.cwd(), "public/demos");
  const demosFiles = fs
    .readdirSync(demosFolder)
    .filter((f) => f.includes(".html"));

  const demos = demosFiles.map((fileName) => {
    const slug = fileName.slice(4).replace(".html", "");
    const title = slug
      .replace(/-/g, " ")
      .split(" ")
      .map((word) => `${word[0].toUpperCase()}${word.slice(1)}`)
      .join(" ");
    return {
      slug,
      title,
      fileName,
    };
  });

  return {
    props: {
      demos,
    },
  };
}

let tableOfContents;

export default function DemosPage({ demos }) {
  tableOfContents = demos.map(({ title, slug }) => {
    return {
      title,
      slug: slug,
      children: [],
    };
  });

  const iframeTimeout = useRef(null);

  const lazyLoadDemos = () => {
    const demoEls = document.querySelectorAll(".demo");
    for (let i = 0; i < demoEls.length; i += 1) {
      const demoEl = demoEls[i];
      if (demoEl.classList.contains("loaded")) continue;
      const demoElRect = demoEl.getBoundingClientRect();
      const iframeEl = demoEl.querySelector("iframe");
      const offsetTop = demoElRect.top;
      if (offsetTop + demoEl.offsetHeight < 0) {
        continue;
      }
      if (offsetTop < window.innerHeight + 50) {
        const src = iframeEl.getAttribute("data-src");
        demoEl.classList.add("loaded");
        iframeEl.setAttribute("src", src);
        console.log("loaded", src);
      }
    }
  };

  const onScroll = () => {
    clearTimeout(iframeTimeout.current);
    iframeTimeout.current = setTimeout(function () {
      lazyLoadDemos();
    }, 500);
  };

  const attachEvents = () => {
    console.log("attachEvents");
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onScroll);

    lazyLoadDemos();
  };

  const detachEvents = () => {
    console.log("detachEvents");
    window.removeEventListener("scroll", onScroll);
    window.removeEventListener("resize", onScroll);
  };

  useEffect(() => {
    attachEvents();
    return () => detachEvents();
  });

  return (
    <WithSidebarLayout tableOfContents={tableOfContents}>
      <h1>Swiper Demos</h1>
      <p>
        You can download all these demos and hook into the code from GitHub{" "}
        <a
          href="https://github.com/nolimits4web/Swiper/tree/master/demos/"
          target="_blank"
        >
          here
        </a>
      </p>
      {demos.map(({ title, slug, fileName }, demoIndex) => (
        <>
          <Heading key={title} level={2} id={slug} toc={true}>
            {title}
          </Heading>
          <div
            key={`links-${demoIndex}`}
            className="flex items-center space-x-5 text-sm my-4"
          >
            <a
              className="no-underline"
              href={`/demos/${fileName}`}
              target="_blank"
            >
              Open in new window
            </a>
            <a
              className="no-underline"
              href={`https://github.com/nolimits4web/Swiper/blob/master/demos/${fileName}`}
              target="_blank"
            >
              Source code
            </a>
            <a
              className="no-underline"
              href={`https://stackblitz.com/edit/swiper-demo-${
                demoIndex + 1
              }-${slug}?file=index.html`}
              target="_blank"
            >
              <img
                className="h-3 inline"
                style={{ margin: 0 }}
                src="images/stackblitz-icon.svg"
              />
              <span>Edit in StackBlitz</span>
            </a>
          </div>
          <div
            key={`demo-${demoIndex}`}
            className="my-4 bg-gray-100 shadow demo"
          >
            <iframe
              data-src={`/demos/${fileName}`}
              scrolling="no"
              frameBorder="0"
              className="h-96 block w-full"
            ></iframe>
          </div>
        </>
      ))}
    </WithSidebarLayout>
  );
}

const meta = {
  title: "Swiper Demos",
};

DemosPage.layoutProps = {
  WithSidebarLayout,
  meta,
  tableOfContents,
};
