// src/context/UpvoteContext.js

import React, { createContext, useContext, useState, useEffect } from 'react';

// Create context for managing upvote state
const UpvoteContext = createContext();

export const useUpvoteContext = () => useContext(UpvoteContext);

export const UpvoteProvider = ({ children }) => {
  // Ensure that each list has upvotes initially
  const [upvotes, setUpvotes] = useState([
    [{ selected: false }], // Initially one upvote in first list
    [{ selected: false }]  // Initially one upvote in second list
  ]);

  // Load from localStorage when the component mounts
  useEffect(() => {
    const savedUpvotes = JSON.parse(localStorage.getItem('upvotes'));
    if (savedUpvotes) {
      setUpvotes(savedUpvotes);
    }
  }, []);

  // Save upvotes to localStorage
  useEffect(() => {
    localStorage.setItem('upvotes', JSON.stringify(upvotes));
  }, [upvotes]);

  // Function to toggle the selected state of an upvote
  const toggleUpvote = (listIndex, upvoteIndex) => {
    const updatedUpvotes = [...upvotes];
    updatedUpvotes[listIndex][upvoteIndex].selected = !updatedUpvotes[listIndex][upvoteIndex].selected;
    setUpvotes(updatedUpvotes);
  };

  // Function to add a new upvote to a list
  const addUpvote = (listIndex) => {
    const updatedUpvotes = [...upvotes];
    updatedUpvotes[listIndex].push({ selected: false });
    setUpvotes(updatedUpvotes);
  };

  return (
    <UpvoteContext.Provider value={{ upvotes, toggleUpvote, addUpvote }}>
      {children}
    </UpvoteContext.Provider>
  );
};
