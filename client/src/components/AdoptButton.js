import React from 'react';
import axios from 'axios';

const AdoptButton = (props) => {

    const {petId, petName, successCallback} = props;

    const adoptPet = e => {
        axios.delete(process.env.REACT_APP_API_URI + '/api/pets/' + petId)
            .then(res=>{
                successCallback();
            })
    }

    return (
        <button className='btn btn-primary' onClick={adoptPet}>
            <i className='bi-house-door-fill'></i> Adopt {petName}
        </button>
    )
}
export default AdoptButton;

