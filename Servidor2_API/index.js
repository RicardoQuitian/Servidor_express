import  express  from 'express';
import router from './Rutas/rutas.js';

function main () {
    const app = express ();
    app.use(express.json())
    app.use(express.urlencoded({ extended: false}))
    app.use(router)
    app.listen (3000)
    console.log ("El servidor está arriba")

}

main()