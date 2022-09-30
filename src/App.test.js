import { render, screen } from '@testing-library/react';
import App from './App';

test('renders browse music on spotify link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Browse Music on Spotify/i);
  expect(linkElement).toBeInTheDocument();
});
