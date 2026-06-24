// Simple Icons brand logo (Lucide dropped brand icons).
// `color` is optional (e.g. "white", "111111"); omit for the default brand color.
export default function BrandIcon({ slug, color, className = "brand" }) {
  const url = color
    ? `https://cdn.simpleicons.org/${slug}/${color}`
    : `https://cdn.simpleicons.org/${slug}`;
  return (
    <img
      className={className}
      src={url}
      alt=""
      onError={(e) => {
        e.currentTarget.style.display = "none";
      }}
    />
  );
}
