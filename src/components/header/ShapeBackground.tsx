declare global {
  interface Window {
    UnicornStudio: {
      isInitialized: boolean;
      init: () => void;
    };
  }
}

export default function ShapeBackground() {
  return (
    <div
      className="unicorn-container h-full w-full object-cover mix-blend-difference contrast-150"
      data-us-project="lyiY0HMJOossZWjBA0Kv"
    />
  );
}
