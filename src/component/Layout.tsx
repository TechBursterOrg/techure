import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from '../components/ScrollToTop';

const titles: Record<string, string> = {
  '/': 'Techburster | Software Development Company',
  '/services': 'Services | Techburster',
  '/about': 'How we work | Techburster',
  '/work': 'Our work | Techburster',
  '/faq': 'FAQ | Techburster',
  '/contact': 'Contact | Techburster',
};

const Layout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = titles[pathname] ?? 'Page not found | Techburster';
  }, [pathname]);

  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Layout;
