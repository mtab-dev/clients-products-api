## Modo de Uso:
- Entre no seu terminal e clone os arquvios com ```git clone https://github.com/mtab-dev/clients-products-api.git```
- Vá à pasta clonada com ```cd clients-products-api```
- Use ```npm install``` para instalar as bibliotecas do projeto
- Rode o servidor com ```npm run start:dev```
- O projeto estará no link: ```https://localhost:4242```
  
## Rotas e suas funcionalidades:
- ```/clients/list (GET)``` : Procura todos os clientes cadastrados
- ```/clients/listId/:id (GET)``` : Procura os clientes cadastrados pelo id
- ```/clients/listEmail/:email (GET)``` : Procura os clientes cadastrados pelo email
- ```/clients/dateSort (GET)``` : Procura os clientes cadastrados pela data de cadastro
- ```/clients/register (POST)``` : Cadastra clientes
- ```/clients/delete/:id (DELETE)``` : Remove algum cliente pelo id
  
- ```/products/list (GET)``` : Procura todos os pedidos cadastrados
- ```/products/list/:id (GET)``` : Procura o pedido cadastrado pelo id
- ```/products/:dateSort (GET)``` : Ordena os pedidos pela data de cadastro
- ```/products/register (POST)``` : Cadastra pedidos
- ```/products/delete/:id (DELETE)``` : Remove um produto pelo Id
  
- ```/log/list (GET)``` : Lista todos os log cadastrados
- ```/log/id/:id (GET)``` : Lista os logs pelo id cadastrado no banco de dados
- ```/log/email/:email (GET)``` : Lista os logs pelo email cadastrado
- ```/log/delete/:id (DELETE)``` : Deletar algum log pelo id

Este projeto está sobre a [Licensa MIT](./LICENSE)
