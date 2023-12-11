const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const exphbs = require('express-handlebars');
const viewRoutes = require('./routes/viewRoutes');
const productRoutes = require('./routes/productRoutes');
const ProductManager = require('./managers/productManager');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// Permitir el acceso desde cualquier origen 
io.origins('*:*');

io.on('connection', (socket) => {
  console.log('Usuario conectado');
  
  //  creación de producto
  socket.on('createProduct', (product) => {
    ProductManager.addProduct(product);
  });
  
  //  eliminación de producto
  socket.on('deleteProduct', (productId) => {
    ProductManager.deleteProduct(productId);
  });
});

// Handlebars
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


app.use(express.static('public'));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/', viewRoutes);
app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5050;
server.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});