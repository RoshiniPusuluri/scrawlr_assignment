import React from 'react';
import UpvoteList from './components/UpvoteList';  // Correct path for UpvoteList

const App = () => {
  return (
    <div>
      <h1>Upvote Component</h1>
      <UpvoteList /> {/* Render the UpvoteList component */}
    </div>
  );
};

export default App;
