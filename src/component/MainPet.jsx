import IconDog from "./icon/IconDog";
import IconCat from "./icon/IconCat";
import IconMatch from "./icon/IconMatch";
import Heart from "./icon/Heart";
import useApi from "../hook/api";
import { Image } from "@nextui-org/react";
import { Link } from "react-router-dom";
export default function MainPet() {
  const {
    LengthAnimal,
    totalAdopcion,
    totalvacunados,
    totalestelizados,
    LengthDog,
    LengthDogAdopcion,
    LengthDogvacunas,
    LengthDogEsterizados,
    LengthCat,
    LengthCatAdopcion,
    LengthCatvacunas,
    LengthCatEsterizados,
  } = useApi();

  const Item = [
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
    {
      id: 2,
      icon: IconCat,
      tipo: "Gatos",
      name: "Adocta un Gatico",
      description:
        "Cat is a domestic species of small carnivorous mammal. It is the only domesticated species in the family Felidae and is often.",
      image:
        "https://img.freepik.com/fotos-premium/gatito-fondo-blanco_414897-1143.jpg?w=360",

      linkName: "Adoptar",
      link: "/Cat",
      length: LengthCat,
      estado: "adopción:",
      valuestado: LengthCatAdopcion,
      vacuna: "vacunados:",
      valueVacuna: LengthCatvacunas,
      esterilizado: "esterilizados:",
      valueEsterilizado: LengthCatEsterizados,
    },
    {
      id: 3,
      icon: IconMatch,
      tipo: " Match",
      name: "Haz Match",
      description:
        "Match is a domestic species of small carnivorous mammal. It is the only domesticated species in the family Felidae and is often referred  domestic. ",
      image:
        "https://st3.depositphotos.com/1004199/12631/i/450/depositphotos_126310760-stock-photo-cat-and-dog-together.jpg",
      linkName: " Match",
      link: "/match",
      length: LengthAnimal,
      estado: "adopción",
      valuestado: totalAdopcion,
      vacuna: "vacunas:",
      valueVacuna: totalvacunados,
      esterilizado: "esterilizados:",
      valueEsterilizado: totalestelizados,
    },
  ];

  return (
    <>
      <section className="w-full flex flex-col justify-center items-center text-black font-raleway-medium mb-5 md:mt-5">
        <h2 className="text-3xl md:text-5xl font-raleway-black">
          You are liffe <span className="text-[#e67e22]">trasttes</span>{" "}
        </h2>
        <p className="mt-5 w-full md:w-[50%] text-center">
          is Gat, san with by alised Dog come to the world of furry friends and
          find your perfect furry friend. You can find your furry friend in the
          world of furry friends and find your perfect furry friend.
        </p>
      </section>

      <section className="w-full grid grid-cols-1 md:grid-cols-3 gap-5 justify-center items-center text-black font-raleway-medium mt-5  md:mt-14 gap-y-7 mb-32">
        {Item.map((item) => (
          <div
            className="w-full md:max-w-full h-auto bg-[#fae0cf] rounded-3xl"
            key={item.id}
          >
            <article className="flex px-3 py-2  gap-2 items-center font-raleway-semibold">
              {item.icon()}
              <p className=" text-[#e67e22] text-sm p-0">{item.tipo}</p>
            </article>

            <article className=" px-3 py-2">
              <h3 className="font-raleway-black text-2xl mb-1"> {item.name}</h3>
              <p className="text-sm font-raleway-medium">{item.description}</p>
            </article>

            <article className="flex w-full px-5 py-2 gap-2  font-raleway-medium">
              <div className="w-[50%] relative top-3">
                <p className="flex items-center gap-2">
                  {item.icon()}
                  {item.length}
                </p>
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
              </div>

              <div className="w-[50%]">
                <Image
                  className="ml-4 w-[130px] h-[130px] object-cover rounded-xl rotate-6	"
                  src={item.image}
                  alt="image"
                />
              </div>
            </article>

            <article className="flex items-start justify-start gap-2  font-raleway-medium relative -top-2 ml-[10%] ">
              <div className=" border-2 border-[#e67e22] p-1 rounded-3xl">
                <Link
                  to={item.link}
                  className="flex gap-2 items-center bg-[#e67e22] rounded-2xl p-2 px-3 font-raleway-semibold text-white"
                >
                  {item.linkName}
                  <Heart width="20" height="20" />
                </Link>
              </div>
            </article>
          </div>
        ))}
      </section>
    </>
  );
}
