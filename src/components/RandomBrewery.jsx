import axios from "axios";
import React, { useEffect, useState } from "react";

const random_api = "https://api.openbrewerydb.org/v1/breweries/random";
function RandomBrewery() {
  const [brewery, setBrewery] = useState([]);

  const getBrewery = async (url) => {
    const res = await axios.get(url);
    setBrewery(res.data[0]);
  };

  useEffect(() => {
    getBrewery(random_api);
  }, []);

  const { id, name, brewery_type, address_1, country, phone, state } = brewery;
  console.log(brewery);
  return (
    <div key={id}>
      <h1>{name}</h1>
      <p>
        Type:- {brewery_type} Phone:- {phone}
      </p>
      <p>
        Address:- {address_1} State:- {state} Country:- {country}
      </p>
    </div>
  );
}

export default RandomBrewery;
