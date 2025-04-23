import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex flex-col sm:flex-row justify-between items-center p-4 bg-white shadow-sm">
      <div className="flex justify-between w-full sm:w-auto items-center">
        <h1 className="text-2xl font-bold text-text-dark-gray">BOXCARS</h1>
        <button
          className="sm:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <Menu className="h-7 w-7 text-text-dark-gray cursor-pointer" />
        </button>
      </div>

      <nav
        className={`${
          isMenuOpen ? 'flex' : 'hidden'
        } sm:flex flex-col sm:flex-row sm:space-x-6 mt-4 sm:mt-0 w-full sm:w-auto items-center text-center gap-4 sm:gap-0 order-3 sm:order-2`}
      >
        <Link
          to="/"
          className="text-text-light-gray hover:text-text-dark-gray"
          onClick={() => setIsMenuOpen(false)}
        >
          Home
        </Link>
        <Link
          to="/about"
          className="text-text-light-gray hover:text-text-dark-gray"
          onClick={() => setIsMenuOpen(false)}
        >
          About
        </Link>
        <Link
          to="/contact"
          className="text-text-light-gray hover:text-text-dark-gray"
          onClick={() => setIsMenuOpen(false)}
        >
          Contact
        </Link>
        <div className="order-2 sm:order-3 my-4 sm:my-0">
        <Button
          variant="outline"
          className="border-gray-200 text-text-dark-gray hover:bg-gray-50"
          
        >
          <Link to='/profile'>Admin page</Link>
          
        </Button>
      </div>
      </nav>

      
    </header>
  );
}

export default Header;