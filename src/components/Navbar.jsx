import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home as HomeIcon, Planet, PersonCircle } from 'react-ionicons';

function NavBar() {
  return (
    <div className="fixed bottom-0 w-full bg-white border-t">
      <div className="container mx-auto px-4">
        <div className="flex justify-around">
          <NavItem  to="/" icon={<HomeIcon color="#BABABA" height="25px" width="25px" />} label="Home" />
          <NavItem to="/journey" icon={<Planet color="#BABABA" height="25px" width="25px" />} label="Journey" />
          <NavItem to="/mentor" icon={<PersonCircle color="#BABABA" height="25px" width="25px" />} label="Mentor" />
        </div>
      </div>
    </div>
  );
}

function NavItem({ to, icon, label }) {
  return (
    <NavLink
      exact
      to={to}
      activeClassName="text-AA4EC3"
      className="text-center w-1/3 py-3 items-center"
    >
      <div className="flex mb-1 justify-center">
        {React.cloneElement(icon, { className: '', color: 'inherit' })}
        </div>
      <span className='text-center'>{label}</span>
      
    </NavLink>
  );
}

export default NavBar;
