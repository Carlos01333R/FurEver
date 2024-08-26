import Header from "../component/Header";
import useApi from "../hook/api";
import IconDog from "../component/icon/IconDog";
import { Image } from "@nextui-org/react";
import Shapedividers from "../component/icon/descarga";
import Animales from "../component/Animales";
import Footer from "../component/Footer";
import { useEffect } from "react";

export default function Dog() {
  const {
    FilterDog,
    LengthDog,
    LengthDogAdopcion,
    LengthDogvacunas,
    LengthDogEsterizados,
  } = useApi();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const ItemDog = [
    {
      id: 1,
      icon: IconDog,
      tipo: "Perros",
      name: "Adocta un Perrito",
      description:
        "Dog is a mammal of the family Canidae. The word dog comes from the Dutch word hoed, meaning “dog,” and is thought to derive from.",
      image:
        "https://s1.1zoom.me/big0/511/Dogs_White_background_Puppy_Glance_563213_819x1024.jpg",
      linkName: "Adoptar",
      link: "/Dog",
      length: LengthDog,
      estado: "adopción:",
      valuestado: LengthDogAdopcion,
      vacuna: "vacunados:",
      valueVacuna: LengthDogvacunas,
      esterilizado: "esterilizados:",
      valueEsterilizado: LengthDogEsterizados,
    },
  ];
  return (
    <>
      <section className="w-full bg-[#fae0cf] mt-0 overflow-hidden h-auto">
        <Header />
        <article className="flex flex-col md:flex-row  h-auto w-[90%] md:max-w-[1100px] m-auto mt-10 mb-10">
          {ItemDog.map((item) => (
            <>
              <section key={item.id} className="w-[90%] md:w-[50%]  ">
                <div className="w-full flex flex-col justify-start items-start m-auto">
                  <p className="flex items-center gap-3">
                    {item.icon()} {item.tipo}
                  </p>
                  <h3 className="font-raleway-black text-3xl md:text-5xl mb-1">
                    {" "}
                    {item.name}
                  </h3>
                  <p className="text-sm font-raleway-medium w-[70%]">
                    {item.description}
                  </p>
                </div>
                <p className="flex gap-2 mt-2 items-center ">
                  {item.icon()}
                  {item.length}
                  <span className="text-[#e67e22] font-raleway-black flex items-center">
                    {" "}
                    {item.tipo}
                  </span>
                </p>
                <div className="hidden md:block w-full truncate relative top-3 ">
                  <section className="flex gap-2 items-center">
                    <p className="flex items-center truncate">
                      <span className="w-2 h-2 bg-[#e67e22] rounded-full mr-1"></span>
                      {item.estado}
                      <span className="text-[#e67e22] font-raleway-black ml-1">
                        {item.valuestado.length !== 0 ? item.valuestado : "0"}
                      </span>
                    </p>
                    <p className="flex items-center truncate">
                      <span className="w-2 h-2 bg-[#e67e22] rounded-full mr-1"></span>
                      {item.vacuna}{" "}
                      <span className="text-[#e67e22] font-raleway-black ml-1">
                        {item.valueVacuna.length !== 0 ? item.valueVacuna : "0"}
                      </span>
                    </p>
                    <p className="flex items-center truncate">
                      <span className="w-2 h-2 bg-[#e67e22] rounded-full mr-1"></span>
                      {item.esterilizado}
                      <span className="text-[#e67e22] font-raleway-black ml-1">
                        {item.valueEsterilizado.length !== 0
                          ? item.valueEsterilizado
                          : "0"}
                      </span>
                    </p>
                  </section>
                </div>
              </section>
              <section className=" hidden md:block w-[50%]  m-auto ">
                <div className="flex justify-center items-center">
                  <Image
                    style={{
                      maskImage: "linear-gradient(black 90%, transparent)",
                    }}
                    className="object-cover rounded-lg"
                    src={item.image}
                    alt="Dog"
                    width={220}
                    height={220}
                  />
                </div>
              </section>
            </>
          ))}
        </article>
      </section>
      <Shapedividers />

      <section className="w-full md:max-w-[1100px] m-auto mt-10 mb-10">
        <Animales animales={FilterDog} icon={IconDog} />
      </section>
      <Footer />
    </>
  );
}
