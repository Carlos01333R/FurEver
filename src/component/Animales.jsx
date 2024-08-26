/* eslint-disable react/prop-types */

import Heart from "../component/icon/Heart";
import Spliner from "./Spliner";
import { Button, Image } from "@nextui-org/react";
import { useDisclosure } from "@nextui-org/react";
import ModalPrueba from "../component/ModalPrueba";
import IconMale from "./icon/IconMale";
import IconFemale from "./icon/IconFemale";
import { useState } from "react";
import FilterComponent from "./Filters";

export default function Animales({ animales, icon }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [IdAnimal, setIdAnimal] = useState(null);
  const [Filter, setFilter] = useState({
    genero: "all",
    vacunas: 2,
    esterilizado: 2,
  });

  const FilterCategory = (animales) => {
    return animales.filter((animal) => {
      // Filtrar por género
      const generoMatch =
        Filter.genero === "all" || animal.genero === Filter.genero;
      // Filtrar por vacunas
      const vacunasMatch =
        Filter.vacunas === 2 || animal.vacunas === Filter.vacunas;
      // Filtrar por esterilizado
      const esterilizadoMatch =
        Filter.esterilizado === 2 ||
        animal.esterilizado === Filter.esterilizado;

      // Devolver true si el animal cumple con todos los filtros
      return generoMatch && vacunasMatch && esterilizadoMatch;
    });
  };

  const FilterAnimalAll = FilterCategory(animales);
  return (
    <>
      <section>
        {animales.length === 0 ? (
          <section className="w-full flex justify-center items-center">
            <Spliner />
          </section>
        ) : (
          <>
            <FilterComponent setFilter={setFilter} />
            <section className="w-full grid grid-cols-1 md:grid-cols-3 gap-5 justify-center items-center text-black font-raleway-medium mt-5 md:mt-14 gap-y-7 mb-32 m-auto">
              {FilterAnimalAll.map((item) => (
                <div
                  className="w-[90%] md:max-w-full h-auto bg-[#fae0cf] rounded-3xl m-auto hover:scale-105 hover:transition-all hover:duration-300 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
                  key={item.id}
                >
                  <article className="flex px-3 py-2 gap-2 items-center font-raleway-semibold">
                    {icon()}
                    <p className="text-[#e67e22] text-sm p-0">{item.nombre}</p>
                  </article>
                  <article className="px-3 py-2">
                    <h3 className="font-raleway-black text-2xl mb-1">
                      Adopta a {item.nombre}
                    </h3>
                    <p className="text-sm font-raleway-medium">
                      {item.desc_fisica.replace(/<\/?p>/g, "")}
                    </p>
                  </article>
                  <article className="flex w-full px-5 py-2 gap-2  font-raleway-medium">
                    <div className="w-[50%] relative top-3">
                      <p className="flex items-center gap-2 font-raleway-black">
                        {icon()}
                        {item.genero}
                      </p>
                      <p className="flex items-center truncate font-raleway-black text-[#e67e22]">
                        <span className="w-2 h-2 bg-[#e67e22] rounded-full mr-1"></span>
                        {item.estado}
                      </p>
                      <p className="flex items-center truncate">
                        <span className="w-2 h-2 bg-[#e67e22] rounded-full mr-1"></span>
                        <span className="text-[#e67e22] font-raleway-black ml-1">
                          {item.vacunas === 0 ? "No vacunado" : "Vacunado"}
                        </span>
                      </p>
                      <p className="flex items-center truncate">
                        <span className="w-2 h-2 bg-[#e67e22] rounded-full mr-1"></span>

                        <span className="text-[#e67e22] font-raleway-black ml-1">
                          {item.esterilizado !== 0
                            ? "No esterilizado"
                            : "Esterilizado"}
                        </span>
                      </p>
                    </div>

                    <div className="w-[50%]">
                      <Image
                        className="ml-4 w-[130px] h-[130px] object-cover rounded-xl rotate-6	"
                        src={item.imagen}
                        alt="image"
                      />
                    </div>
                  </article>

                  <article className="flex items-start justify-start gap-2  font-raleway-medium relative -top-2 ml-[10%] ">
                    <div className=" border-2 border-[#e67e22] p-1 rounded-3xl">
                      <Button
                        onPress={() => {
                          setIdAnimal(item.id);
                          onOpen();
                        }}
                        className="flex gap-2 items-center bg-[#e67e22] rounded-2xl p-2 px-3 font-raleway-semibold text-white focus:outline-0"
                      >
                        + Info
                        <Heart />
                      </Button>
                    </div>
                  </article>
                </div>
              ))}
            </section>
          </>
        )}

        {IdAnimal !== null && (
          <ModalPrueba
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            animales={animales}
            id={IdAnimal}
            icon={icon}
            iconMale={IconMale}
            iconFemale={IconFemale}
          />
        )}
      </section>
    </>
  );
}
