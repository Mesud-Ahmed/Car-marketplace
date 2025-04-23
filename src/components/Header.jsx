import { Link } from 'react-router-dom'; 

function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-sm">
      <h1 className="text-2xl font-bold text-text-dark-gray">BOXCARS</h1>
      <nav className="flex space-x-6">
        <Link to="/" className="text-text-light-gray hover:text-text-dark-gray">Home</Link>
        <Link to="/about" className="text-text-light-gray hover:text-text-dark-gray">About</Link>
        <Link to="/contact" className="text-text-light-gray hover:text-text-dark-gray">Contact</Link>
      </nav>
      <button className="bg-white border border-gray-200 rounded px-4 py-2 text-text-dark-gray hover:bg-gray-50">
        Admin page
      </button>
    </header>
  );
}

export default Header;