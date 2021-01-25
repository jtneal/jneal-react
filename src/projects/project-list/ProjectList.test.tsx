import { render, screen } from '@testing-library/react';
import { History } from 'history';

import ProjectList from './ProjectList';

test('renders learn react link', () => {
  render(<ProjectList history={{} as History} />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
