import Shapedividers from "./icon/descarga";
import { Image } from "@nextui-org/react";
export default function Footer() {
  return (
    <>
      <section className="rotate-180">
        <Shapedividers />
      </section>
      <section className="w-full  bg-[#fae0cf] h-auto relative -mt-2">
        <div className="flex flex-col md:flex-row justify-between w-full md:max-w-[1100px] items-center  m-auto ">
          <article className="mt-5 md:mt-0">
            <Image src="/public/img/logo.png" />
          </article>
          <article>
            <p className=" justify-center m-auto text-sm font-raleway-medium w-[90%] md:w-[300px] md:mr-10 mt-5 mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              doloremque.
              <span className="text-[#e67e22]">
                , doloribus, voluptatem, quibusdam, quos dolores voluptatibus,
              </span>{" "}
              q doloremque, doloribus, voluptatem, quibusdam, quos
            </p>
          </article>
          <article className="mb-5 mt-5 md:mb-0 md:mt-0">
            <p>© 2022 FurEver Friends</p>
          </article>
        </div>
      </section>
    </>
  );
}
