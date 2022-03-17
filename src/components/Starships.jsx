import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom'

const Starships = () => {

    const {id} = useParams()
    const [starships, setStarships] = useState('');

    useEffect(() => {
        axios.get(`https://swapi.dev/api/starships/${id}`)
            .then(response=> {console.log(response.data) 
                setStarships(response.data) })
            .catch(err => {console.log(err) 
                setStarships(err.data) })
    }, [id])

    return (
        <div className="App">
            {starships ?
                <div>
                    <h2>Name: {starships.name}</h2>
                    <p>Model: {starships.model}</p>
                    <p>Manufacturer: {starships.manufacturer}</p>
                    <p>Cost In Credits: {starships.cost_in_credits}</p>
                    <p>crew: {starships.crew}</p>
                </div>:
                <div>
                    <h1>These aren't the droids you're looking for</h1>
                    <img className="obi" src={require('./obi.png')}   alt="wtf"/>
                </div>
            }
        </div>
    )
}

export default Starships;