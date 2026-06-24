export default function SectionHeading({ number, title }) {
  return (
    <div className="mb-5 mt-14 flex items-baseline gap-3">
      <span className="display text-3xl text-pink">{number}</span>
      <h2 className="display text-3xl">{title}</h2>
    </div>
  );
}
