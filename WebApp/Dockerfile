# Use a imagem base do Node.js 18
FROM node:18

# Diretório de trabalho no container
WORKDIR /guard-front

# Copiar o arquivo package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instalar as dependências
RUN npm install

# Copiar o restante do código-fonte para o diretório de trabalho
COPY . .