import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Cerejeira from "../assets/imagens/cerejeira.png"
import Ramocerejeira from "../assets/imagens/ramocerejeira.jpg"
 
const AboutPage = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-gradient-to-b from-violet-500 via-pink-200 to-pink-100">
        {/* Navbar */}
        <div className="shadow-md backdrop-blur-lg bg-white/30 fixed w-full z-50">
          <Navbar />
        </div>
 
        {/* Seção Principal */}
        <section className="flex flex-col items-center justify-center text-center mt-24 px-6">
          <h1 className="text-5xl font-extrabold text-violet-900 drop-shadow-lg animate-fade-in">
            Sobre Nova Serra
          </h1>
          <p className="text-lg text-white mt-2 max-w-2xl">
            Nova Serra é um refúgio de natureza exuberante, cultura vibrante e experiências inesquecíveis. Nossa missão é conectar pessoas à essência autêntica desse lugar mágico.
          </p>
        </section>
 
        {/* Seção de Destaque */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-8 mt-12">
          <div className="p-6 bg-white/70 rounded-lg shadow-lg hover:scale-105 transition-all">
            <h2 className="text-xl font-semibold mt-4">Nossa História</h2>
            <p className="text-gray-700">Uma jornada rica em tradição e cultura que atravessa gerações.</p>
          </div>
          <div className="p-6 bg-white/70 rounded-lg shadow-lg hover:scale-105 transition-all">
            <h2 className="text-xl font-semibold mt-4">Nossos Valores</h2>
            <p className="text-gray-700">Autenticidade, preservação da natureza e celebração da cultura local.</p>
          </div>
        </div>
 
        {/* Equipe e Visão */}
        <section className="mt-12 px-6 text-center">
          <h2 className="text-3xl font-bold text-violet-900">Nosso Compromisso</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mt-2">
            Trabalhamos para promover o turismo sustentável, apoiando artesãos locais e incentivando o respeito pela natureza.
          </p>
        </section>
 
        {/* Footer */}
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </>
  );
};
 
export default AboutPage;