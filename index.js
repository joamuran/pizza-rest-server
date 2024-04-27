// Llibreríes
import express from 'express';

// Per a les peticions POST
import bodyParser from 'body-parser';
const { urlencoded, json } = bodyParser;

// Controladors
import pizzaController from './controllers/pizzaController.js';
import begudaController from './controllers/begudaController.js';
import entrantsController from './controllers/entrantsController.js';

// Definim app com a aplicació express, amb el 
// mètode de factoria express().
const app = express();

// Configuració de l'aplicació per descodificar peticions
// del client i les passe a JSON
app.use(urlencoded({ extended: true }));
app.use(json());

// Servidor de fitxers estàtic per a les imatges
app.use(express.static('public'))

// L'app escolta pel port 8000
let defaultPort = 8000;
app.listen(defaultPort, () => {
    console.log('Escoltant pel port ' + defaultPort);
});


// Controlador per defecte
function DefaultController(req, res) {
    res.send('Error 404. Not Found');
}

// Definim el router
const router = express.Router();

router.get('/pizzes', pizzaController.getPizzes);
router.get('/beguda', begudaController.getBegudes);
router.get('/entrants', entrantsController.getEntrants);

app.use("/api/pizzeria", router);
app.use('*', DefaultController);
