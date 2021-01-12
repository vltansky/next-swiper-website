import sponsors from "../shared/sponsors";

export default function Sponsors() {
  return (
    <div className="border-b-2 border-gray-200 my-2 py-2">
      <div className="font-semibold mb-2">Sponsors:</div>
      {sponsors.map(({ href, title, src_h, src }) => (
        <a
          className="block my-3"
          href={href}
          key={href}
          title={title}
          target="_blank"
        >
          <img width="200" src={`images/${src_h || src}`} />
        </a>
      ))}
    </div>
  );
}
