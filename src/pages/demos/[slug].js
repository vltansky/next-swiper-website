import Head from "next/head";
import { fetchAllDemos, fetchDemo } from "src/shared/fetch-demos";

export async function getStaticPaths() {
  const demos = await fetchAllDemos();
  const paths = demos.map(({ slug }) => ({
    params: {
      slug,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const pageData = await fetchDemo(params.slug);
  console.log(params);
  return {
    props: {
      pageData,
    },
  };
}
function replaceLink(str) {
  return str.replace(/..\/package\//g, "https://unpkg.com/swiper/");
}

function getBody(html) {
  const pattern = /<body[^>]*>((.|[\n\r])*)<\/body>/im;
  return { __html: replaceLink(pattern.exec(html)[1]) };
}
function getStyle(html) {
  const pattern = /<style[^>]*>((.|[\n\r])*)<\/style>/i;
  return pattern.exec(html)[1];
}
function getStyleLink(html) {
  const pattern = /<link rel="stylesheet" href="(.*)">/i;
  return replaceLink(pattern.exec(html)[1]);
}
export default function DemoPage({ pageData }) {
  return (
    <>
      <Head>
        <title>Test</title>
        <style>{getStyle(pageData)}</style>
        <link rel="stylesheet" href={getStyleLink(pageData)}></link>
      </Head>
      <div dangerouslySetInnerHTML={getBody(pageData)} />
    </>
  );
}
