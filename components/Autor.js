import React from 'react';

function Autor() {
    return (
        <div className="mt-12 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <h3 className="text-xl font-bold mb-4 dark:text-white">Sobre o Autor</h3>
            <div className="flex items-center">
                {/* Você pode adicionar uma imagem sua aqui se desejar */}
                {/* <img src="/path/to/your/image.jpg" alt="Kaique" className="w-16 h-16 rounded-full mr-4" /> */}
                <div>
                    <p className="dark:text-gray-300 leading-relaxed">
                        <strong>Kaique</strong>, o Mestre da Moeda, é um desenvolvedor apaixonado por tecnologia e fascinado pelo mundo da economia. Ele acredita que o conhecimento financeiro é uma ferramenta poderosa para capacitar indivíduos e transformar vidas, e criou este blog para tornar a informação econômica acessível a todos.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Autor;