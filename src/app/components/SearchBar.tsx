'use client'

import {useState} from "react";
import {FaSearch} from "react-icons/fa";
import "./SearchBar.css";

export default function SearchBar() {

    const [input, setInput] = useState("")

    const fetchData = (value: string) => { /** here value refers to the name of the city */
        fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${value}&count=1&language=en&format=json`)
            .then((response) => response.json())
            .then(json => {
            // We ensure that 'json.results' exist and is an array
            if (!json.results) {
              console.log("No se encontraron resultados");
              return;
            }
            
            // Filter inside of 'json.results'
            const results = json.results.filter((location: any) => {
                return(
                    value && location && location.name && location.name.toLowerCase().includes(value.toLowerCase())
                );
            });

            console.log("Results: ",results);
        })
        .catch((error) => { //In case we are unable to access the API
            console.error("Error al hacer fetch: ", error);
        });
    };

    const handleChange = (value: string) => {
        setInput(value)
        fetchData(value)
    }

    return(
        <div className="input-wrapper">
            <FaSearch id="search-icon"/>
            <input placeholder="Type to search" value={input} onChange={(e) => handleChange(e.target.value)}/>
        </div>
    );
}