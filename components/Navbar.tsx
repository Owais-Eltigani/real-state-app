import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';

const Navbar = () => {
  return (
    <div className="bg-white p-2 m-1 flex flex-row justify-between">
      <div className="flex flex-row space-x-3 cursor-pointer font-semibold">
        <MenuIcon className="text-2xl" />
        <p>Menu</p>
      </div>

      <div className="">
        <HomeIcon className="text-2xl" />
      </div>

      <div className="font-semibold">
        <p>28,341 Properties/ 10,307 Spaces</p>
      </div>
    </div>
  );
};

export default Navbar;
