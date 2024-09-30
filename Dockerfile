# Usa una imagen base de Node.js para el frontend
FROM node:18

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos del frontend
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos
COPY . .

# Compila la aplicación React (o similar)
RUN npm run build

# Instala un servidor web para servir el frontend
RUN npm install -g serve

# Expone el puerto del servidor
EXPOSE 3000

# Comando para servir el frontend
CMD ["serve", "-s", "build"]

