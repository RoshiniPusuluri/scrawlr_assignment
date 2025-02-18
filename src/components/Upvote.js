import React, { useState } from 'react';

const Upvote = ({ initialSelected, onClick, rowIndex }) => {
  const [selected, setSelected] = useState(initialSelected);

  // Handle the upvote selection toggle
  const handleClick = () => {
    const newSelectedState = !selected;
    setSelected(newSelectedState);  // Update local state
    onClick(newSelectedState);  // Notify parent component of the change
  };

  // Determine the styles based on the selection state
  const getStyles = () => {
    if (rowIndex === 1) {
      // Second row - blue
      return {
        backgroundColor: selected ? '#E5E8FD' : '#F4F6F8', // Blue selected, gray default
        arrowColor: selected ? '#253CF2' : '#343A40', // Blue arrow on selected
      };
    } else if (rowIndex === 2) {
      // Third row - red
      return {
        backgroundColor: selected ? '#FDD0D0' : '#F4F6F8', // Red selected, gray default
        arrowColor: selected ? '#FF0000' : '#343A40', // Red arrow on selected
      };
    } else {
      // First row - default (gray)
      return {
        backgroundColor: '#F4F6F8', // Keep it gray without selection change
        arrowColor: '#343A40', // Default arrow color
      };
    }
  };

  const { backgroundColor, arrowColor } = getStyles();

  return (
    <div
      onClick={handleClick}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '50px', // Fixed width for the rectangular box
        height: '50px', // Fixed height for the rectangular box
        borderRadius: '8px',
        backgroundColor,
        cursor: 'pointer',
        marginRight: '10px',
        border: '2px solid #E0E0E0', // Light border for the box
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill={arrowColor} // Arrow color based on the selection state
      >
        <path d="M12 2L8 6h3v8h2V6h3z" />
      </svg>
    </div>
  );
};

export default Upvote;
