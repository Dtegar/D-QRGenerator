import React from 'react';

const SectionTitle = ({ subtitle, title, description, center, light }) => {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      {subtitle && (
        <h4 className={`text-sm uppercase font-bold tracking-wider mb-2 ${light ? 'text-orange-300' : 'text-orange-500'}`}>
          {subtitle}
        </h4>
      )}
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${light ? 'text-white' : 'text-teal-900'}`}>
        {title}
      </h2>
      {description && (
        <p className={`max-w-2xl ${center ? 'mx-auto' : ''} ${light ? 'text-gray-300' : 'text-gray-600'}`}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;