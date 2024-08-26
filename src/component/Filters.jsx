/* eslint-disable react/prop-types */

export default function FilterComponent({ setFilter }) {
  const handleGeneroChange = (e) => {
    const ValueGenero = e.target.value;
    setFilter((prevState) => ({
      ...prevState,
      genero: ValueGenero,
    }));
  };
  const handleVacunasChange = (e) => {
    const ValueVacunas = e.target.value;
    const ValueInt = parseInt(ValueVacunas);
    setFilter((prevState) => ({
      ...prevState,
      vacunas: ValueInt,
    }));
  };
  const handleEsterilizadoChange = (e) => {
    const ValueEsterilizado = e.target.value;
    const ValueInt = parseInt(ValueEsterilizado);
    setFilter((prevState) => ({
      ...prevState,
      esterilizado: ValueInt,
    }));
  };
  return (
    <div className="w-full flex justify-end items-end ">
      <section className="grid grid-cols-2 md:grid-cols-3  items-end justify-end mr-4 relative -top-3  w-[600px] m-auto">
        <article className="flex flex-col gap-2 items-center justify-center">
          <label
            className="font-bold mb-1 text-[#e67e22]"
            htmlFor="select-animal"
          >
            Genero
          </label>
          <select
            label="Select an animal"
            className="focus:border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-orange-400 focus:ring-white bg-[#fae0cf] dark:bg-[#19172c] text-black font-raleway-black border-[#e67e22] w-[170px] text-sm p-2 rounded-xl"
            onChange={handleGeneroChange}
          >
            <option value="all">Todos</option>
            <option value="macho">Macho</option>
            <option value="hembra">Hembra</option>
          </select>
        </article>

        <article className="flex flex-col gap-2 items-center justify-center">
          <label htmlFor="vacunados" className="font-bold mb-1 text-[#e67e22]">
            Vacunados
          </label>
          <select
            className="focus:border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-orange-400 focus:ring-white bg-[#fae0cf] dark:bg-[#19172c] text-black font-raleway-black border-[#e67e22] w-[170px] text-sm p-2 rounded-xl"
            onChange={handleVacunasChange}
          >
            <option value="2">Todos</option>
            <option value="1">Si</option>
            <option value="0">No</option>
          </select>
        </article>

        <article className="w-full flex flex-col gap-2  ml-[50%] mt-2 md:ml-0 md:mt-0 items-center justify-center">
          <label
            htmlFor="esterilizados"
            className="font-bold mb-1 text-[#e67e22]"
          >
            Esterilizados
          </label>
          <select
            className="focus:border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-orange-400 focus:ring-white bg-[#fae0cf] dark:bg-[#19172c] text-black font-raleway-black border-[#e67e22] w-[170px] text-sm p-2 rounded-xl"
            onChange={handleEsterilizadoChange}
          >
            <option value="2">Todos</option>
            <option value="0">Si</option>
            <option value="1">No</option>
          </select>
        </article>
      </section>
    </div>
  );
}
