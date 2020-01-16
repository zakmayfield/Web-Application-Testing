import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { App } from './App';

test('app renders', () => {
  render(<App />);
})

test('strike btn and strike count are working', () => {
  const app = render(<App />);
  const strikeBtn = app.getByTestId(/strikeBtn/i);
  const strikeCount = app.getByTestId(/strikeCount/i)

  fireEvent.click(strikeBtn)
  expect(strikeCount.textContent).toBe('1')
})



