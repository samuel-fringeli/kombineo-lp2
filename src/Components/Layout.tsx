import { useLocation } from 'react-router-dom';
import Navbar from './navBar';

interface LayoutProps {
  children: React.ReactNode;
  showNavbar?: boolean;
}

const Layout = ({ children, showNavbar = true }: LayoutProps) => {
  const location = useLocation();
  
  // Don't show navbar on privacy and terms pages
  const hideNavbarRoutes = ['/privacy', '/terms'];
  const shouldShowNavbar = showNavbar && !hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {shouldShowNavbar && <Navbar />}
      {children}
    </>
  );
};

export default Layout;
