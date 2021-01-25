import { render, screen } from '@testing-library/react';

import Skills from './Skills';

test('renders learn react link', () => {
  render(<Skills />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
