import React from 'react'
import { toast } from 'react-toastify';

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Enviando....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "e83ea9bc-3986-4c99-8369-58e10c23d761");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("");
        toast.success("Mensagem Enviada com sucesso!");
        event.target.reset();
      } else {
        console.log("Erro", data);
        toast.error(data.message)
        setResult("");
      }
    };
    return (
        <div className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden" id="Contact">
            <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">Entre em  <span className="underline underline-offset-4 decoration-1 under font-light"> Contato Conosco </span></h1>
            <p className="text-center text-gray-500 mb-12 max-w-80 mx-auto">Pronto para dar o próximo passo? Vamos construir seu futuro juntos!</p>

            <form onSubmit={onSubmit} className="max-w-2xl mx-auto text-gray-600 pt-8">
                <div className="flex flex-wrap">
                    <div className="w-full md:w-1/2 text-left">
                        Seu Nome
                        <input 
                        className = "w-full border border-gray-300 rounded py-3 px-4 mt-2" 
                        type="text" 
                        name="Name"
                        placeholder="Seu Nome" 
                        required />
                    </div>
                    <div className="w-full md:w-1/2 text-left md:pl-4" >
                        Seu Email
                        <input 
                        className = "w-full border border-gray-300 rounded py-3 px-4 mt-2" 
                        type="email" 
                        name="Email"
                        placeholder="Seu Email" 
                        required />
                    </div>
                </div>
                <div className="my-6 text-left">
                    Mensagem
                    <textarea
                    className="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none" 
                    name="Message" 
                    placeholder="Mensagem"
                    required
                    >

                    </textarea>
                </div>
                <button className="bg-blue-600 text-white py-2 px-12 mb-10 rounded">{result ? result : "Enviar Mensagem"}</button>
            </form>
        </div>
    )
}

export default Contact  