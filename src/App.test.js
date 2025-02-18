// src/App.test.js

import { render, screen, fireEvent } from '@testing-library/react';
import { UpvoteProvider } from './context/UpvoteContext';
import App from './App';

test('toggles upvote selection on click', () => {
  render(
    <UpvoteProvider>
      <App />
    </UpvoteProvider>
  );

  const upvoteButton = screen.getAllByRole('button')[0];
  fireEvent.click(upvoteButton);

  const upvoteElement = screen.getByTestId('upvote-0-0');
  expect(upvoteElement).toHaveStyle('background-color: #E5E8FD');
});
