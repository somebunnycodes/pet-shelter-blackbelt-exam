import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import {useNavigate, useParams} from "react-router-dom";
import AdoptButton from "../components/AdoptButton";

const View = (props) => {
    const {id} = useParams();
    const [pet, setPet] = useState({});
    const [loaded, setLoaded] = useState(false);
    const navigate = useNavigate();

    const onLikeClickHandler = (e) => {
        alert('Like!');
    }

    useEffect(() => {
        axios.get(process.env.REACT_APP_API_URI + '/api/pets/' + id)
            .then(res => {
                setPet(res.data);
                setLoaded(true);
            })
            .catch(err => console.log(err))
    }, []);

    return (
        <div className='container-fluid'>
            <div className="d-flex flex-wrap">
                <span className="h1 me-auto">Pet Shelter</span>
                <Link to={"/"}>back to home</Link>
            </div>

            <div className="d-flex flex-wrap">
                <span className='h3 me-auto'>Details about {pet.petName}</span>
                <AdoptButton petId={pet._id} petName={pet.petName} successCallback={() => navigate('/')} />
            </div>

            <div className="card my-4">
                <div className="card-body">
                    <div className="row">
                        <div className="col-3">
                            <b>Pet type:</b>
                        </div>
                        <div className="col-9">
                            {pet.petType}
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-3">
                            <b>Description:</b>
                        </div>
                        <div className="col-9">
                            {pet.description}
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-3">
                            <b>Skills:</b>
                        </div>
                        <div className="col-9">
                            {
                                loaded && pet.skills.map((skill, index) => <><span key={index}>{skill}</span><br/></>)
                            }
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-12 text-center">
                            <button className='btn btn-primary me-5' onClick={onLikeClickHandler}>
                                <i className='bi-hand-thumbs-up'></i> Like {pet.petName}
                                </button>
                            COUNT like(s)
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default View;

