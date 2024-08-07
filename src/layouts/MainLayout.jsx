import { Outlet, useLocation } from 'react-router-dom';
import { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Hero from '../components/Hero.jsx';

const MainLayout = ({ upcomingEvents }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const getHeroProps = useMemo(() => {
    if (pathname === '/events') {
      return {
        isFullHero: false,
        subtitle: 'Galerie',
        title: 'Unsere vergangenen Veranstaltungen',
      };
    } else if (pathname === '/team') {
      return {
        isFullHero: false,
        subtitle: '',
        title: 'unser team',
      };
    } else if (pathname === '/contacts') {
      return {
        isFullHero: false,
        subtitle: '',
        title: '',
      };
    }
  }, [pathname]);

  return (
    <div className='text-main-dark'>
      <header>
        <Navbar />
      </header>

      <main>
        <Hero {...getHeroProps} upcomingEvents={upcomingEvents} />
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

MainLayout.propTypes = {
  upcomingEvents: PropTypes.array.isRequired,
};

export default MainLayout;
