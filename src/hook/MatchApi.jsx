import { useState, useEffect } from "react";
const useMatchApi = () => {
  const [animal, setAnimal] = useState(null);
  const [filter, setFilter] = useState(65);
  const [fristImage, setFristImage] = useState("");

  useEffect(() => {
    if (filter !== null) {
      fetch(`https://huachitos.cl/api/animal/${filter}`)
        .then((res) => res.json())
        .then((item) => {
          const { data } = item;
          setAnimal(data);
          const imagenes = data.imagenes.map((imagen) => imagen.imagen);
          const PrimeraImagen = imagenes.length > 0 ? imagenes[0] : null;
          setFristImage(PrimeraImagen);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [filter]);

  return {
    animal,
    setFilter,
    fristImage,
  };
};

export default useMatchApi;
