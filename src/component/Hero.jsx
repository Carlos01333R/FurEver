import Home from "./icon/Home";
import { Image } from "@nextui-org/react";
import HeroImg from "../../public/img/hero.png";
export default function Hero() {
  return (
    <>
      <section className="flex w-[90%] md:max-w-[1100px]  justify-center items-center m-auto mt-5 relative">
        <section className="w-full md:w-[50%] flex flex-col justify-center items-center m-auto ">
          <article className="w-full ml-3   flex flex-col justify-start items-start m-auto">
            <div className="mb-5 mt-5 md:mt-0 ">
              <Home />
              <a
                target="_blank"
                style={{
                  textDecorationColor: "#e67e22",
                  textDecorationThickness: "2px",
                }}
                className="hover:underline hover:underline-offset-4 text-sm font-raleway-medium hover:text-[#e67e22] hover:transition-all hover:duration-500"
                href="https://huachitos.cl/"
              >
                https://huachitos.cl/
              </a>
            </div>

            <p className="w-[90%] font-raleway-black text-3xl md:text-5xl ">
              tleve <span className="text-[#e67e22]">is Gat</span>, san with by
              alised Dog come
            </p>
            <div className="mt-7 flex gap-2 justify-start items-start mb-4 md:mb-0 ">
              <a
                target="_blank"
                href="https://huachitos.cl/docs"
                className="bg-[#e67e22] p-2 px-2 rounded-3xl text-white flex gap-2 items-center font-raleway-medium hover:scale-105 hover:trasition-all hover:duration-500"
              >
                Get Started
              </a>
              <a
                target="_blank"
                href="https://huachitos.cl/blog/como-elegir-al-companero-ideal-encontrando-tu-animal-perfecto"
                className="border-2 border-[#e67e22] p-2 px-2 rounded-3xl text-white flex gap-2 items-center font-raleway-medium hover:scale-105 hover:trasition-all hover:duration-500"
              >
                <p className="text-black">
                  Compañero <span className="text-[#e67e22]">ideal</span>
                </p>
              </a>
            </div>
          </article>
        </section>
        <section className="hidden md:block w-[50%] relative m-auto">
          <div className="w-full flex justify-center items-center">
            <Image
              className="w-[350px] h-[350px] object-contain"
              src={HeroImg}
              alt="hero"
            />
          </div>
        </section>
      </section>
    </>
  );
}
