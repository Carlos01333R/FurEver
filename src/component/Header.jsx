import Arrow from "./icon/Arrow";
import { Image } from "@nextui-org/react";
import { useState } from "react";
import ShowHamburgers from "./icon/showHamburgers";
import Lesshamburger from "./icon/Lesshamburger";
import { Link } from "react-router-dom";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const items = [
    { name: "Adocta", link: "/" },
    { name: "Match", link: "/match" },
    { name: "Acerca de", link: "/" },
    { name: "Contacto", link: "/" },
  ];

  return (
    <>
      <header className="w-full md:max-w-[1100px] mt-4 md:mt-2 font-raleway-medium m-auto">
        <header className="w-full flex justify-between items-center h-12 relative m-auto z-50">
          <section className="pr-6">
            <Link to="/">
              <Image
                className="ml-5 md:ml-0 w-30 h-14 object-contain"
                src="/img/logo.png"
                alt="logo"
              />
            </Link>
          </section>
          <section className="hidden md:block">
            <nav className="font-bold">
              <ul className="flex justify-center items-center gap-5">
                {items.map((item, index) => (
                  <Link
                    style={{
                      textDecorationColor: "#e67e22",
                      textDecorationThickness: "2px",
                    }}
                    className={`${
                      item.name === "Adocta"
                        ? "underline underline-offset-4 hover:no-underline  hover:transition-all hover:duration-500"
                        : "hover:underline hover:underline-offset-4 hover:transition-all hover:duration-500"
                    }`}
                    key={index}
                    to={item.link}
                  >
                    {item.name}
                  </Link>
                ))}
              </ul>
            </nav>
          </section>
          <section className="hidden md:block border-2 border-[#e67e22] p-1 rounded-3xl hover:border-white hover:scale-105 hover:trasition-all hover:duration-500">
            <a
              target="_blank"
              href="https://huachitos.cl/api/animales"
              className="bg-[#e67e22] p-1 px-2 rounded-3xl text-white flex gap-2 items-center "
            >
              Api
              <Arrow />
            </a>
          </section>
          <section className="block md:hidden mr-5 md:mr-0">
            <button onClick={() => setShowMenu(true)}>
              <ShowHamburgers />
            </button>
          </section>
        </header>

        {showMenu && (
          <>
            <section className="transition-all duration-500 absolute top-0 left-0 w-full h-[400px] bg-[#fae0cf]  z-50 flex flex-col ">
              <div className="flex justify-between items-center mr-3 mb-10">
                <Image
                  className="ml-10 mt-3 md:ml-0 w-30 h-14 object-contain"
                  src="/public/img/logo.png"
                  alt="logo"
                />
                <button onClick={() => setShowMenu(false)}>
                  <Lesshamburger />
                </button>
              </div>
              <ul className="flex flex-col gap-4 p-4 justify-center items-center">
                {items.map((item, index) => (
                  <li className="flex gap-2 items-center" key={index}>
                    <Link
                      style={{
                        textDecorationColor: "#e67e22",
                        textDecorationThickness: "2px",
                      }}
                      className={`${
                        item.name === "Adocta"
                          ? "underline underline-offset-4 hover:no-underline  hover:transition-all hover:duration-500"
                          : "hover:underline hover:underline-offset-4 hover:transition-all hover:duration-500"
                      }`}
                      key={index}
                      to={item.link}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          </>
        )}
      </header>
    </>
  );
}
