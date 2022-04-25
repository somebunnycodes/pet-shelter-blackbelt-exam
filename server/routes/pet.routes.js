const authorController = require("../controllers/pet.controller");

module.exports = (app) => {  
    app.get("/api/pets", authorController.listPets);
    app.post("/api/pets", authorController.createPet);
    app.get('/api/pets/:id', authorController.getPet);
    app.put('/api/pets/:id', authorController.updatePet);
    app.delete('/api/pets/:id', authorController.deletePet);
}