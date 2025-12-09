// src/components/layout/Navbar.tsx
import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar: React.FC = () => {

    const [isOpen, setIsOpen] = React.useState(false);
    const handleToggle = () => setIsOpen((prev) => !prev);
    const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header">
      <nav className="app__nav">
        <div className="app__nav-logo">Hästskogens Hovar</div>

        <button className="app__nav-toggle" onClick={handleToggle} arial-lable="Öppna meny" aria-expanded={isOpen}>
            <span className="app__nav-toggle-bar" />
            <span className="app__nav-toggle-bar" />
            <span className="app__nav-toggle-bar" />
        </button>


        {/* <div className="app__nav-links"> */}
        <div
          className={
            isOpen
              ? "app__nav-links app__nav-links--open"
              : "app__nav-links"
          }
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "app__nav-link app__nav-link--active"
                : "app__nav-link"
            }
            onClick={closeMenu}

          >
            Startsida
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "app__nav-link app__nav-link--active"
                : "app__nav-link"
            }
            onClick={closeMenu}

          >
            Om mig
          </NavLink>

          <NavLink
            to="/priser"
            className={({ isActive }) =>
              isActive
                ? "app__nav-link app__nav-link--active"
                : "app__nav-link"
            }
            onClick={closeMenu}

          >
            Priser
          </NavLink>

          <NavLink
            to="/visit"
            className={({ isActive }) =>
              isActive
                ? "app__nav-link app__nav-link--active"
                : "app__nav-link"
            }
            onClick={closeMenu}

          >
            Inför besöket
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
