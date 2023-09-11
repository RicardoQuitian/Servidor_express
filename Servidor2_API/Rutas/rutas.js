import {Router} from 'express'
import pg from 'pg';

const { Pool } =pg

const router = Router();

const conexion = new Pool({ /*para realizar una nueva conección, se coloca new Pool*/
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "302410ricardo",
    database: "atm"

}) 

router.get('/consultaSaldo', async function ( req, res ) {  /*Funcionalidad para consulatar a la base de datos*/
     let respuesta_base = await conexion.query("SELECT * FROM usuarios") /*SELECT * FROM usuarios es lo que trae los datos de la base de datos*/
     res.status(200).json(respuesta_base.rows) /*Y con esta linea le indicamos que devualva el resultado*/
})

export default router;