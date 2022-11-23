# Teste técnico para a vaga de Back-end

## Tecnologias:
- Node
- TypeScript
- Prisma
- Docker
- PostgreSQL
- Jest
- Supertest
- Swagger

## Como executar:

- Instale as dependências com ```npm install```;
- Inicie o container do banco de dados com ```docker compose up```;
- Rodar todas as migrations do prisma com ```npx prisma migrate dev```;
- Inicie o servidor com ```npm run dev```;
- Para executar os testes, basta usar ```npm test```, e caso deseje executar um teste por vez, utilize ```npm test -t "nome do teste.ts"```;
- Para ver a documentação, basta digitar no navegador ```http://localhost:8080/api-docs/```;
- Para abrir o Prisma Studio (db visual editor) ```npx prisma studio```;