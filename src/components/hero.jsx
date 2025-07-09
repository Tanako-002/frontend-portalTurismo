import React from 'react';


const Hero = (props) => {
    return (
        <div
            className="relative h-[918px] bg-cover bg-center flex items-center justify-center text-white"
            style={{ backgroundImage: `url(${props.Background})` }}
        >
            <div />
            <div className="relative z-10 text-center p-4">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                    {props.titulo}
                </h1>
                <p className="text-lg md:text-x2 mb-6 max-w-3xl mx-auto drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                    {props.paragrafo}
                </p>
                <a
                    href={props.rota}
                    className="bg-pink-300 hover:bg-violet-400 text-white px-7 py-4 rounded-lg transition duration-300"
                >
                    {props.botao}
                </a>
            </div>
        </div>
    );
};

export default Hero;