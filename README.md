📦 CRUD de Produtos - API Node.js
Uma API completa para gerenciamento de produtos, desenvolvida em Node.js com operações CRUD (Create, Read, Update, Delete).

🚀 Funcionalidades
✅ Criar novos produtos

📋 Listar todos os produtos

🔍 Buscar produto por ID

✏️ Atualizar produtos existentes

🗑️ Excluir produtos

🏷️ Categorização de produtos

💰 Controle de valores e estoque

🛠️ Tecnologias Utilizadas
Node.js - Ambiente de execução JavaScript

Express.js - Framework web para Node.js

MongoDB - Banco de dados NoSQL (ou outro de sua preferência)

Mongoose - ODM para MongoDB

CORS - Habilitação de cross-origin requests

Dotenv - Gerenciamento de variáveis de ambiente

📋 Pré-requisitos
Node.js (versão 14 ou superior)

npm ou yarn

MongoDB (local ou Atlas)

Git

⚙️ Instalação
Clone o repositório

bash
git clone https://github.com/ronaldo-lelis/produtos-backend.git
cd produtos-backend
Instale as dependências

bash
npm install
Configure as variáveis de ambiente

bash
cp .env.example .env
Edite o arquivo .env com suas configurações:

env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/crud-produtos
NODE_ENV=development
Execute a aplicação

bash
# Desenvolvimento
npm run dev

# Produção
npm start
🎯 Endpoints da API
📦 Produtos
Método	Endpoint	Descrição
GET	/api/produtos	Lista todos os produtos
GET	/api/produtos/:id	Busca produto por ID
POST	/api/produtos	Cria um novo produto
PUT	/api/produtos/:id	Atualiza um produto
DELETE	/api/produtos/:id	Exclui um produto
📝 Exemplos de Uso
Criar Produto
POST /api/produtos

json
{
  "titulo": "Smartphone Samsung Galaxy",
  "valor": 1599.99,
  "categoria": "Eletrônicos",
  "descricao": "Smartphone com 128GB de armazenamento",
  "estoque": 50
}
Resposta
json
{
  "id": "507f1f77bcf86cd799439011",
  "titulo": "Smartphone Samsung Galaxy",
  "valor": 1599.99,
  "categoria": "Eletrônicos",
  "descricao": "Smartphone com 128GB de armazenamento",
  "estoque": 50,
  "dataCriacao": "2024-01-15T10:30:00.000Z"
}
Listar Produtos
GET /api/produtos

json
{
  "produtos": [
    {
      "id": "507f1f77bcf86cd799439011",
      "titulo": "Smartphone Samsung Galaxy",
      "valor": 1599.99,
      "categoria": "Eletrônicos",
      "estoque": 50
    }
  ],
  "total": 1,
  "pagina": 1,
  "totalPaginas": 1
}
🗂️ Estrutura do Projeto
text
src/
├── controllers/     # Lógica das rotas
├── models/          # Modelos do banco de dados
├── routes/          # Definição das rotas
├── middleware/      # Middlewares customizados
├── config/          # Configurações do banco
└── app.js           # Arquivo principal
🧪 Testando a API
Com cURL
bash
# Listar produtos
curl http://localhost:3000/api/produtos

# Criar produto
curl -X POST http://localhost:3000/api/produtos \
  -H "Content-Type: application/json" \
  -d '{"titulo":"Produto Teste","valor":99.99,"categoria":"Teste"}'
Com Postman
Importe a coleção do Postman

Configure a URL base: http://localhost:3000

Teste os endpoints disponíveis

🔧 Scripts Disponíveis
bash
npm run dev      # Desenvolvimento com nodemon
npm start        # Produção
npm test         # Executar testes
npm run lint     # Análise de código
🌐 Deploy
Deploy na nuvem (Heroku, Railway, etc.)
bash
# Configure as variáveis de ambiente
heroku config:set MONGODB_URI=sua_string_conexao
heroku config:set NODE_ENV=production

# Faça o deploy
git push heroku main

🤝 Contribuição
Fork o projeto

Crie uma branch para sua feature (git checkout -b feature/AmazingFeature)

Commit suas mudanças (git commit -m 'Add some AmazingFeature')

Push para a branch (git push origin feature/AmazingFeature)

Abra um Pull Request

📄 Licença
Este projeto está sob a licença MIT. Veja o arquivo LICENSE para detalhes.

👨‍💻 Autor
Ronaldo Lelis

GitHub: @ronaldo-lelis

Email: delelis.locutor@gmail.com

🙏 Agradecimentos
Agradecimentos a todos que contribuíram para este projeto e à comunidade de desenvolvedores Node.js.

⭐️ Se este projeto foi útil, deixe uma estrela no repositório!

<div align="center">
🚀 Desenvolvido com ❤️ usando Node.js

</div>

