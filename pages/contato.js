import React from 'react';

function Contato() {
    return (
        <div className="container mx-auto px-4 py-8 dark:bg-gray-900">
            <h1 className="text-3xl font-bold mb-6 dark:text-white text-center">Entre em Contato</h1>
            <p className="mb-8 dark:text-gray-300 text-center max-w-2xl mx-auto">
                Tem alguma dúvida, sugestão ou proposta? Preencha o formulário abaixo ou, se preferir, envie um e-mail para <a href="mailto:kaiqueramosalt@gmail.com" className="text-blue-500 hover:underline">kaiqueramosalt@gmail.com</a>.
            </p>
            <div className="max-w-lg mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
                <form action="https://formspree.io/f/manjvgre" method="POST">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 dark:text-gray-200 font-bold mb-2">Nome</label>
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            required 
                            className="w-full px-3 py-2 border rounded-lg text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:outline-none focus:border-blue-500" 
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 dark:text-gray-200 font-bold mb-2">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            required 
                            className="w-full px-3 py-2 border rounded-lg text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:outline-none focus:border-blue-500" 
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="message" className="block text-gray-700 dark:text-gray-200 font-bold mb-2">Mensagem</label>
                        <textarea 
                            id="message" 
                            name="message" 
                            required 
                            rows="5" 
                            className="w-full px-3 py-2 border rounded-lg text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:outline-none focus:border-blue-500"
                        ></textarea>
                    </div>
                    <div className="text-center">
                        <button 
                            type="submit" 
                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-300"
                        >
                            Enviar Mensagem
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contato;