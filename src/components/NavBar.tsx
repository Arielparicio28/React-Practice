import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className='flex items-start justify-start w-full text-center '>
      <ul className='flex justify-center text-xl space-x-8 list-none m-2 opacity-80'>
        <li className='flex items-center transition ease-in-out delay-150 hover:bg-neutral-300 p-2 rounded-lg hover:scale-110 duration-300 font-font'>
          <Link to="/" className='flex items-center space-x-2'>
            <img src="/herramientas-de-artista.png" alt="home_button" className='w-10 h-10 lg:w-16 lg:h-16'/>
            <span className='text-black '>Home</span>
          </Link>
        </li>
        <li className='flex items-center transition ease-in-out delay-150 hover:bg-neutral-300 p-2 rounded-lg hover:scale-110 duration-300 font-font'>
          <Link to="/images" className='flex items-center space-x-2'>
            <img src="/artista.png" alt="imagenes_button" className='w-10 h-10 lg:w-16 lg:h-16'/>
            <span className='text-black '>Brushwork</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
