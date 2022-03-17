import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom'

const Planet = () => {

    const {id} = useParams()
    const [planet, setPlanet] = useState('');

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}`)
            .then(response=> {console.log(response.data) 
                setPlanet(response.data) })
            .catch(err => {console.log(err) 
                setPlanet(err.data) })
    }, [id])

    return (
        <div className="App">
            {planet ?
                <div>
                    <h2>Name: {planet.name}</h2>
                    <p>Climate: {planet.climate}</p>
                    <p>Terrain: {planet.terrain}</p>
                    <p>Surface Water: {planet.surface_water}</p>
                    <p>Residents: {planet.residents}</p>
                </div>:
                <div>
                    <h1>These aren't the droids you're looking for</h1>
                    <img className="obi" src={require('./obi.png')}   alt="wtf"/>
                </div>
            }
        </div>
    )
}

export default Planet;