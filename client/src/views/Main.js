import React from 'react'
import PetList from '../components/PetList';
import { Link } from 'react-router-dom';

const Main = (props) => {

    return (
        <div className="container-fluid">
            <div className="d-flex flex-wrap">
                <span className="h1 me-auto">Pet Shelter</span>
                <Link to={"/pets/new"}>add a pet to the shelter</Link>

            </div>          

            <h3>These pets are looking for a good home</h3>

            <PetList/>
        </div>
    )
}
export default Main;
