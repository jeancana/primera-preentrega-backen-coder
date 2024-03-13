// Importando la libreria express 
import express from 'express' 

// Importando Rutas Dinamicas 
import cartsRouter from './routers/carts.routes.js'
import productsRouter from './routers/products.routes.js'

// Configuramos el puerto 
const PORT = 8080

//Configuracion de los Servicios de la App
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Asignacion de Rutas para servicios de contenidos dinamicos
app.use('/api/carts', cartsRouter) // Endpoint para el manejo de Carritos de Compra 
app.use('/api/products', productsRouter) // Endpoint para el manejo de Productos


// Poniendo a Escuchar el Servidor 
app.listen(PORT, () => console.log(`Backend activo en puerto ${ PORT }`))