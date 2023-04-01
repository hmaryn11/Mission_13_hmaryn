import React, { useState } from 'react';
import data from './MovieData.json';

const AllMovies = data.MovieData;

function AddMovieID() {
  const [myJSON, setMyJSON] = useState(AllMovies);

  const addID = () => {
    let idCounter = 1;
    const updatedJSONs = myJSON.map((json) => ({
      ...json,
      Movieid: idCounter++,
    }));
    setMyJSON(updatedJSONs);
  };

  return (
    <div>
      <button onClick={addID}>Add ID</button>
      <p>{JSON.stringify(myJSON)}</p>
    </div>
  );
}

export default AddMovieID;
