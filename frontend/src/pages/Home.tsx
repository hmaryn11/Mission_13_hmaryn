import React from 'react';

function Welcome() {
  return (
    <>
      <h1 className="text-center p-4">WELCOME</h1>
      <h2 className="text-center">Joel Hilton's Movie List Website</h2>
    </>
  );
}

function Explaination() {
  return (
    <div className="text-center">
      <h3>You like movies? You're in the right spot!</h3>
      <p>
        This website is for those who want to see the movie list compiled by
        Joel Hilton.
      </p>
    </div>
  );
}

function Home() {
  return (
    <>
      <Welcome />
      <Explaination />
    </>
  );
}

export default Home;
