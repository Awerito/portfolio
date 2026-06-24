import { MapPin } from "lucide-react";
import profile from "../assets/imgs/me.jpg";
import BrandIcon from "./BrandIcon";

// `slug`/`iconColor` build a Simple Icons URL (Lucide dropped brand icons).
const socials = [
  {
    label: "GitHub",
    href: "https://github.com/awerito",
    slug: "github",
    iconColor: "white",
    className: "bg-ink text-white",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/aweritoh",
    slug: "instagram",
    iconColor: "111111",
    className: "bg-cyan",
  },
];

export default function SelfCard() {
  return (
    <div className="relative grid items-center gap-8 md:grid-cols-[1.4fr_1fr]">
      <div>
        <p className="nb-sm mb-4 inline-flex items-center gap-1.5 bg-cyan px-3 py-1 text-xs font-bold">
          <MapPin className="h-3.5 w-3.5" /> Chile
        </p>
        <h1 className="display mb-2 text-5xl leading-[0.95] md:text-6xl">
          DIEGO
          <br />
          MUÑOZ
        </h1>
        <p className="display mb-5 text-2xl">
          <span className="nb-sm inline-block bg-pink px-2">(awerito)</span>
        </p>
        <p className="mb-6 max-w-md text-base font-medium md:text-lg">
          Software developer who turns complex problems into elegant, shippable
          solutions. Backend-heavy, data-curious, always learning.
        </p>
        <div className="flex flex-wrap gap-3">
          {socials.map(({ label, href, slug, iconColor, className }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className={`nb-sm press flex items-center gap-2 px-4 py-2.5 font-bold ${className}`}
            >
              <BrandIcon slug={slug} color={iconColor} className="h-5 w-5" />
              {label}
            </a>
          ))}
        </div>
      </div>

      {/* Avatar with decorative offset block and sticker */}
      <div className="relative justify-self-center">
        <div className="nb absolute inset-0 translate-x-4 translate-y-4 bg-lime" />
        <div className="nb-sm absolute -left-5 top-6 z-20 -rotate-12 bg-yellow px-2 py-1 text-xs font-bold">
          5+ yrs
        </div>
        <img
          src={profile}
          alt="Diego Muñoz"
          className="nb relative h-56 w-56 object-cover"
        />
      </div>
    </div>
  );
}
