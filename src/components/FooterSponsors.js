import sponsors from '../shared/sponsors';

export default function FooterSponsors() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 my-8 gap-x-3">
      {sponsors.map(({ href, title, src, width }) => {
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
      })}
    </div>
  );
}
