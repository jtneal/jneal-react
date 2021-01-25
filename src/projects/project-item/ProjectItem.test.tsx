import { render, screen } from '@testing-library/react';

import ProjectItem from './ProjectItem';

test('renders learn react link', () => {
  render(<ProjectItem />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
