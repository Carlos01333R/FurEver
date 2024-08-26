import SplinnerDog from "/public/gifLoading.gif";

export default function Spliner() {
  return (
    <section className="w-full flex flex-col justify-center items-center relative -top-3">
      <img className="w-28 h-24 " src={SplinnerDog} alt="Spliner Dog" />
      <p className="text-center text-[#e67e22] font-raleway-black mt-2">
        Cargando...
      </p>
    </section>
  );
}
