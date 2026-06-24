import { Fragment } from "react";

const stack = [
  "PYTHON",
  "REACT",
  "FASTAPI",
  "DOCKER",
  "MONGODB",
  "POSTGRES",
  "DJANGO",
  "REDIS",
];

export default function StackStrip() {
  return (
    <div className="nb mt-10 bg-ink px-4 py-3 text-white">
      <div className="display flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-lg">
        {stack.map((name, i) => (
          <Fragment key={name}>
            <span>{name}</span>
            {i < stack.length - 1 && <span className="text-pink">★</span>}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
