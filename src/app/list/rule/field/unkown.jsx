export default function({ obj: { label, value } }) {
  return (
    <div>
      <div>{label}</div>
      <pre className="unkown-schema">{value}</pre>
    </div>
  );
}
