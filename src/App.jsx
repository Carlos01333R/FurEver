import HeaderHero from "./component/HeaderHero";
import MainPet from "./component/MainPet";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <HeaderHero />
      <main className="w-[90%] md:max-w-[1100px] flex flex-col justify-center items-center m-auto mt-5 relative">
        <MainPet />
      </main>
      <footer className="w-full bottom-0">
        <Footer />
      </footer>
    </>
  );
}

export default App;
