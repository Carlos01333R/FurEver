/* eslint-disable react/prop-types */
import {
  Modal,
  ModalContent,
  ModalBody,
  Image,
  Button,
} from "@nextui-org/react";
import { useState, useEffect } from "react";
import IconVacuna from "./icon/IconVacuna";
import IconNovacuna from "./icon/IconNovacuna";
import IconEsterizado from "./icon/IconEsterizado";
import IconNoEsterizado from "./icon/IconNoEsterizado";
import IconUbicacion from "./icon/IconUbicacion";
import Heart from "./icon/Heart";
import IconFemale from "./icon/IconFemale";
import IconMale from "./icon/IconMale";

export default function ModalPrueba({
  isOpen,
  onOpenChange,
  animal,
  id,
  firstImage,
}) {
  const [slice, setSlice] = useState(150);

  // Verifica si 'animal' es un array, si no, lo convierte en un array de un solo elemento
  const filteredAnimal = Array.isArray(animal)
    ? animal.find((item) => item.id === id)
    : animal.id === id
    ? animal
    : null;

  useEffect(() => {
    setSlice(150);
  }, [id]);

  return (
    <Modal
      style={{
        scrollbarColor: "#e67e22 #fae0cf",
        scrollbarWidth: "none",
        scrollbarBehavior: "none",
      }}
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      radius="lg"
      size="4xl"
      scrollBehavior="inside"
      backdrop="blur"
      classNames={{
        body: "py-6 scrollbar-thin scrollbar-thumb-[#e67e22] scrollbar-track-[#fae0cf] p-2",
        base: "border-[#292f46] bg-[#fae0cf] dark:bg-[#19172c] text-black font-raleway-medium",
        footer: "border-t-[1px] border-[#e67e22]",
        closeButton: "hover:bg-white/5 active:bg-white/10",
      }}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalBody className="mt-2">
              {filteredAnimal ? (
                <section className="flex flex-col md:flex-row w-full h-auto">
                  <article className="flex w-full md:w-[50%]  flex-col mb-10">
                    <div className="w-full flex gap-3  justify-center items-center text-[#e67e22]">
                      {filteredAnimal.nombre}
                    </div>
                    <div className="flex flex-col w-full justify-center items-center mt-5 gap-5">
                      <Image
                        src={firstImage}
                        alt="image"
                        className="w-[250px] h-[250px] object-cover rounded-2xl rotate-6"
                      />
                      <p className="flex gap-2 items-center font-raleway-black text-[#e67e22]">
                        {filteredAnimal.genero === "macho" ? (
                          <IconMale />
                        ) : (
                          <IconFemale />
                        )}
                        {filteredAnimal.genero}
                      </p>
                    </div>
                  </article>
                  <article className="flex w-[50%] md:w-[50%] flex-col gap-2 m-auto ">
                    <h2 className="font-raleway-black text-2xl mb-1 text-[#e67e22]">
                      Información de {filteredAnimal.nombre}
                    </h2>
                    <div>
                      <p className="text-[#e67e22] ">Descripción física</p>
                      <p>{filteredAnimal.desc_fisica.replace(/<\/?p>/g, "")}</p>
                    </div>

                    <div>
                      <p className="text-[#e67e22] ">Personalidad</p>
                      <p>
                        {filteredAnimal.desc_personalidad.replace(
                          /<\/?p>/g,
                          ""
                        )}
                      </p>
                    </div>

                    <div>
                      <p className="text-[#e67e22] ">Descripción adicional</p>
                      <p>
                        {filteredAnimal.desc_adicional
                          .slice(0, slice)
                          .replace(/<\/?p>/g, "")}
                        <span className="ml-1">
                          {filteredAnimal.desc_adicional.length > slice && (
                            <button
                              onClick={() => setSlice(slice + 150)}
                              className="text-[#e67e22]"
                            >
                              Leer más ...
                            </button>
                          )}
                        </span>
                      </p>
                    </div>

                    <div className="flex w-full gap-2 mt-2">
                      <article className="flex gap-2 items-center">
                        <IconUbicacion />
                        <p className="font-raleway-black ">
                          {filteredAnimal.region} | {filteredAnimal.comuna}
                        </p>
                      </article>
                      <article className="flex gap-2 items-center">
                        {filteredAnimal.vacunas === 1 ? (
                          <IconVacuna />
                        ) : (
                          <IconNovacuna />
                        )}
                        {filteredAnimal.vacunas === 1 ? (
                          <p className="font-raleway-black ">Vacunado</p>
                        ) : (
                          <p className="font-raleway-black ">No vacunado</p>
                        )}
                      </article>
                      <article className="flex gap-2 items-center">
                        {filteredAnimal.esterilizado === 1 ? (
                          <IconNoEsterizado />
                        ) : (
                          <IconEsterizado />
                        )}

                        {filteredAnimal.esterilizado === 1 ? (
                          <p className="font-raleway-black ">No Esterilizado</p>
                        ) : (
                          <p className="font-raleway-black ">Esterilizado</p>
                        )}
                      </article>
                    </div>
                    <div className="w-full flex justify-end items-end ">
                      <article className="flex gap-2 items-center mr-5 mt-2">
                        <a
                          target="_blank"
                          className="bg-[#e67e22] text-white font-raleway-semibold flex p-2 rounded-3xl hover:scale-105 hover:transition-all hover:duration-300 items-center gap-1"
                          href={filteredAnimal.url}
                        >
                          Adoptar a {filteredAnimal.nombre}
                          <Heart width="20" height="20" />
                        </a>

                        <Button
                          className="bg-transparent text-black font-raleway-semibold hover:text-red-500"
                          onPress={onClose}
                        >
                          Cerrar
                        </Button>
                      </article>
                    </div>
                  </article>
                </section>
              ) : (
                <p>No se encontró el animal con la ID especificada.</p>
              )}
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
