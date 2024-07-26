import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '@components/Header/header';


describe('Header Component', () => {
  it('should toggle the navigation on hamburger button click', () => {
    const { getByText, getByTestId } = render(<Header />);
    
    // Assuming the button has text '☰' for open/close
    const button = getByText('☰');
    
    // Simulate user clicking the hamburger menu button
    fireEvent.click(button);
    
    // Check if the taskbar menu opens
    expect(getByTestId('taskbaar')).toHaveClass('open');
    
    // Simulate another click to close the menu
    fireEvent.click(button);
    
    // Check if the taskbar menu closes
    expect(getByTestId('taskbaar')).not.toHaveClass('open');
  });
});
