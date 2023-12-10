import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Rate from "./Rate";

function SingleBrewery() {
  const { brewery_id } = useParams();
  const singleBrewery_api = `https://api.openbrewerydb.org/v1/breweries/${brewery_id}`;
  const [singleBrewery, setSingleBrewery] = useState([]);

  const getBrewery = async (url) => {
    const res = await axios.get(url);
    setSingleBrewery(res.data);
  };

  useEffect(() => {
    getBrewery(singleBrewery_api);
  }, []);
  const { id, name, brewery_type, address_1, country, phone, state } = singleBrewery;
  // console.log(singleBrewery);

  return (
    <>
    <div key={id}>
      <h1>{name}</h1>
      <p>
        Type:- {brewery_type} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Phone:- {phone}
      </p>
      <p>
        Address:- {address_1}  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; State:- {state}  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Country:- {country}
      </p>
    </div>
    <div>
      <Rate/>
      <textarea placeholder="Write a review"/>
      <button>Post Comment</button>
    </div>
    </>
  );
}

export default SingleBrewery;
