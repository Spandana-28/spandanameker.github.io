import React from 'react';
import { render, screen } from '@testing-library/react';
import Loader from './index';

describe('Loader', () => {
  test('renders loader text', () => {
    render(<Loader />);
    expect(screen.getByText('Spandana Meker Kuberappa')).toBeInTheDocument();
    expect(screen.getByText('Portfolio')).toBeInTheDocument();
  });
});
