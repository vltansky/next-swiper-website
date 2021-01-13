export async function fetchAllDemos() {
  const data = await fetch(
    "https://api.github.com/repos/nolimits4web/swiper/contents/demos"
  );
  return dataManipulation(data);
}

export async function fetchDemo(slug) {
  const data = await fetch(
    `https://api.github.com/repos/nolimits4web/swiper/contents/demos/${slug}.html`
  );
  const _data = await data.json();
  const html = Buffer.from(_data.content, "base64").toString();
  return html;
}

async function dataManipulation(data) {
  const _data = await data.json();
  console.log(_data);
  return _data.map(({ name, url }) => {
    const beautySlug = name.slice(4).replace(".html", "");
    const title = beautySlug
      .replace(/-/g, " ")
      .split(" ")
      .map((word) => `${word[0].toUpperCase()}${word.slice(1)}`)
      .join(" ");
    return {
      slug: name.replace(".html", ""),
      beautySlug,
      apiUrl: url,
      title,
      fileName: name,
    };
  });
}
