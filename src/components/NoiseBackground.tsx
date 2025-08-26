export default function NoiseBackground() {
  return (
    <div
      style={{
        backgroundImage: `url("/noise.png")`,
        backgroundSize: "200px",
        animation: "noise 0.5s steps(2) infinite",
      }}
      className="pointer-events-none fixed inset-[-10rem] z-[9999] opacity-80"
    ></div>
  );
}
