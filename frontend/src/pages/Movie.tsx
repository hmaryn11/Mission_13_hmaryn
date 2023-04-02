import React, { useState } from 'react';
import data from '../MovieData.json';

const AllMovies = data.MovieData;

function MovieList() {
  const [myJSON, setMyJSON] = useState(AllMovies);
  const [isIDAdded, setIsIDAdded] = useState(false);

  const addID = () => {
    let idCounter = 1;
    const updatedJSON = myJSON.map((json) => ({
      Movieid: idCounter++,
      ...json,
    }));
    setMyJSON(updatedJSON);
    setIsIDAdded(true);
  };

  return (
    <>
      {!isIDAdded && (
        <div className="text-center">
          <br></br>
          <h2>Click the button below to view the movie list</h2>
          <br></br>
          <button
            className="btn btn-primary justify-content-center"
            onClick={addID}
          >
            Show Movie List
          </button>
        </div>
      )}
      {isIDAdded && (
        <>
          <div>
            <h3>Joel Hilton's Movie Collection</h3>
          </div>
          <div>
            <table className="table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Year</th>
                  <th>Director</th>
                  <th>Rating</th>
                  <th>Category</th>
                  <th>Edited</th>
                </tr>
              </thead>
              <tbody>
                {myJSON.map((m) => (
                  // map each model in m(the mds) to iterate through the attributes
                  // <tr key={m.MovieId}>
                  <tr>
                    <td>{m.Title}</td>
                    <td>{m.Year}</td>
                    <td>{m.Director}</td>
                    <td>{m.Rating}</td>
                    <td>{m.Category}</td>
                    <td>{m.Edited}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </>
  );
}

function Movie() {
  return (
    <>
      {/* <AddMovieID /> */}
      <MovieList />
    </>
  );
}
export default Movie;
