const express = require('express');
const app = express();
app.use(express.json());

const controlador = require('./controladores/estudiantes'); 

const router = require('express').Router();

router.get("/", controlador.getAll);      
router.get("/:id", controlador.getById);  
router.post("/", controlador.create);     
router.put("/:id", controlador.update);   
router.patch("/:id", controlador.updateStudent);   
router.delete("/:id", controlador.remove); 

app.use("/estudiantes", router);

const port = 3023;

app.listen(port, () => {
    console.log('Escuchando en puerto', port);
});
