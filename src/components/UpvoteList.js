import React, { useState } from 'react';
import Upvote from './Upvote';

const UpvoteList = () => {
  // Initial state for the upvotes
  const initialUpvotes = [
    [{ id: Date.now(), selected: false }],
    [{ id: Date.now() + 1, selected: false }],
    [{ id: Date.now() + 2, selected: false }],
  ];

  const [upvotes, setUpvotes] = useState(initialUpvotes);

  // Function to add a new upvote to a row
  const handleAddUpvote = (rowIndex) => {
    const newUpvote = { id: Date.now(), selected: false };
    const updatedUpvotes = [...upvotes];
    updatedUpvotes[rowIndex].push(newUpvote);
    setUpvotes(updatedUpvotes);
  };

  // Function to handle upvote selection toggle
  const handleUpvoteClick = (rowIndex, id, newSelectedState) => {
    const updatedUpvotes = [...upvotes];
    updatedUpvotes[rowIndex] = updatedUpvotes[rowIndex].map((upvote) =>
      upvote.id === id ? { ...upvote, selected: newSelectedState } : upvote
    );
    setUpvotes(updatedUpvotes);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start', // Align items to the left
        width: 'auto',
        padding: '20px',
        border: '2px solid #E0E0E0', // Light border for the entire container
        position: 'absolute', // Absolute positioning to left of the page
        left: '20px', // Distance from the left side of the page
      }}
    >
      {upvotes.map((row, rowIndex) => (
        <div
          key={rowIndex}
          style={{
            display: 'flex',
            alignItems: 'center', // Aligning all elements in a row
            marginBottom: '20px',
            width: 'auto', // Ensure the row stretches within the container
          }}
        >
          {/* Row of upvotes inside a fixed-size white rectangular box */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-start', // Align arrows to the left
              gap: '10px',
              borderRadius: '8px',
              padding: '10px',
              border: '2px solid #E0E0E0', // Light border for the rectangular box
              backgroundColor: '#FFFFFF', // White background for the row container
              width: '550px', // Fixed size for the container to fit 10-12 arrows
              height: '50px', // Height to fit the arrows
            }}
          >
            {row.map((upvote) => (
              <Upvote
                key={upvote.id}
                rowIndex={rowIndex}
                initialSelected={upvote.selected}
                onClick={(newSelectedState) =>
                  handleUpvoteClick(rowIndex, upvote.id, newSelectedState)
                }
              />
            ))}
          </div>

          {/* + Button to add a new upvote to the row */}
          <button
            onClick={() => handleAddUpvote(rowIndex)}
            style={{
              padding: '10px 20px',
              fontSize: '18px',
              borderRadius: '5px',
              backgroundColor: '#E5E8FD',
              border: 'none',
              cursor: 'pointer',
              marginLeft: '10px', // Space between the upvotes and the button
            }}
          >
            +
          </button>
        </div>
      ))}
    </div>
  );
};

export default UpvoteList;
