import { Link, NavLink } from "react-router-dom";
import logo from '../assets/logo.PNG';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center text-white font-bold shadow-md">
            <img src={logo} alt="logo"  className="rounded-full"/>
          </div>
          <div>
            <div className="font-display text-lg">OwnMyMahal</div>
            <div className="text-xs text-gray-500 -mt-1">Luxury Living. Timeless Ownership.</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <NavLink to="/" className={({isActive}) => isActive ? 'text-gold-500' : 'text-gray-700'}>Home</NavLink>
          <NavLink to="/properties" className={({isActive}) => isActive ? 'text-gold-500' : 'text-gray-700'}>Properties</NavLink>
          <NavLink to="/experiences" className={({isActive}) => isActive ? 'text-gold-500' : 'text-gray-700'}>Experiences</NavLink>
          <NavLink to="/insights" className={({isActive}) => isActive ? 'text-gold-500' : 'text-gray-700'}>Insights</NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? 'text-gold-500' : 'text-gray-700'}>About</NavLink>
          <NavLink to="/contact" className="bg-gold-500 text-black px-4 py-2 rounded-full hover:opacity-95">Contact</NavLink>
        </nav>

        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}

function MobileMenu() {
  return (
    <details className="relative">
      <summary className="cursor-pointer select-none">Menu</summary>
      <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg p-3 text-sm">
        <Link to="/" className="block py-1">Home</Link>
        <Link to="/properties" className="block py-1">Properties</Link>
        <Link to="/experiences" className="block py-1">Experiences</Link>
        <Link to="/insights" className="block py-1">Insights</Link>
        <Link to="/about" className="block py-1">About</Link>
        <Link to="/contact" className="block py-2 mt-2 bg-gold-500 text-white rounded text-center">Contact</Link>
      </div>
    </details>
  );
}

