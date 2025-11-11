import { IconArrowUp } from "@tabler/icons-react";
import { useEffect, useState } from "react";

export default function ScrollUpAction() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    toggleVisibility();
    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={handleScrollTop}
      className={`fixed bottom-6 right-6 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-brand-200/70 bg-brand-500 text-white shadow-lg transition hover:bg-brand-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-200/80 dark:border-brand-300/40 dark:bg-brand-500/80 dark:shadow-glow ${
        isVisible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
      aria-label="Scroll to top"
    >
      <IconArrowUp size={20} />
    </button>
  );
}
