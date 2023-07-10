import { fireEvent, render, screen } from '@testing-library/react';
import {
  renderWithTranslation
} from 'shared/lib/classNames/tests/renderWithTranslation/renderWithTranslation';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
  test('render sidebar', () => {
    renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('toggle', () => {
    renderWithTranslation(<Sidebar />);
    const toggleButton = screen.getByTestId('toggle-sidebar');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(toggleButton);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
