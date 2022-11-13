const Status = require('../models/status');

const createStatus = async (req, res) => {
    const { name } = req.body;
    const newStatus = new Status({ name });
    newStatus.save((err, status) => {
        if (err) {
            return res.status(400).send({ message: 'Error al crear el estado '});
        }
        return res.status(201).send(status);
    })
}

const getStatuses = async (req, res) => {
    Status.find({}, (err, status) => {
        if(err){
            return res.status(400).send({ message: 'Error al obtener los estados' });
        }
            return res.status(200).send({user: user, result: result});
    })
}

const getStatus = async (req, res) => {
    Status.findById(id, (err,status) => {
        if (err) {
            return res.status(400).send({ message: 'Error al obtener el estado'});
        }
        if (!status) {
            return res.status(404).send({ message: 'No se encontró el estado '});
        }
        return res.status(200).send(user);
    })
}


const updateStatus = async (req, res) => {
    const { name } = req.body;
    const { id } = req.params;
    Status.findOneAndUpdate(id, { name }, (err, status) => {
        if (err) {
            return res.status(400).send({ message: 'Error al actualizar el estado' })
        }
        if (!status) {
            return res.status(404).send({ message: 'No se encontró el estado '});
        }
        return res.status(200).send(status);
    })
}

const deleteStatus = (req, res) => {
    const { id } = req.params;
    Cart.findOneAndDelete(id, (err, status) => {
        if (err) {
            return res.status(400).send({ message: 'Error al eliminar el estado'});
        }
        if (!status) {
            return res.status(404).send({ message: 'No se encontró el estado '});
        }
        return res.status(200).send(status);
    })
}

module.exports = {
    createStatus,
    getStatuses,
    getStatus,
    updateStatus,
    deleteStatus
}