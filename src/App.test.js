// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders QwenDrift title', () => {
    render(<App />);
    const titleElement = screen.getByText(/QwenDrift/i);
    expect(titleElement).toBeInTheDocument();
});
