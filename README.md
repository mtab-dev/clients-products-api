## Modo de Uso:
- Entre no seu terminal e clone os arquvios com ```git clone https://github.com/mtab-dev/clients-products-api.git```
- Vá à pasta clonada com ```cd clients-products-api```
- Use ```npm install``` para instalar as bibliotecas do projeto
- Rode o servidor com ```npm run start:dev```
- O projeto estará no link: ```https://localhost:4242```
  
## Rotas e suas funcionalidades:
- ```/clients/list (GET)``` : Procura todos os clientes cadastrados
- ```/clients/list/:id (GET)``` : Procura os clientes cadastrados pelo id
- ```/clients/list/:email (GET)``` : Procura os clientes cadastrados pelo email
- ```/clients/list/:createdAt (GET)``` : Procura os clientes cadastrados pela data de cadastro
- ```/clients/register (POST)``` : Cadastra clientes
  
- ```/products/list (GET)``` : Procura todos os pedidos cadastrados
- ```/products/list/:id (GET)``` : Procura o pedido cadastrado pelo id
- ```/products/list/:createdAt (GET)``` : Procura o pedido  pela data de cadastro
- ```/products/register (POST)``` : Cadastra pedidos
  
- ```/log/list (GET)``` : Lista todos os log cadastrados
- ```/log/list/:id``` : lista os logs pelo id cadastro no banco de dados

Este projeto está sobre a [Licensa MIT](./LICENSE)
