import TextSection from "@/components/manifesto/TextSection";

export default function Index() {
  return (
    <section className="pt-header-height flex flex-col gap-72 px-5">
      <TextSection index={1}>
        This website is a recreation of{" "}
        <a
          target="_blank"
          className="text-light border-b transition-colors hover:border-transparent"
          href="https://www.designisfunny.co/"
        >{`Daniele Buffa's`}</a>{" "}
        wonderful passion project{" "}
        <a
          target="_blank"
          className="text-light border-b transition-colors hover:border-transparent"
          href="https://www.synthetictheatre.com/"
        >
          Synthetic Theatre
        </a>
        . "It is a realm where stories unravel, and where visual freedom is at the core."
      </TextSection>
      <TextSection index={2} reversed>
        I chose this website to recreate because, as a passion project, it is free from conventional
        limitations like client constraints or budget limits. Pure creative freedom.
      </TextSection>
      <TextSection index={3}>
        This recreation is not perfect. But "Make it work with my current skills" forced creative
        solutions I wouldn't have discovered otherwise.
      </TextSection>
      <TextSection index={4} reversed>
        hi
      </TextSection>
      <TextSection index={5}>hi</TextSection>
    </section>
  );
}
