import React, { useState, useEffect } from "react";
import { useAPI } from "../../hooks/api";
import { baseURL } from "../../utilities/constants";
import { StyledInput } from "./styled";
import { StyledResults } from "./styled";
import { Link } from "react-router-dom"

// import SearchIcon from '@mui/icons-material/Search';

function AutocompleteSearchBar() {

  const { data, isLoading, isError } = useAPI(baseURL);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    if (!isLoading && data && data.length && searchTerm.length >= 2) {
      const results = data.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [data, searchTerm, isLoading]);

  if (isError) {
    return <div>Error</div>;
  }

  if (isLoading) {
    return <div>...</div>;
  }

  return (
    <div>
      <StyledInput>
    <div>
    <input type="text" value={searchTerm} onChange={handleInputChange} placeholder="Search here"/>
    </div>
      </StyledInput>
      
    {searchResults.length ? (
        <ul>
          {searchResults.map((item) => (
            <StyledResults>
             <container>
              <div>
              <Link to={`/product/${item.id}`}>
              <li key={item.id}> <img src= {item.imageUrl} alt= {item.title}></img> {item.title} kr {item.discountedPrice}</li>
              </Link>           
              </div>
              </container> 
            </StyledResults>
          ))}
    
        </ul> 
         
      ) : (
        
        <div>No results found</div>
        
      )}
    </div>
     
  );
}
   
export default AutocompleteSearchBar;
