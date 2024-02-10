import React from 'react';
import { render } from '@testing-library/react';
import App from '../src/app/app';
import '@testing-library/jest-dom';

describe('Home', () => {
  it('renders a heading', () => {
    render(<App />);
  });
});
