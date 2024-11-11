import { fireEvent, screen } from '@testing-library/react';
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import { SideBar } from 'widgets/SideBar/ui/SideBar/SideBar';

describe('SideBar', () => {
  test('should sidebar', () => {
    renderWithTranslation(<SideBar />);

    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('should toogle sidebar', () => { 
    renderWithTranslation(<SideBar />);
    
    const toogleButton = screen.getByTestId('toogle-sidebar');
    fireEvent.click(toogleButton);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');

   })
});
