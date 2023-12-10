import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const homeRoute = "http://127.0.0.1:5000/api/v1/brewery";

function HomeBrewery() {
  const navigate = useNavigate();
  const [breweries, setBreweries] = useState([]);

  async function getApiData(url) {
    const res = await axios.get(url);
    setBreweries(res.data);
  }

  const handleClick = (id)=> {
    navigate(`/brewery/${id}`);
  }

  useEffect(() => {
    getApiData(homeRoute);
  }, []);

  return <div>
    <h1>Breweries</h1>
    <input placeholder="Search a brewery"/>
    <button>Search</button>
    { breweries.map((brewery) => {
      const {id, name, brewery_type, address_1} = brewery;
      return (
        <div key={id} onClick={()=>handleClick(id)}>
          <h2>Name:- {name}</h2>
          <p>Type:- {brewery_type}  Address:- {address_1}</p>
        </div>
      )
    })}
  </div>;
}

export default HomeBrewery;
