import React from "react";
import hero from "../assets/img/hero.jpg";

const Hero = () => {
  return (
    <div className="h-screen bg-red-500 w-full relative">
      <h1 className="absolute text-white uppercase font-bold font-[Helvetica] top-[5%] left-[3%] text-3xl">
        <span className="uppercase font-normal">A</span>XIOM
      </h1>
      <img src={hero} alt="img hero" className="w-full h-full object-cover" />
      <p className="text-white font-[Helvetica] absolute bottom-[10%] left-[3%] w-1/4">
        AXIOM explore l'équilibre entre ombre et lumière, vide et matière. Nous
        créons des espaces qui dialoguent avec leur environnement tout en
        proposant de nouvelles perspectives. Notre architecture ne s'impose pas
        : elle révèle.
      </p>
    </div>
  );
};

export default Hero;
