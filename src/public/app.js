const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const exphbs = require('express-handlebars');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// Configurar Handlebars
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Configurar archivos estáticos
app.use(express.static('public'));

// Configurar rutas
app.get('/', (req, res) => {
  res.render('home'); // Renderizar la vista home.handlebars
});


io.on('connection', (socket) => {
    console.log('Usuario conectado');
  
    // Manejar evento de creación de producto
    socket.on('createProduct', (product) => {
      // Lógica para agregar el producto a la lista
      io.emit('updateProducts', productList);
    });
  
    // Manejar evento de eliminación de producto
    socket.on('deleteProduct', (productId) => {
      // Lógica para eliminar el producto de la lista
      io.emit('updateProducts', productList);
    });


const PORT = process.env.PORT || 5050;
server.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});