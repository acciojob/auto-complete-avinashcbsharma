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


const fruitsArray =  ["apple", "banana", "cherry", "date", 'Grapes', 'Pineapple', "elderberry", 'Orange', "fig"]
  
export default function App() {
  return (
    <div>
      <h1>Search item</h1>
      <FruitSearch fruits={fruitsArray} />
    </div>
  );
}
