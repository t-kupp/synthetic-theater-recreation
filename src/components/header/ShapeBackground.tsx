import UnicornScene from "unicornstudio-react";

export default function ShapeBackground() {
  return (
    <div className="unicorn-container h-full w-full object-cover mix-blend-difference contrast-150">
      <UnicornScene
        ariaLabel="Animated background scene"
        projectId="lyiY0HMJOossZWjBA0Kv"
        width={"100%"}
        height={"100%"}
        fps={24}
        dpi={0.75}
      />
    </div>
  );
}
