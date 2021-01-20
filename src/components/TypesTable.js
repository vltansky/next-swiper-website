export default function TypesTable({ items }) {
  items = items?.filter(
    (item) => !item.comment?.shortText.toLowerCase().includes("internal")
  );
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
        <tr key={item.name}>
          <td className="w-1/6 text-red-700">{item.name}</td>
          <td className="w-1/6 text-green-700">{item.type?.name}</td>
          <td className="w-1/6 text-red-700">{item.default_value}</td>
          <td className="w-3/6">{item.comment?.shortText}</td>
        </tr>
      ))}
    </table>
  );
}
