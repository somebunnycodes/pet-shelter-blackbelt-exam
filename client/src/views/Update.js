import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useNavigate, useParams, Link} from "react-router-dom";
import PetForm from '../components/PetForm';

const Update = (props) => {
    const {id} = useParams();
    const [pet, setPet] = useState({});
    const [loaded, setLoaded] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(process.env.REACT_APP_API_URI + '/api/pets/' + id)
            .then(res => {
                setPet(res.data);
                setLoaded(true);
            })
            .catch(err => console.log(err))
    }, []);

    return (
        <div className="container-fluid">
            <div className="d-flex flex-wrap">
                <span className="h1 me-auto">Pet Shelter</span>
                <Link to={"/"}>back to home</Link>
            </div>

            <h3>Edit {pet.petName}</h3>

            {
                loaded && <PetForm 
                            petId={id}
                            initialPetName={pet.petName} 
                            initialPetType={pet.petType}
                            initialDescription={pet.description}
                            initialSkill1={pet.skills[0]}
                            initialSkill2={pet.skills[1]}
                            initialSkill3={pet.skills[2]}
                            />
            }
        </div>
    )
}
export default Update;

