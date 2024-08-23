import React from 'react';
import useLocalStorageState from 'use-local-storage-state';
import './UnitToggle.css';

const UnitToggle = ({ onToggle, unit }) => {
  
  const [preferredUnit, setPreferredUnit] = useLocalStorageState('preferredUnit', {
    defaultValue: unit,
  });

  const handleToggle = () => {
    const newUnit = preferredUnit === 'C' ? 'F' : 'C';
    setPreferredUnit(newUnit);
    onToggle(newUnit);
  };

  return (
    <div className="unit-toggle">
      <button onClick={handleToggle} className="toggle-button">
        {preferredUnit === 'C' ? 'Switch to Fahrenheit' : 'Switch to Celsius'}
      </button>
    </div>
  );
};

export default UnitToggle;
