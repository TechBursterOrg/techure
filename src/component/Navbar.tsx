import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Logo from './Logo';

const navLinks = [
  { name: 'Home', to: '/' },
  { name: 'Services', to: '/services' },
  { name: 'How we work', to: '/about' },
  { name: 'Work', to: '/work' },
  { name: 'FAQ', to: '/faq' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => setAtTop(window.scrollY < 8);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setIsOpen(false), [pathname]);

  const solid = !atTop || isOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b transition-colors duration-150 ease-snap ${
        solid ? 'border-line bg-ink/80 backdrop-blur-xl' : 'border-transparent bg-transparent'
      }`}
    >
      <div className="wrap relative flex h-16 items-center justify-between">
        <Link to="/" aria-label="Techburster home">
          <Logo />
        </Link>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 gap-0.5 rounded-full border border-line-strong bg-surface/80 p-1 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.to}
              end
              className={({ isActive }) =>
                `rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-150 ease-snap hover:bg-raised hover:text-fg ${
                  isActive ? 'bg-raised text-fg' : 'text-fg-2'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="hidden rounded-full bg-metal px-4 py-2 text-sm font-semibold text-ink transition-colors duration-150 ease-snap hover:bg-fg min-[400px]:inline-flex"
          >
            Start a project
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            className="rounded-full border border-line-strong px-4 py-2 text-sm font-semibold text-fg transition-colors duration-150 ease-snap hover:bg-raised md:hidden"
          >
            {isOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div className={`overflow-hidden transition-[max-height] duration-300 ease-snap md:hidden ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <nav className="wrap grid pb-4 pt-2">
          {[...navLinks, { name: 'Contact', to: '/contact' }].map((link, i, all) => (
            <NavLink
              key={link.name}
              to={link.to}
              end
              className={({ isActive }) =>
                `py-3 text-lg font-medium ${i === all.length - 1 ? 'text-steel' : 'border-b border-line'} ${
                  isActive ? 'text-fg' : i === all.length - 1 ? '' : 'text-fg-2'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
