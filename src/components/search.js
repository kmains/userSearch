import React, { useState, useEffect } from 'react';
import Results from './results'
import Pages from './pages'



function Search() {
    const [q, setQ] = useState('');
    const [search, setSearch] = useState('');
    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);
    const [numRes, setNumRes] = useState(0);
    const [page, setPage] = useState(1);

    useEffect(() => {
        (search.length>0 && 
        fetch(`https://api.github.com/search/users?q=${search}&per_page=20&page=${page}`)
          .then(res => res.json())
          .then(
            (result) => {
             
              setItems(result.items);
              setNumRes(result.total_count)
              console.log(result)
            },
            (error) => {
              
              setError(error);
            }
          ))
      }, [search, page])


      function handleSubmit(q){
          setSearch(q);
          setPage(1);
      }

      function handleKeyPress(e) {
        if(e.key === 'Enter'){
            handleSubmit(q)
        }
      }

    return (
      <div className="search">
          <h1>Search Users</h1>
          <input 
          type = "search" 
          className="search_input"
          placeholder = "Search Users" 
          onChange = {(e) => setQ(e.target.value)}
          onKeyPress = {(e)=> handleKeyPress(e)}
        />
        <button className="search_submit" onClick={() => handleSubmit(q)}>Search</button>
        <p className="warning">{numRes>1000 ? "Showing first 1000 results, please narrow your search" : ''} {error}</p>
        


        {items.length >0 && 
        <>
            <div className="results">
                <p className="results_total">{numRes} Results</p>
                { items.map((x) => <Results res={x} />) }
            </div> 
            <Pages page={page} numRes={numRes} setPage={setPage} />
        </>
        }
      </div>
    );
  }
  
  export default Search;
  