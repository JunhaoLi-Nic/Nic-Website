import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import HamburgerButton from '@components/Tool/HamburgerButton';

describe('HamburgerButton Component', () => {
  it('should call the onClick handler when clicked', () => {
    const handleClick = jest.fn();  // Mock function to track calls
    const { getByRole } = render(<HamburgerButton onClick={handleClick} />);

    // Get the button by its role and accessible name provided via aria-label
    const button = getByRole('button', { name: '☰' });

    // Fire a click event
    fireEvent.click(button);

    // Expect the handleClick to have been called once
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
