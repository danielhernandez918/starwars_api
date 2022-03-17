import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom'

const People = () => {

    const {id} = useParams()
    const [people, setPeople] = useState()

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then(response=> {console.log(response.data) 
                setPeople(response.data) })
            .catch(err => {console.log(err) 
                setPeople(err.data) })
    }, [id])

    return (
        <div className="App">
            {people ?
                <div>
                    <h2>Name: {people.name}</h2>
                    <p>height: {people.height}</p>
                    <p>Mass: {people.mass}</p>
                    <p>Homeworld: {people.homeworld}</p>
                    <p>Birth Year: {people.birth_year}</p>
                </div>:
                <div>
                    <h1>These aren't the droids you're looking for</h1>
                    <img className="obi" src={require('./obi.png')}   alt="wtf"/>
                </div>
            }
        </div>
    )
}

export default People;