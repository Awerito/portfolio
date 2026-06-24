import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollUpAction() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 0);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className="nb-sm press fixed bottom-5 right-5 z-50 grid h-12 w-12 place-items-center bg-pink"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
