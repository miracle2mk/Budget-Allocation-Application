import React, { useState } from 'react';

const AllocationForm = () => {
  const [allocation, setAllocation] = useState('');

  const handleAllocationChange = (event) => {
    const value = event.target.value;
    
    // Remove any non-numeric characters from the input value
    const sanitizedValue = value.replace(/[^0-9]/g, '');

    setAllocation(sanitizedValue);
  };

  return (
    <div>
      <label htmlFor="allocation">Allocation:</label>
      <input
        type="text"
        id="allocation"
        value={allocation}
        onChange={handleAllocationChange}
      />
    </div>
  );
};

export default AllocationForm;
