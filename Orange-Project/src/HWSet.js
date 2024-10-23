import React from 'react';

const HWSet = ({ hwSetName, quantity, onCheckIn, onCheckOut, onQuantityChange, customQuantity }) => {
  return (
    <div className="hwset">
      <h4>{hwSetName}: {quantity}/100</h4>
      <input
        type="number"
        value={customQuantity}
        onChange={onQuantityChange}
        placeholder="Enter quantity"
      />
      <button onClick={onCheckIn}>Check In</button>
      <button onClick={onCheckOut}>Check Out</button>
    </div>
  );
};

export default HWSet;
