import React from 'react';
import { Link } from 'react-scroll';

const Button = ({ children, to, href, variant = 'primary', className = '', onClick }) => {
  const baseStyles = 'inline-block px-6 py-3 rounded-md font-medium transition-all duration-300 text-center';
  
  const variants = {
    primary: 'bg-orange-500 hover:bg-orange-600 text-white shadow-md hover:shadow-lg',
    secondary: 'bg-teal-700 hover:bg-teal-800 text-white shadow-md hover:shadow-lg',
    outline: 'border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white',
    white: 'bg-white text-teal-800 hover:bg-gray-100 shadow-md hover:shadow-lg',
  };

  const buttonStyles = `${baseStyles} ${variants[variant]} ${className}`;

  // If 'to' prop is provided, render a scroll link
  if (to) {
    return (
      <Link
        to={to}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className={buttonStyles}
        onClick={onClick}
      >
        {children}
      </Link>
    );
  }

  // If 'href' prop is provided, render an anchor tag
  if (href) {
    return (
      <a href={href} className={buttonStyles} onClick={onClick}>
        {children}
      </a>
    );
  }

  // Otherwise, render a button
  return (
    <button className={buttonStyles} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;