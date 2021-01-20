export default function TypesTable({ items }) {
  items = items?.filter(
    (item) => !item.comment?.shortText.toLowerCase().includes("internal")
  );
  const type = (item = {}) => {
    const typeObj = item.type || {};
    if (typeObj.type === "union")
      return typeObj.types
        .map(({ name, value }) => (value ? `'${value}'` : name))
        .join(" | ");
    return typeObj.name || "";
  };
  const description = (item) => {
    const { shortText, text, tags = [] } = item.comment || {};
    const textContent = [shortText, text]
      .filter((el) => !!el)
      .map((el) => <div>{el}</div>);
    const tagsContent = tags
      .filter((tag) => tag.tag === "note" || tag.tag === "example")
      .map((tag) => {
        if (tag.tag === "note")
          return <div className="important-note">{tag.text}</div>;
        if (tag.tag === "example")
          return (
            <pre>
              <code>{tag.text}</code>
            </pre>
          );
      });

    return (
      <>
        {textContent}
        {tagsContent}
      </>
    );
  };
  return (
    <table className="table-fixed">
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Default</th>
          <th>Description</th>
        </tr>
      </thead>
      {items?.map((item) => (
        <tr key={item.name} className="border-t">
          <td className="w-1/6 text-red-700 font-mono font-semibold py-2">
            {item.name}
          </td>
          <td className="w-1/6 text-green-700 font-mono font-semibold py-2 px-1">
            {type(item)}
          </td>
          <td className="w-1/6 text-red-700 font-mono font-semibold py-2 px-1">
            {item.default_value}
          </td>
          <td className="w-3/6 py-2 space-y-2">{description(item)}</td>
        </tr>
      ))}
    </table>
  );
}
