const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    petName: { 
        type: String,
        unique: true,
        required: [true, "Pet name is required"],
        minLength: [3, "Pet name must have at least 3 characters"]
    },
    petType: { 
        type: String, 
        required: [true, "Pet type is required"],
        minLength: [3, "Pet type must have at least 3 characters"]
    },
    description: { 
        type: String, 
        required: [true, "Pet description is required"],
        minLength: [3, "Pet description must have at least 3 characters"]
    },
    skills: {
        type: [{
            type: String
        }],
        validate: [
            (val) => val.length <= 3,
            'Pet can have between 0 and 3 skills'
        ]
    }
}, { timestamps: true });

module.exports = mongoose.model('Pet', PetSchema);

