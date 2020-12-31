import "../styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Head from "next/head";
function App({ Component, pageProps, router }) {
  const meta = Component.layoutProps?.meta || {};
  // TODO: use https://github.com/garmeeh/next-seo
  return (
    <>
      <Head>
        <title key="title">Swiper - {meta.metaTitle || meta.title}</title>
      </Head>
      {router.pathname !== "/" && <Header />}
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default App;
