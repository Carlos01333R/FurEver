import Shapedividers from "./icon/descarga";
import Header from "./Header";
import Hero from "./Hero";

export default function HeaderHero() {
  return (
    <>
      <section className="relative z-10 text-black h-auto  bg-[#fae0cf] mt-0 overflow-hidden">
        <Header />
        <Hero />
      </section>
      <Shapedividers />
    </>
  );
}
