import Image from "next/image";

export default function HomeView() {

  return (
    <section className="relative flex flex-col flex-1 ">

      <section className="flex flex-col md:flex-row md:justify-around items-center bg-text-dark">
        <Image
          src={"logo.svg"}
          alt="Snakey-Code big logo"
          width={400}
          height={400}
          sizes="(max-width: 640px) 50vw, 50vw"
          className="object-cove"
        />
        <h1 className="font-header py-6 text-primary text-balance text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">Where your <span className="text-accent">Python</span> journey begins</h1>
      </section>

      <section className="flex-1 relative z-10 p-4 bg-primary-light/60">
        <p>This is paragraph text.</p>
        <p className="font-code">This is paragraph text.</p>
      </section>
    </section>
  );

}
