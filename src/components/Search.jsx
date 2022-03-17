import React, { useState } from 'react'
import {useHistory} from "react-router-dom"
import './styles.css';
import '../App.css';


const Search = () => {
    const [type, setType] = useState("")
    const [id, setId] = useState("")
    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault()
        history.push(`/${type}/${id}`)
    }
    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <label>Select for:</label>
                <select name="type" id="type" value={type} onChange={e=>setType(e.target.value)}>
                    <option hidden>Choose a type</option>
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                    <option value="starships">Starships</option>
                </select>
                
                <label>ID:</label>
                <input type="text" name="id" value={id} 
                            onChange={e=>setId(e.target.value)}
                            placeholder= "Enter a Number"/>
                <input type="submit" value="Search"/>
            </form>
        </div>
    )
}

export default Search;
