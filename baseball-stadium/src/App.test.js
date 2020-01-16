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
  fireEvent.click(strikeBtn)
  fireEvent.click(strikeBtn)
  expect(strikeCount.textContent).toBe('0')
})

test('ball btn and ball count are working', () => {
  const app = render(<App />);
  const ballBtn = app.getByTestId(/ballBtn/i);
  const ballCount = app.getByTestId(/ballCount/i);

  fireEvent.click(ballBtn)
  expect(ballCount.textContent).toBe('1')
})

test('hit button resets strikes and balls', () => {
  const app = render(<App />);
  const hitBtn = app.getByTestId(/hitBtn/i);
  const strikeCount = app.getByTestId(/strikeCount/i);
  const ballCount = app.getByTestId(/ballCount/i);
  const strikeBtn = app.getByTestId(/strikeBtn/i);
  const ballBtn = app.getByTestId(/ballBtn/i);

  fireEvent.click(strikeBtn)
  fireEvent.click(ballBtn)
  fireEvent.click(hitBtn)
  expect(strikeCount.textContent).toBe('1');
  expect(ballCount.textContent).toBe('1');
})

