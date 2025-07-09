import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import LoginForm from "../components/loginForm";
import bg3 from "../assets/imagens/bg3.png"

const LoginPage = () => {
    return(
        <>
        <Navbar/>
            <div className="flex flex-col min-h-screen relative h-[500px] bg-cover bg-center items-center justify-center"
        style={{ backgroundImage: `url(${bg3})` }}
            >
                <div className="flex flex-col min-h-screen " >
                    
                        <div className="flex-grow flex items-center justify-center">
                        <LoginForm/>
                        </div>
                    
                </div>
            </div> 
            <Footer/>   
        </>
    )
}

export default LoginPage