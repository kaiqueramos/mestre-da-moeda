# Configurando o Formulário de Contato com Formspree

Para que o formulário da página de contato funcione e envie as mensagens para o seu e-mail, siga os passos abaixo.

## Passo 1: Crie uma Conta no Formspree

1.  Acesse o site [formspree.io](https://formspree.io/).
2.  Clique em **"Get Started"** ou **"Sign Up"** para criar uma nova conta. O plano gratuito é suficiente para a maioria dos projetos pessoais.

## Passo 2: Crie um Novo Formulário

1.  Após fazer login, no seu dashboard, clique em **"+ New Form"**.
2.  Dê um nome para o seu formulário (ex: "Formulário Blog Mestre da Moeda").
3.  Selecione o tipo de projeto (pode ser "Personal Project").
4.  Clique em **"Create Form"**.

## Passo 3: Obtenha o Endpoint do Formulário

1.  Após criar o formulário, o Formspree fornecerá um **endpoint (URL)** único. Ele terá um formato parecido com este:
    ```
    https://formspree.io/f/xxxxxxxx
    ```
    Onde `xxxxxxxx` é o ID exclusivo do seu formulário.

## Passo 4: Atualize o Código do Site

1.  Abra o arquivo `pages/contato.js` no seu projeto.
2.  Encontre a seguinte linha de código:
    ```javascript
    <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
    ```
3.  Substitua `https://formspree.io/f/YOUR_FORM_ID` pelo endpoint que você copiou do Formspree.

    **Exemplo:**
    Se o seu endpoint for `https://formspree.io/f/mqkvpobr`, a linha deverá ficar assim:
    ```javascript
    <form action="https://formspree.io/f/mqkvpobr" method="POST">
    ```

## Passo 5: Teste o Formulário

1.  Salve o arquivo `contato.js`.
2.  Inicie o seu site localmente (`npm run dev` ou `yarn dev`).
3.  Acesse a página de contato, preencha o formulário e envie uma mensagem de teste.
4.  Verifique a caixa de entrada do e-mail que você usou para se cadastrar no Formspree. Você deverá receber a mensagem de teste.

Pronto! Seu formulário de contato está configurado e funcionando.
