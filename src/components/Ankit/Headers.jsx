import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';

export default function Headers() {
    const [currentTheme, setCurrentTheme] = React.useState("dark");
  const themeButtonRef = useRef(null);
  const darkTheme = 'dark-theme';
  const iconTheme = 'ri-sun-line';

  // Previously selected topic (if the user selected)
  const selectedTheme = localStorage.getItem('selected-theme');
  const selectedIcon = localStorage.getItem('selected-icon');

  // Create a state variable to track the current theme

  // Create a state variable to track the current icon
  const [currentIcon, setCurrentIcon] = React.useState(getCurrentIcon());

  // Obtain the current theme when the component mounts
  useEffect(() => {
    if (selectedTheme) {
      // Set the current theme based on the user's choice
      setCurrentTheme(selectedTheme);
      // Set the current icon based on the user's choice
      setCurrentIcon(selectedIcon);
    }
  }, []);

  // Function to get the current theme
  function getCurrentTheme() {
    return currentTheme === 'dark' ? 'dark' : 'light';
  }

  // Function to get the current icon
  function getCurrentIcon() {
    return themeButtonRef.current && themeButtonRef.current.classList.contains(iconTheme)
      ? 'ri-moon-line'
      : 'ri-sun-line';
  }

  // Function to toggle the theme
  function toggleTheme() {
    // Toggle the class on the body element
    document.body.classList.toggle(darkTheme);
    // Toggle the class on the theme button
    themeButtonRef.current.classList.toggle(iconTheme);
    // Update the current theme state
    setCurrentTheme(getCurrentTheme());
    // Update the current icon state
    setCurrentIcon(getCurrentIcon());
    // Save the theme and icon choice in localStorage
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
  }

  return (
    <div>
      <header className="header w-100" id="header">
        <nav className="nav container">
          <NavLink href="#" className="nav__logo">
            <i className="ri-leaf-line nav__logo-icon"></i> Plantex
          </NavLink>

          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list">
              <li className="nav__item">
                <NavLink to="/" className="nav__link active-link">
                  Home
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/about" className="nav__link">
                  About
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/products" className="nav__link">
                  Products
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/contact" className="nav__link">
                  Contact Us
                </NavLink>
              </li>
            </ul>

            <div className="nav__close" id="nav-close">
              <i className="ri-close-line"></i>
            </div>
          </div>

          <div className="nav__btns">
            {/* Theme change button */}
            <i
              className={`ri-moon-line change-theme ${currentIcon}`}
              id="theme-button"
              ref={themeButtonRef}
              onClick={toggleTheme}
            ></i>

            <div className="nav__toggle" id="nav-toggle">
              <i className="ri-menu-line"></i>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

