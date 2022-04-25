const { response, request } = require("express");
const Pet = require("../models/pet.model");

module.exports.createPet = (request, response) => {
    Pet.create(request.body)
        .then(pet => response.json(pet))
        .catch(err => response.status(400).json(err));
}

module.exports.listPets = (request, response) => {
    Pet.find()
        .sort('petType')
        .then(pets => response.json(pets))
        .catch(err => response.status(400).json(err));
}

module.exports.getPet = (request, response) => {
    Pet.findOne({_id:request.params.id})
        .then(pet => response.json(pet))
        .catch(err => response.status(400).json(err))
}

module.exports.updatePet = (request, response) => {
    Pet.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedPet => response.json(updatedPet))
        .catch(err => response.status(400).json(err))
}

module.exports.deletePet = (request, response) => {
    Pet.deleteOne({ _id: request.params.id }) 
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.status(400).json(err))
}
