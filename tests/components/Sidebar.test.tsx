import { render, screen } from '@testing-library/react';
import { Sidebar } from '../../frontend/src/components/Sidebar';

test('renders dashboard link', () => {
  render(<Sidebar />);
