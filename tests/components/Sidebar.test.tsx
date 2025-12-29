import { render, screen } from '@testing-library/react';
import { Sidebar } from '../../frontend/src/components/Sidebar';

test('renders dashboard link', () => {
  render(<Sidebar />);
  const linkElement = screen.getByText(/Dashboard/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders settings link', () => {
  render(<Sidebar />);
  const linkElement = screen.getByText(/Settings/i);
  expect(linkElement).toBeInTheDocument();
