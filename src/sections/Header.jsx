import { useState } from "react";
import { FaXmark, FaBars } from "react-icons/fa6";
import { Link } from "react-scroll";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { link: 'Home', path: 'home' },
    { link: 'About', path: 'about' },
    { link: 'Services', path: 'services' },
    { link: 'Projects', path: 'projects' },
    { link: 'Contact', path: 'contact' },
  ];

  const handleHomeClick = () => {
    if (location.pathname !== "/") {
      // Jika bukan di halaman utama, navigasikan ke root URL (beranda)
      navigate("/");
    } else {
      // Jika sudah di halaman utama, scroll ke bagian home
      document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="w-full flex bg-white justify-between items-center gap-1 lg:px-16 px-6 py-4 sticky top-0 z-50 shadow-md">
      <h1 
        className="text-black md:text-4xl text-3xl font-bold font-rubik cursor-pointer" 
        onClick={handleHomeClick} // Fungsi handleHomeClick untuk navigasi beranda
      >
        UD.Karomah Indah
      </h1>

      {/* Desktop Navigation */}
      <ul className="lg:flex justify-center items-center gap-6 hidden">
        {navItems.map(({ link, path }) => (
          link === 'Home' ? (
            <button
              key={path}
              className="text-black uppercase font-bold cursor-pointer p-3 rounded-full hover:bg-yellow-500 hover:text-black text-[15px]"
              onClick={handleHomeClick} // Menggunakan handleHomeClick untuk Home
            >
              {link}
            </button>
          ) : (
            <Link
              key={path}
              className="text-black uppercase font-bold cursor-pointer p-3 rounded-full hover:bg-yellow-500 hover:text-black text-[15px]"
              to={path}
              spy={true}
              offset={-100}
              smooth={true}
            >
              {link}
            </Link>
          )
        ))}
      </ul>

      <button className="bg-yellow-500 hover:bg-black hover:text-white text-black 
        px-10 py-3 rounded-full font-semibold transform hover:scale-105
        transition-transform duration-300 cursor-pointer md:flex hidden">
        REACH US
      </button>

      {/* Mobile Menu Toggle */}
      <div className="flex justify-between items-center lg:hidden mt-3" onClick={toggleMenu}>
        {isMenuOpen ? 
          <FaXmark className="text-yellow-500 text-3xl cursor-pointer" /> :
          <FaBars className="text-yellow-500 text-3xl cursor-pointer" />
        }
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="w-full h-fit bg-yellow-500 p-4 absolute top-[72px] left-0">
          <ul className="flex flex-col justify-center items-center gap-2 w-full">
            {navItems.map(({ link, path }) => (
              link === 'Home' ? (
                <button
                  key={path}
                  className="text-black uppercase font-semibold cursor-pointer p-2 rounded-lg hover:bg-black hover:text-white w-full text-center"
                  onClick={() => {
                    handleHomeClick();
                    closeMenu();
                  }}
                >
                  {link}
                </button>
              ) : (
                <Link
                  key={path}
                  className="text-black uppercase font-semibold cursor-pointer p-2 rounded-lg hover:bg-black hover:text-white w-full text-center"
                  to={path}
                  spy={true}
                  offset={-100}
                  smooth={true}
                  onClick={closeMenu}
                >
                  {link}
                </Link>
              )
            ))}
          </ul>
          <button 
            className="bg-black text-white px-10 py-3 rounded-full font-semibold w-full mt-4"
            onClick={() => {
              closeMenu();
              navigate('/contact');
            }}
          >
            REACH US
          </button>
        </div>
      )}
    </nav>
  );
};

export default Header;
