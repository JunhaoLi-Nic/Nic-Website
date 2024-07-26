import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';  // This is usually how it's imported to extend expect
import Header from '@components/Header/header';

describe('Header Component', () => {
  it('should toggle the navigation on hamburger button click', () => {
    const { getByRole, queryByTestId } = render(<Header />);
    
    // Get the hamburger menu button by its accessible name
    const hamburgerButton = getByRole('button', { name: '☰' });
    
    // Click on the hamburger button to open the navigation menu
    fireEvent.click(hamburgerButton);
    
    // Check if the navigation menu has the 'open' class after clicking the button
    const navigationMenu = queryByTestId('taskbar');
    expect(navigationMenu).toHaveClass('open');

    // Click the button again to close the navigation menu
    fireEvent.click(hamburgerButton);
    
    // Verify that the 'open' class is removed, indicating the navigation menu is closed
    expect(navigationMenu).not.toHaveClass('open');
  });
});
