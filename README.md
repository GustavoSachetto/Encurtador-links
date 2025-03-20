# Encurtador-links
![image](https://github.com/user-attachments/assets/5a5d80df-c569-4d7a-b679-a20a797b526a)

Api criada para encurtar links na web pela url fornecida, projeto desenvolvido para estudo das seguintes ferramentas: __Jest, Docker, MongoDB e Express__. A documentação da api pode ser acessada no link abaixo.

- __Documentação:__ https://documenter.getpostman.com/view/31981241/2sAYk8wPPb

## Desenvolvendo
Na criação desse projeto, trabalhei com as demais tecnologias:
- Node JS
- Express (criação de rotas)
- Docker (criação de imagem, container e compose.yml)
- Jest (testes unitários e testes de integração)
- Dotenv (configuração das variáveis de ambiente)
- MongoDB (através do Mongoose)

## Inicialiazação
__Para executar o projeto é necessário seguir os comandos abaixo:__

Baixar o projeto na sua máquina
```
git clone https://github.com/GustavoSachetto/Encurtador-links.git
```

Copiar arquivo env.exemplo para o arquivo env
```
cp .env.example .env
```

Configurar sua url do mongodb no arquivo .env
```
MONGODB_URI="<your-url>"
```

Instalar dependências para os testes
```
npm install
```

Executar todos os testes
```
npm run test
```

Executar o container docker com a imagem
```
docker compose up
```

Abrir pela url
```
http://localhost:8080/api/v1/link
```
  
*****
