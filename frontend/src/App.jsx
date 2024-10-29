import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./components/Header";
import Hero from "./components/Hero.jsx";
import Publications from "./components/Publications.jsx";
import Tutorials from "./components/Tutorials.jsx";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
          <Hero />
          <Tutorials />
          <Publications />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;