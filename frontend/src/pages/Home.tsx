import React from 'react';

function Welcome() {
  return (
    <>
      <h2 className="text-center">Welcome to the</h2>
      <h1 className="text-center">Joel Hilton</h1>
      <h2 className="text-center">Movie List Website </h2>
    </>
  );
}

function Explaination() {
  return (
    <>
      <h3>You like movies? You're in the right spot!</h3>
      <p>
        This website is for those who want to see the movie list compiled by
        Joel Hilton.
      </p>
    </>
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
