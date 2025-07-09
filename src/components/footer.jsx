import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <>
        <footer className="w-full bg-gradient-to-r from-pink-200 to-violet-600 text-white py-3 px-2 shadow-lg mt-auto">
            <div className="w-full mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="text-center md:text-left mb-4 md:mb-0">
                    <p className="text-sm text-white"> Nova serra verde. Todos os direitos reservados</p>
                </div>

                <div className="flex space-x-6">
                <a href="#" className="hover:text-pink-300"><FaFacebookF /></a>
                <a href="#" className="hover:text-pink-300"><FaWhatsapp/></a>
                <a href="#" className="hover:text-pink-300"><FaInstagram/></a>
                </div>
                
            </div>
        </footer>
        </>
    )
}

export default Footer