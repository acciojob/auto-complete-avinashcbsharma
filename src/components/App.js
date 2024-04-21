import React, { useState } from 'react';

const FruitSearch = ({ fruits }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredFruits, setFilteredFruits] = useState([]);

  const handleSearch = (event) => {
    const { value } = event.target;
    setSearchTerm(value);

    // Filter fruits based on the search term
    const filteredResults = fruits.filter((fruit) =>
      fruit.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredFruits(filteredResults);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search fruits..."
        onChange={handleSearch}
        value={searchTerm}
      />
      <ul >
        {filteredFruits.map((fruit, index) => (
          <li key={`fruit-${index}`}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
};


const fruits =  ["apple", "banana", "cherry", "date", 'Grapes', 'Pineapple', "elderberry", 'Orange', "fig"]
  
export default function App() {
  return (
    <div>
        <ul id="no-bullets" >  
            <li><h3>Search item</h3></li> 
        </ul>      
      <FruitSearch fruits={fruits} />
    </div>
  );
}
