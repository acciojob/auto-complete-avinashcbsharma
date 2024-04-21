import React, { useState } from 'react';

export default function App() {

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredFruits, setFilteredFruits] = useState([]);
  //fruits array
  const fruits =  ["apple", "banana", "cherry", "date", 'Grapes', 'Pineapple', "elderberry", 'Orange', "fig"]
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
     <h3>Search item</h3>       
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
