// components/button.js
import React from 'react';

export function Button({ children, onClick }) {
  return (
    <button className="bg-blue-500 text-white p-2 rounded" onClick={onClick}>
      {children}
    </button>
  );
}
