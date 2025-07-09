import React from "react";  // Importa o React
import CardService from "./cardService";  // Importa o componente CardService que será usado para exibir cada card
import { Swiper, SwiperSlide } from 'swiper/react'  // Importa componentes Swiper para o carrossel
import 'swiper/css'  // Importa estilos padrão do Swiper

// Importa imagens para usar nos cards
import museudoamanha from "../assets/imagens/museudoamanha.png"
import pracadojapao from "../assets/imagens/pracadojapao.png"
import paodeacucar from "../assets/imagens/paodeacucar.png"
import parquenautico from "../assets/imagens/parquenautico.png"
import jardimbotanico from "../assets/imagens/jardimbotanico.png"


// Array de objetos com dados dos pontos turísticos (imagem, título e descrição)
const tourist_places = [
    { Image: museudoamanha, title: "Museu do Amanhã", description: "Explore a inovação" },
    { Image: pracadojapao, title: "Praça do Japão", description: "Um pedacinho da historia japonesa" },
    { Image: paodeacucar, title: "Pão de Açucar ", description: "Melhor lugar para apreciar a vista" },
    { Image: parquenautico, title: "Parque Nautico", description: "exprore as águas" },
    { Image: jardimbotanico, title: "Jardim Bôtanico", description: "Conheça um pouco mais as sobre plantas" },
]

// Componente funcional Carousel que renderiza o carrossel dos pontos turísticos
const Carousel = () => {

    return (
        <>
            {/* Container principal com z-index alto para sobreposição */}
            <div className=" relative z-10 ">
                {/* Título principal da seção */}
                <h1 className=" text-3xl font-bold text-center mt-32 text-black drop-shadow-lg">
                    Pontos turísticos locais mais visitados
                </h1>

                <div>
                    {/* Condicional para verificar se há mais de 3 pontos turísticos */}
                    {tourist_places.length > 3 ? (
                        // Caso tenha mais de 3, exibe o Swiper configurado para mostrar 2 ou 3 cards conforme a largura da tela
                        <Swiper
                            slidesPerView={2}  // Número inicial de slides visíveis
                            spaceBetween={20}  // Espaçamento entre os slides
                            loop={true}        // Faz o carrossel loopar infinitamente
                            breakpoints={{     // Configuração responsiva dos slides por view e espaçamento
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                            }}
                        >
                            {/* Mapeia cada ponto turístico para um slide */}
                            {tourist_places.map((place, index) => (
                                <SwiperSlide key={index}>
                                    {/* Renderiza o card do ponto turístico */}
                                    <CardService
                                        img={place.Image}
                                        alt={place.description}
                                        titulo={place.title}
                                        descricao={place.description}
                                        link="#"
                                        botao="Saiba Mais"
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    ) : (
                        // Caso tenha 3 ou menos pontos turísticos, configura o Swiper para mostrar menos cards
                        <Swiper
                            slidesPerView={2}  // Número inicial de slides visíveis
                            spaceBetween={20}  // Espaçamento entre os slides
                            loop={true}        // Loop infinito
                            breakpoints={{
                                640: {
                                    slidesPerView: 1,  // Em telas pequenas mostra só 1 slide
                                    spaceBetween: 20,
                                },
                                1024: {
                                    slidesPerView: 2,  // Em telas maiores mostra 2 slides
                                    spaceBetween: 30,
                                },
                            }}
                        >
                            {tourist_places.map((place, index) => (
                                <SwiperSlide key={index}>
                                    <CardService
                                        img={place.Image}
                                        alt={place.description}
                                        titulo={place.title}
                                        descricao={place.description}
                                        link="#"
                                        botao="Saiba Mais"
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>

                    )}
                </div>
            </div>
        </>
    )
}

export default Carousel  // Exporta o componente para uso externo
