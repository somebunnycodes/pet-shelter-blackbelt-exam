import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const PetList = (props) => {
    const [pets, setPets] = useState([]);

    useEffect(()=>{
        axios.get(process.env.REACT_APP_API_URI + "/api/pets")
        .then((res)=>{
            console.log(res.data);
            setPets(res.data);
	})
        .catch((err)=>{
            console.log(err);
        })
    }, []);
    
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Type</td>
                    <td>Actions</td>
                </tr>
            </thead>
            <tbody>
                {
                    pets.map((pet, index)=>
                        <tr key={index}>
                            <td>{pet.petName}</td>
                            <td>{pet.petType}</td>
                            <td>
                                <Link to={"/pets/" + pet._id}>details</Link>
                                &nbsp;
                                |
                                &nbsp;
                                <Link to={"/pets/" + pet._id + "/edit"}>edit</Link>
                            </td>
                        </tr> 
                    )
                }
            </tbody>
        </table>
    )
}
export default PetList;

