const express = require('express');
const router = express.Router();
const controlador = require('../controladores/estudiantes');

router.get("/", controlador.getAll);
router.get("/:id", controlador.getById);
router.post("/", controlador.create);
router.put("/:id", controlador.update);
router.patch("/:id", controlador.updateName);  
router.delete("/:id", controlador.remove);

module.exports = router;
