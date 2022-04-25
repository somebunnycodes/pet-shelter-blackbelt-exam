import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
import axios from 'axios';

const PetForm = (props) => {
    const {
        petId,
        initialPetName, initialPetType, initialDescription,
        initialSkill1, initialSkill2, initialSkill3} = props;

    const navigate = useNavigate();

    const [petName, setPetName] = useState(initialPetName || "");
    const [petType, setPetType] = useState(initialPetType || "");
    const [description, setDescription] = useState(initialDescription || "");
    const [skill1, setSkill1] = useState(initialSkill1 || "");
    const [skill2, setSkill2] = useState(initialSkill2 || "");
    const [skill3, setSkill3] = useState(initialSkill3 || "");
    const [errors, setErrors] = useState({});

    const onSubmitHandler = e => {
        e.preventDefault();
        const skills = [];
        if (skill1) {
            skills.push(skill1);
        }
        if (skill2) {
            skills.push(skill2);
        }
        if (skill3) {
            skills.push(skill3);
        }

        if (petId) {
            updatePet({petName, petType, description, skills});
        } else {
            createPet({petName, petType, description, skills});
        }
    }
    
    const handleError = err => {
        if (err.response) {
            console.log(err.response.data);
            const json = err.response.data;

            if (json.code == 11000) {
                setErrors({
                    "petName": {
                        "message": "A pet with this name already exists"
                    }
                });
            } else if (json.errors) {
                setErrors(json.errors);
            }
        }
    }

    const createPet = (petParams) => {
        axios.post(process.env.REACT_APP_API_URI + '/api/pets', petParams)
            .then(res => {
                console.log(res); 
                navigate("/"); 
            })
            .catch(handleError);    
    }

    const updatePet = (petParams) => {
        axios.put(process.env.REACT_APP_API_URI + '/api/pets/' + petId, petParams)
            .then(res => {
                console.log(res);
                navigate("/");
            })
            .catch(handleError)
    }

    return (
        <div className='card'>
            <div className='card-body'>
                <form onSubmit={onSubmitHandler}>
                    <div className="row">
                        <div className="col-6">
                            
                            <div className="form-group">
                                <div className="mb-3 form-group">
                                    <label className="form-label">Pet Name:</label>
                                    <input className="form-control" type="text" name="petName" onChange={(e) => setPetName(e.target.value)} value={petName} />
                                    {
                                        errors.petName 
                                        &&
                                        <div className="form-text text-danger">{errors.petName.message}</div>
                                    }
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="mb-3 form-group">
                                    <label className="form-label">Pet Type:</label>
                                    <input className="form-control" type="text" name="petType" onChange={(e) => setPetType(e.target.value)} value={petType} />
                                    {
                                        errors.petType 
                                        &&
                                        <div className="form-text text-danger">{errors.petType.message}</div>
                                    }
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="mb-3 form-group">
                                    <label className="form-label">Pet Description:</label>
                                    <input className="form-control" type="text" name="description" onChange={(e) => setDescription(e.target.value)} value={description} />
                                    {
                                        errors.description 
                                        &&
                                        <div className="form-text text-danger">{errors.description.message}</div>
                                    }
                                </div>
                            </div>

                            <button className="btn btn-primary" onClick={onSubmitHandler}>
                                {
                                petId
                                    ?
                                    <><i className="bi-pencil-fill"></i> Edit Pet</>
                                    :
                                    <><i className="bi-upload"></i> Add Pet</>
                                }
                            </button>
                        </div>
                        <div className="col-6">
                            <h5>Skills (optional):</h5>

                            <div className="form-group">
                                <div className="mb-3 form-group">
                                    <label className="form-label">Skill 1:</label>
                                    <input className="form-control" type="text" name="skill1" onChange={(e) => setSkill1(e.target.value)} value={skill1} />
                                    <div className="form-text text-danger"></div>
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="mb-3 form-group">
                                    <label className="form-label">Skill 2:</label>
                                    <input className="form-control" type="text" name="skill2" onChange={(e) => setSkill2(e.target.value)} value={skill2} />
                                    <div className="form-text text-danger"></div>
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="mb-3 form-group">
                                    <label className="form-label">Skill 3:</label>
                                    <input className="form-control" type="text" name="skill3" onChange={(e) => setSkill3(e.target.value)} value={skill3} />
                                    <div className="form-text text-danger"></div>
                                </div>
                            </div>

                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default PetForm;



