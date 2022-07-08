
const express = require('express');
const app = express();
const path = require('path');
const HomeRoute = require('./Routes/HomeRoute');
const productsRout = require ('./Routes/ProductsRoute');
const cartRouter = require ('./Routes/CartRoute')
const port = process.env.PORT || 8080;
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname, '../public')));

app.use('/', HomeRoute)
app.use('/api/products', productsRout);
app.use('/api/carts', cartRouter);

app.listen(port, ()=>{
    console.log (`Escuchando puerto ${port}`);
})