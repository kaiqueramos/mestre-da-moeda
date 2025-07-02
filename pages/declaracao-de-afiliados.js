import React from 'react';

function DeclaracaoAfiliados() {
    return (
        <div className="container mx-auto px-4 py-8 dark:bg-gray-900 dark:text-white">
            <h1 className="text-3xl font-bold mb-6">Declaração de Afiliados</h1>
            <p className="mb-4">
                Esta página divulga nossa relação de afiliados com outros sites e empresas. Quando você clica em um link de afiliado e faz uma compra, podemos receber uma comissão.
            </p>

            <h2 className="text-xl font-semibold mb-3">Como Funciona o Programa de Afiliados</h2>
            <p className="mb-4">
                Participamos de diversos programas de afiliados. Isso significa que podemos colocar links para produtos e serviços em nosso site. Se você clicar nesses links e fizer uma compra, podemos receber uma comissão. Essa comissão nos ajuda a manter e melhorar nosso site.
            </p>

            <h2 className="text-xl font-semibold mb-3">Nossa Política de Transparência</h2>
            <p className="mb-4">
                Acreditamos na transparência. Sempre nos esforçaremos para divulgar quando um link é um link de afiliado.  No entanto, para evitar confusão, considere que qualquer link que o leve a um produto ou serviço de terceiros é um link de afiliado, do qual poderemos receber compensação.
            </p>

            <h2 className="text-xl font-semibold mb-3">Nossos Parceiros Afiliados</h2>
            <p className="mb-4">
                Atualmente, somos afiliados das seguintes empresas (lista não exaustiva e sujeita a alterações):
            </p>
            <ul className="list-disc list-inside mb-4">
                <li>Amazon Associates</li>
            </ul>

            <h2 className="text-xl font-semibold mb-3">Isenção de Responsabilidade</h2>
            <p className="mb-4">
                Embora possamos receber uma comissão por compras feitas através de nossos links de afiliados, nossas análises e opiniões são sempre imparciais e honestas. Não somos influenciados pela possibilidade de uma comissão.  Recomendamos apenas produtos e serviços que acreditamos que serão valiosos para nossos usuários.
            </p>

            <p className="mb-4">
                Você é responsável por sua própria diligência ao comprar qualquer produto ou serviço, incluindo a verificação das especificações do produto, termos de serviço, garantias e políticas de devolução.
            </p>

            <p className="mb-4">
                Ao usar nosso site, você concorda com esta declaração de afiliados.
            </p>

            <p className="text-sm text-gray-500 dark:text-gray-400">
                Última atualização: 08 de junho de 2025
            </p>
        </div>
    );
}

export default DeclaracaoAfiliados;