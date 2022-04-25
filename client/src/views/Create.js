import React from 'react'
import { Link } from 'react-router-dom';
import PetForm from '../components/PetForm';

const Create = (props) => { 
    return (
        <div className="container-fluid">
            <div className="d-flex flex-wrap">
                <span className="h1 me-auto">Pet Shelter</span>
                <Link to={"/"}>back to home</Link>
            </div>

            <h3>Know a pet needing a home?</h3>

            <PetForm />
        </div>
    )
}
export default Create;

