import "./App.css";
import firstAbout from "./assets/img/first-about.jpg";
import first from "./assets/img/first.jpg";
import fourth from "./assets/img/fourth.jpg";
import secondAbout from "./assets/img/second-about.jpg";
import second from "./assets/img/second.jpg";
import third from "./assets/img/third.jpg";
import About from "./components/About";
import Article from "./components/Article";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="scroll-container">
      <section className="section hero-section">
        <Hero />
      </section>

      <section className="sticky-section">
        <div className="flex w-full h-screen">
          <div className="w-1/2">
            <img
              src={first}
              alt="image projet"
              className="w-full h-full object-cover"
            />
          </div>
          <Article
            title="Perspective urbaine"
            description="La géométrie comme langage, l'ombre comme ponctuation."
          />
        </div>
      </section>

      <section className="sticky-section">
        <div className="flex w-full h-screen">
          <Article
            title="Tour première | Shangai, 2019"
            description="Une verticalité qui dialogue avec la densité urbaine tout en préservant une légèreté visuelle grâce à sa façade pixélisée."
          />
          <div className="w-1/2">
            <img
              src={second}
              alt="image projet"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="sticky-section">
        <div className="flex w-full h-screen">
          <div className="w-1/2">
            <img
              src={third}
              alt="image projet"
              className="w-full h-full object-cover"
            />
          </div>
          <Article
            title="Résidence horizon | Barcelone, 2018"
            description="Un jeu de volumes suspendus qui redéfinit l'habitat collectif contemporain."
          />
        </div>
      </section>

      <section className="sticky-section">
        <div className="flex w-full h-screen">
          <Article
            title="Musée de la lumière | Tokyo, 2021"
            description="Quand l'architecture devient médium entre la lumière naturelle et l'expérience contemplative."
          />
          <div className="w-1/2">
            <img
              src={fourth}
              alt="image projet"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="sticky-section w-full h-screen bg-amber-50 flex flex-col">
        <div className="flex justify-center items-center h-full relative pt-32">
          <div className="absolute right-[5%] w-1/6">
            <About
              description="AXIOM Architecture a été fondé en 2018 par Sara Nakamura et Thomas Leroy, avec une vision partagée : créer des espaces qui transcendent leur fonction première. Notre studio rassemble aujourd'hui douze architectes et designers passionnés par la recherche de solutions innovantes et durables.
"
            />
          </div>
          <div className="w-2/3">
            <img
              src={firstAbout}
              alt="image about"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="flex justify-center items-center h-full relative  bg-amber-50 pt-52 pb-52">
          <div className="absolute left-[5%] w-1/6">
            <About
              description="AXIOM Architecture a été fondé en 2018 par Sara Nakamura et Thomas Leroy, avec une vision partagée : créer des espaces qui transcendent leur fonction première. Notre studio rassemble aujourd'hui douze architectes et designers passionnés par la recherche de solutions innovantes et durables.
"
            />
          </div>
          <div className="w-2/3">
            <img
              src={secondAbout}
              alt="image about"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
