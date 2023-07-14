import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/classNames/tests/componentRender/componentRender';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
  test('render sidebar', () => {
    componentRender(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('toggle', () => {
    componentRender(<Sidebar />);
    const toggleButton = screen.getByTestId('toggle-sidebar');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(toggleButton);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
