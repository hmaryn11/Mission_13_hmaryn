import React, { useState } from 'react';
import data from './MovieData.json';

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
    <div>
      {!isIDAdded && (
        <button className="btn btn-primary" onClick={addID}>
          Add ID
        </button>
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

          <button className="btn btn-primary" onClick={addID}>
            Add ID
          </button>
        </>
      )}
    </div>
  );
}
// function MovieList() {
//   const [myJSON, setMyJSON] = useState(AllMovies);

//   const addID = () => {
//     let idCounter = 1;
//     const updatedJSON = myJSON.map((json) => ({
//       Movieid: idCounter++,
//       ...json,
//     }));
//     setMyJSON(updatedJSON);

//     handleUpdatedJson(updatedJSON);
//   };

//   // return (
//   //   <div>
//   //     <button onClick={addID}>Add ID</button>
//   //     <p>{JSON.stringify(myJSON)}</p>
//   //     {/* ^this is the modified json */}
//   //   </div>
//   // );
//   const handleUpdatedJson = (updatedJSON: any) => {
//     return (
//       <>
//         <div>
//           <h3>Joel Hilton's Movie Collection</h3>
//         </div>
//         <div>
//           <table className="table">
//             <thead>
//               <tr>
//                 <th>Title</th>
//                 <th>Year</th>
//                 <th>Director</th>
//                 <th>Rating</th>
//                 <th>Category</th>
//               </tr>
//             </thead>
//             <tbody>
//               {updatedJSON.map((m) => (
//                 // map each model in m(the mds) to iterate through the attributes
//                 <tr key={m.MovieId}>
//                   <td>{m.Title}</td>
//                   <td>{m.Year}</td>
//                   <td>{m.Director}</td>
//                   <td>{m.Rating}</td>
//                   <td>{m.Category}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         <button className="btn btn-primary" onClick={addID}>
//           Add ID
//         </button>
//       </>
//     );
//   };
// }

//^use the name of the json object, not the file name

// function MovieList() {
//   return (
//     <>
//       <div>
//         <h3>Joel Hilton's Movie Collection</h3>
//       </div>
//       <div>
//         <table className="table">
//           <thead>
//             <tr>
//               <th>Title</th>
//               <th>Year</th>
//               <th>Director</th>
//               <th>Rating</th>
//               <th>Category</th>
//             </tr>
//           </thead>
//           <tbody>
//             {updatedJSON.map((m) => (
//               // map each model in m(the mds) to iterate through the attributes
//               <tr key={m.MovieId}>
//                 <td>{m.Title}</td>
//                 <td>{m.Year}</td>
//                 <td>{m.Director}</td>
//                 <td>{m.Rating}</td>
//                 <td>{m.Category}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       <button className="btn btn-primary" onClick={addMovie}>
//         Add Movie
//       </button>
//     </>
//   );
// }

function Movie() {
  return (
    <>
      {/* <AddMovieID /> */}
      <MovieList />
    </>
  );
}
export default Movie;
