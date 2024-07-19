import React from 'react';

const Autocomplete:React.FC = () => {

  return (
    <div className="relative w-full max-w-md mx-auto mt-10">
      <input
        type="text"
        className="border border-gray-300 p-2 w-full focus:outline-none focus:border-blue-500"
      />
    </div>
  );
};

export default Autocomplete;
