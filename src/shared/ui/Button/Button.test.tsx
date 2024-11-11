import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from 'shared/ui/Button/Button';
import { ButtonVariants } from './Button';

describe('Test Button Component', () => {
  test('test render', () => {
    render(<Button>Test</Button>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  test('should be clear class', () => {
    render(<Button variant={ButtonVariants.clear}>Test</Button>);

    expect(screen.getByText('Test')).toHaveClass('clear');
    screen.debug();
  });
});
