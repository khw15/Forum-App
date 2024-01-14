import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
  return (
    <header className="fixed top-0 bg-cyan-600 w-full px-8 py-4">
      <h1 className="text-white uppercase text-2xl">
        <Link to="/">React Forum</Link>
      </h1>
    </header>
  );
}

export default Header;
