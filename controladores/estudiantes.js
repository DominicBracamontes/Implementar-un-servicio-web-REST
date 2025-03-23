const estudiantes = [
    { nombre: "Juan Lopez", matricula: "100" },
    { nombre: "Ana Gomez", matricula: "101" },
    { nombre: "Martin Sanchez", matricula: "102" },
    { nombre: "Luisa Martinez", matricula: "103" },
    { nombre: "Santiago Resce", matricula: "104" },
    { nombre: "Maria Lopez", matricula: "105" },
    { nombre: "Luis Hernandez", matricula: "106" },
    { nombre: "Sergio Garcia", matricula: "107" },
    { nombre: "Sergio Diaz", matricula: "108" },
    { nombre: "Dominic Lopez", matricula: "109" }
];

const getAll = (req, res) => {
    res.json(estudiantes);
}

const getById = (req, res) => {
    const estudiante = estudiantes.find(e => e.matricula === req.params.id);
    if (estudiante) {
        res.json(estudiante);
    } else {
        res.status(404).send("Estudiante no encontrado");
    }
}

const create = (req, res) => {  
    const { nombre, matricula } = req.body;

    const existe = estudiantes.some(e => e.matricula === matricula);
    if (existe) {
        return res.status(400).send("Ya existe un estudiante con esta matricula");
    }

    const nuevoEstudiante = { nombre, matricula };
    estudiantes.push(nuevoEstudiante);
    res.status(201).json({ mensaje: "Estudiante agregado", estudiante: nuevoEstudiante });
}

const update = (req, res) => { 
    const index = estudiantes.findIndex(e => e.matricula === req.params.id);
    if (index !== -1) {
        const { nombre, matricula } = req.body;
        estudiantes[index] = { nombre, matricula };
        res.json({ mensaje: `Estudiante con matricula ${req.params.id} actualizado`, estudiante: estudiantes[index] });
    } else {
        res.status(404).send("El estudiante no existe");
    }
}

const updateName = (req, res) => {
    const estudiante = estudiantes.find(e => e.matricula === req.params.id);
    if (estudiante) {
        const { nombre } = req.body;
        if (nombre) {
            estudiante.nombre = nombre;
            res.json({ mensaje: `Nombre del estudiante con matricula ${req.params.id} actualizado`, estudiante });
        } else {
            res.status(400).send("Ingresa un nuevo nombre");
        }
    } else {
        res.status(404).send("Estudiante no encontrado");
    }
}

const remove = (req, res) => {
    const index = estudiantes.findIndex(e => e.matricula === req.params.id);
    if (index !== -1) {
        estudiantes.splice(index, 1);
        res.send(`Estudiante con ID ${req.params.id} eliminado`);
    } else {
        res.status(404).send("Estudiante no encontrado");
    }
}

module.exports = { getAll, getById, create, update, updateName, remove };
