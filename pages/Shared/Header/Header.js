import Link from 'next/link';
import React from 'react';

const Header = () => {

  const menuitem = <>
  <li><a>Home</a></li>
  <li><a href='#allnews'>News</a></li>
  <li><a>About</a></li>
  <li><a>Blog</a></li>
  <li><a>Contact us</a></li>
  </>

    return (
        <div className="navbar bg-black text-white h-[30px] fixed z-10">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact uppercase dropdown-content mt-3 p-2 shadow bg-black text-white rounded-box w-52">
        {menuitem}
      </ul>
    </div>
    <Link href='/' className="btn btn-ghost text-xl uppercase">Dummy News</Link>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1 uppercase">
      {menuitem}
    </ul>
  </div>
</div>
    );
};

export default Header;