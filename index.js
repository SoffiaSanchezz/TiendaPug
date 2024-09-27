/**
 * importaciones de dependencias
 */
import express from 'express';
import path from 'path'
import { fileURLToPath } from 'url';
import { dirname } from 'path';

/**
 * App Variables
 * Variables de entorno
 */

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
const port = process.env.PORT || "8000";

/**
 * Server Static file
 * Archivo estatico del servidor
 */

app.use(express.static(path.join(__dirname, 'public')));

/**
 * App configuration
 * configuraciones de la aplicacion
 */

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

/**
 * Sample products data (you may replace this with a database or another data source)
 * Datos de productos de muestra (puede reemplazarlos con una base de datos u otra fuente de datos)
 */

const products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
];

/**
 * Routes Definitions
 * Se definen las rutas de la aplicacion
 */

// Inicio de la aplicacion
app.get('/', (req, res) => {
    res.render('index', { title: 'Home' });
});

// inico de seccion de la aplicacion
app.get("/signIn", (req, res) => {
    res.render("signIn", { title: "Sing In" });
});

// Registro de la aplicacion
app.get("/signUp", (req, res) => {
    res.render("signUp", { title: "Sing Up" });
});

// Servicios del SENA de la aplicacion
app.get('/servicios', (req, res) => {
    res.render("servicios", { title: "Servicios" });
});

///todos-productos

app.get("/todosProductos", (req, res) => {
    res.render("todosProductos", { title: "Todos los Productos", products });
});


// Producto individual
/**
 * New route for all products
 */

/**
 * Server Activation
 * Activacion del servidor
 */

app.listen(port, () => {
    console.log(`El servidor está funcionando en http://localhost: ${port}`);
});

