import useApi from "../hook/api";
import useMatchApi from "../hook/MatchApi";
import IconFemale from "../component/icon/IconFemale";
import IconMale from "../component/icon/IconMale";
import IconDog from "../component/icon/IconDog";
import ModalPrueba from "../component/ModalMatch";
import { useDisclosure, Tooltip } from "@nextui-org/react";
import { useState } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Shapedividers from "../component/icon/descarga";
import Spliner from "../component/Spliner";
import Heart from "../component/icon/Heart";
import IconInfo from "../component/icon/IconInfo";
import IconBack from "../component/icon/IconBack";
import IconHeart from "../component/icon/HeartX";

export default function Match() {
  const { idMatches } = useApi();
  const { animal, setFilter, fristImage } = useMatchApi();
  const [IdAnimal, setIdAnimal] = useState();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleRandomId = () => {
    const newRandomId = idMatches[Math.floor(Math.random() * idMatches.length)];
    setFilter(newRandomId);
  };
  const showPreviousRandomId = () => {
    setFilter(65);
  };

  return (
    <>
      <section className="w-full flex flex-col items-center justify-center m-auto h-[200px] bg-[#fae0cf]">
        <Header />
      </section>
      <Shapedividers />

      {animal === null || animal.length === 0 ? (
        <section className="w-full flex justify-center items-center">
          <Spliner />
        </section>
      ) : (
        <section className="w-[85%] md:w-[90%] md:max-w-[1200px] flex flex-col items-center justify-center m-auto relative -top-[100px] md:-top-[180px]">
          {animal && (
            <>
              <section
                style={{
                  maskImage: "linear-gradient(black 90%, transparent)",
                }}
                className="w-full md:w-[80vh] m-auto  flex flex-col items-center justify-center rounded-xl p-4  bg-[#fae0cf]"
              >
                <div>
                  <img
                    className="w-[380px] h-[350px] md:w-[380px] md:h-[350px] rounded-xl object-cover hover:scale-110 hover:mb-2 hover:transition-all hover:duration-500"
                    src={fristImage}
                    alt="animal"
                  />
                  <p className="relative -top-[330px] text-end mr-4 text-white text-2xl font-bold">
                    {animal.nombre}
                  </p>
                </div>
                <article className="w-[90%] flex justify-between relative -top-4 ">
                  <Tooltip content="Volver al inicio">
                    <button
                      className="text-[#e67e22] hover:text-[#e67e22] hover:scale-110 hover:transition-all hover:duration-500"
                      onClick={showPreviousRandomId}
                      name="back"
                    >
                      <IconBack />
                    </button>
                  </Tooltip>

                  <Tooltip content="Ver información">
                    <button
                      onClick={() => {
                        setIdAnimal(animal.id);
                        onOpen();
                      }}
                      className="text-[#e67e22] hover:text-[#e67e22] hover:scale-110 hover:transition-all hover:duration-500"
                      name="info"
                    >
                      <IconInfo />
                    </button>
                  </Tooltip>
                </article>

                <article className="flex w-[90%] justify-center items-center mt-5 gap-3 relative -top-5 ">
                  <Tooltip content="Cambiar de amigo">
                    <button
                      className="text-red-600 hover:text-red-500 hover:scale-110 hover:transition-all hover:duration-500"
                      onClick={handleRandomId}
                      name="heart"
                    >
                      <IconHeart />
                    </button>
                  </Tooltip>

                  <Tooltip content="Adoctar">
                    <a
                      className="text-[#e67e22] hover:text-[#e67e22] hover:scale-110 hover:transition-all hover:duration-500"
                      href={animal.url}
                      name="heart"
                    >
                      <Heart width="40" height="40" />
                    </a>
                  </Tooltip>
                </article>
              </section>
            </>
          )}
        </section>
      )}
      {animal !== null && (
        <ModalPrueba
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          animal={animal}
          id={IdAnimal}
          firstImage={fristImage}
          icon={IconDog}
          iconMale={IconMale}
          iconFemale={IconFemale}
        />
      )}
      <Footer />
    </>
  );
}
