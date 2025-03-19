import "./App.css";
import first from "./assets/img/first.jpg";
import fourth from "./assets/img/fourth.jpg";
import second from "./assets/img/second.jpg";
import third from "./assets/img/third.jpg";
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
            <img src={first} alt="" className="w-full h-full object-cover" />
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
            <img src={second} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      <section className="sticky-section">
        <div className="flex w-full h-screen">
          <div className="w-1/2">
            <img src={third} alt="" className="w-full h-full object-cover" />
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
            <img src={fourth} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
