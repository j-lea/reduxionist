import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import {fireEvent} from "@testing-library/dom";

test('starts off not showing any film names', () => {
  const wrapper = render(<App />);

  const filmsShown = wrapper.container.querySelectorAll('.film');
  expect(filmsShown.length).toEqual(0);
});

test('lets you add your own films', () => {
  const wrapper = render(<App />);
  const { getByLabelText, getByText } = wrapper;

  const inputField = getByLabelText('Film Name');
  fireEvent.change(inputField, { target: { value: 'The Codfather' } })

  const submitButton = getByText('Add Film');
  submitButton.click();

  let filmsShown = wrapper.container.querySelectorAll('.film');
  expect(filmsShown.length).toEqual(1);
  expect(filmsShown[0].textContent).toEqual('The Codfather');


  fireEvent.change(inputField, { target: { value: 'Pietanic' } })

  submitButton.click();

  filmsShown = wrapper.container.querySelectorAll('.film');
  expect(filmsShown.length).toEqual(2);
  expect(filmsShown[0].textContent).toEqual('The Codfather');
  expect(filmsShown[1].textContent).toEqual('Pietanic');
});