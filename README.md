# byecar_frontend

## Como rodar a aplicação

### Ambiente e Ferramentas:

- Yarn: https://yarnpkg.com/
- NPM: https://www.npmjs.com/

### Passo a passo:

1. No seu terminal, clone o front da aplicação com o seguinte comando: `git clone git@github.com:hiquebarros/byecar_frontend.git`
2. Baixe as dependêncas do projeto utilizando o gerenciador de pacotes que preferir, com o seguints comandos:
   `yarn`
   ou
   `npm install`
3. Sua aplicação já deve estar pronta para ser startada, agora resta apenas rodar o comando `yarn start` ou `npm start` no seu terminal.

## Rotas e tokens

A rota principal da aplicação é a localhost:PORT/byecar/:token, qualquer url diferente desta irá renderizar a tela de 404. Nesta rota, no momento de montagem da página é feita uma requisição usando o token da url como header de authorization, a lógica da API vai recuperar o payload deste token e fornecer os dados do cliente. Dessa forma, é necessário contruir o token no site https://jwt.io/.

## Contruindo o token

1. Acesse o site https://jwt.io/
2. Insira um dos id's abaixo dentro do payload.

- Token do client Henrique: 970f0232-6c06-11ed-a1eb-0242ac120002
- Token do client Tiago: 853535b2-6c0c-11ed-a1eb-0242ac120002
- Token do client Thiago: 95ec05ac-6c0c-11ed-a1eb-0242ac120002

3. Insira a secret_key abaixo dentro da signature do token.

- Secret_KEY: VmYq3t6w9z$C&F)J@NcQfTjWnZr4u7x!

 ![Orientações](https://cdn.discordapp.com/attachments/692881204256702536/1046542176739397642/Screenshot_from_2022-11-27_18-28-46.jpg)

4. Copie o token fornecido pelo site na url da aplicação. Por exemplo: localhost:3000/byecar/SEUTOKEN.

 ![Orientações2](https://cdn.discordapp.com/attachments/692881204256702536/1046550175797223495/Screenshot_from_2022-11-27_18-57-40.png)


