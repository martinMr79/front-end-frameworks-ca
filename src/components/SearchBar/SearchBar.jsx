import React, { useState, useEffect } from "react";
// import SearchIcon from '@mui/icons-material/Search';
import { useAPI } from "../../hooks/api";
// import "./SearchBar.css"
import { baseURL } from "../../utilities/constants";

function AutocompleteSearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const { data } = useAPI //(`${baseURL}products?search=${searchTerm}`);

  console.log(data)

/*  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    if (data && data.length) {
      const results = data.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(results);
    }
  }, [data, searchTerm]); */

  return (
    <div>
   { /*  <input type="text" value={searchTerm} onChange={handleInputChange} /> */ }
      <ul>
        {searchResults.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default AutocompleteSearchBar;
