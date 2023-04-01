import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className='h-[75px] flex justify-center items-center [&>*]:p-3'>
      <NavLink
        to='/'
        className={({ isActive }) =>
          isActive ? 'text-slate-950' : 'text-slate-600'
        }
      >
        Home
      </NavLink>
      <NavLink
        to='/Page'
        className={({ isActive }) =>
          isActive ? 'text-slate-950' : 'text-slate-600'
        }
      >
        Page
      </NavLink>
    </nav>
  );
};

export default Nav;
