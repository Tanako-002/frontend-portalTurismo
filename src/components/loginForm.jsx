import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
 
 
const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const navigate = useNavigate();  
   
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post("http://localhost:5000/api/auth/login", {
          email,
          password: senha,
        });
   
        const userData = response.data;
        localStorage.setItem("user", JSON.stringify(userData));
   
        alert("Usuário logado com sucesso!");
        navigate("/");
      } catch (error) {
        if (error.response) {
          alert("Erro ao logar usuário. Email ou senha incorretos");
        } else {
          alert("Erro ao conectar ao servidor");
        }
      }
    };
   
 
 
 
    return(
        <>
            <div className="">

            </div>
            <div className="bg-white p-8 rounded-2x1 shadow-lg w-full max-w-md">
                <h2 className="text-2x1 font-semibold text-center mb-6"> Login </h2>
                <form>
                    <div>
                        <label>E-mail</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500 text-sm sm:text-base"
                        placeholder="Digite seu E-mail"/>
                    </div>
                    <div>
                        <label>Senha</label>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            required
                            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500 text-sm sm:text-base"
                            placeholder="Digite seu E-mail"/>
                    </div>
                    <button type="submit" className="bg-violet-500 hover:bg-violet-600 px-6 py-2
                    rounded-lg transition duration-300 w-full sm:w-full mt-2 text-white">
                        Entrar</button>
                </form>
                <p className="mt-6 text-center text-sm text-gray-600">Não tem conta?
                    <a href="/register" className="text-violet-600 houver:underline text-center p-2">Cadastre-se</a>
                </p>
            </div>
        </>
 
    )
}
 
export default LoginForm