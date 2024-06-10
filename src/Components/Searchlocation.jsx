import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GoogleMaps from './GoogleMaps';
import './Searchlocation.css';
import data from "./data.json";

function Searchlocation() {
    const [searchTerm, setSearchTerm] = useState('');
    const [autoFillSuggestions, setAutoFillSuggestions] = useState([]);
    const navigate = useNavigate();

    const filterData = (input) => {
        const filteredSuggestions = data.filter(item => item.name.toLowerCase().includes(input.toLowerCase()));
        setAutoFillSuggestions(filteredSuggestions);
    }

    const handleInputChange = (event) => {
        const inputValue = event.target.value;
        setSearchTerm(inputValue);
        filterData(inputValue);
    }

    const handleSuggestionClick = (suggestion) => {
        console.log("Clicked suggestion:", suggestion);
        localStorage.setItem('selectedName', suggestion.name);
        localStorage.setItem('selectedData', JSON.stringify(suggestion));
        navigate('/statistics');
    }

    return (
        <div className="flex">
            <div>
                <input
                    value={searchTerm}
                    onChange={handleInputChange}
                    placeholder="Search location..."
                />
                <div id="location">
                    {autoFillSuggestions.map((suggestion, index) => (
                        <div 
                            key={index} 
                            onClick={() => handleSuggestionClick(suggestion)}
                            className="suggestion"
                        >
                            {suggestion.name}
                        </div>
                    ))}
                </div>
            </div>
            <GoogleMaps/>
        </div>
        
    )
}

export default Searchlocation;
