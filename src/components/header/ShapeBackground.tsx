import { useEffect } from "react";

declare global {
  interface Window {
    UnicornStudio: {
      isInitialized: boolean;
      init: () => void;
    };
  }
}

export default function ShapeBackground() {
  useEffect(() => {
    // Load UnicornStudio script if not already loaded
    if (!window.UnicornStudio) {
      window.UnicornStudio = { isInitialized: false, init: () => {} };

      const script = document.createElement("script");
      script.src =
        "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js";
      script.onload = function () {
        if (!window.UnicornStudio.isInitialized) {
          window.UnicornStudio.init();
          window.UnicornStudio.isInitialized = true;
        }
      };

      (document.head || document.body).appendChild(script);
    }
  }, []);

  return (
    <div
      className="unicorn-container h-full w-full object-cover"
      data-us-project="lyiY0HMJOossZWjBA0Kv"
    />
  );
}
