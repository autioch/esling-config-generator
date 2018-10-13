export default function ArrayTypeField({ obj: { label, value } }) {
  return (
    <div>
      <div>{label}</div>
      <div>{value}</div>
    </div>
  );
}
