import { useState, useEffect } from "react";

const useApi = () => {
  const [dataAnimales, setDataAnimales] = useState([]);
  const [idMatches, setIdMatches] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const api = "https://huachitos.cl/api/animales";

  useEffect(() => {
    setLoading(true);
    fetch(api)
      .then((res) => res.json())
      .then((item) => {
        const { data } = item;
        const ids = data.map((animal) => animal.id);
        setIdMatches(ids);
        if (data.length > 0) {
          setDataAnimales(data);
          console.log(data);
        } else {
          setDataAnimales([]);
          setError("No hay animales");
        }
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        setError("Error al cargar los animales");
      });
  }, []);

  //todos los animales
  const LengthAnimal = dataAnimales.length;
  const totalAdopcion = dataAnimales.filter(
    (item) => item.estado === "adopcion"
  ).length;
  const totalvacunados = dataAnimales.filter(
    (item) => item.vacunas === 1
  ).length;
  const totalestelizados = dataAnimales.filter(
    (item) => item.esterilizado === 1
  ).length;

  // perros
  const FilterDog = dataAnimales.filter((item) => item.tipo === "Perro");
  const DogAdopcion = FilterDog.filter((item) => item.estado === "adopcion");
  const Dogvacunas = FilterDog.filter((item) => item.vacunas === 1);
  const DogEsterizados = FilterDog.filter((item) => item.esterilizado === 1);

  const LengthDog = FilterDog.length;
  const LengthDogAdopcion = DogAdopcion.length;
  const LengthDogvacunas = Dogvacunas.length;
  const LengthDogEsterizados = DogEsterizados.length;

  // gatos
  const FilterCat = dataAnimales.filter((item) => item.tipo === "Gato");
  const CatAdopcion = FilterCat.filter((item) => item.estado === "adopcion");
  const Catvacunas = FilterCat.filter((item) => item.vacunas === 1);
  const CatEsterizados = FilterCat.filter((item) => item.esterilizado === 1);

  const LengthCat = FilterCat.length;
  const LengthCatAdopcion = CatAdopcion.length;
  const LengthCatvacunas = Catvacunas.length;
  const LengthCatEsterizados = CatEsterizados.length;

  return {
    dataAnimales,
    loading,
    error,
    LengthAnimal,
    totalAdopcion,
    totalvacunados,
    totalestelizados,
    FilterDog,
    LengthDog,
    LengthDogAdopcion,
    LengthDogvacunas,
    LengthDogEsterizados,
    FilterCat,
    LengthCat,
    LengthCatAdopcion,
    LengthCatvacunas,
    LengthCatEsterizados,
    idMatches,
  };
};

export default useApi;
