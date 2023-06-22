# Use uma imagem base apropriada
FROM node:14-alpine

# Defina o diretório de trabalho
WORKDIR /app

# Copie os arquivos de origem para o contêiner
COPY package*.json ./
COPY yarn.lock ./

# Instale as dependências
RUN yarn install --production

# Copie o restante dos arquivos para o contêiner
COPY . .

# Build da aplicação
RUN yarn build

# Exponha a porta que a aplicação utiliza
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["yarn", "start"]
