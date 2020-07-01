import React from 'react';
import {render} from '@testing-library/react'
import NewFilmInput from './NewFilmInput';
import {fireEvent} from "@testing-library/dom";

test('has empty input field', () => {
    const { getByLabelText } = render(<NewFilmInput/>);

    const inputField = getByLabelText('Film Name')
    expect(inputField).toBeTruthy();
});

test('has "Add Film" button', () => {
    const { getByText } = render(<NewFilmInput/>);

    const button = getByText('Add Film');
    expect(button).toBeTruthy();
});

test('pressing "Add Film" calls onSubmit with the film name', () => {
    const mockAddFilm = jest.fn();
    const { getByLabelText, getByText } = render(<NewFilmInput onSubmit={mockAddFilm}/>);

    const inputField = getByLabelText('Film Name');
    fireEvent.change(inputField, { target: { value: 'The 59th Best Exotic Marigold Hotel' } })

    const submitButton = getByText('Add Film');
    submitButton.click();

    expect(mockAddFilm).toHaveBeenCalledWith('The 59th Best Exotic Marigold Hotel');
});

test('pressing "Add Film" clears the input text', () => {
    const mockAddFilm = jest.fn();
    const { getByLabelText, getByText } = render(<NewFilmInput onSubmit={mockAddFilm}/>);

    const inputField = getByLabelText('Film Name');
    fireEvent.change(inputField, { target: { value: 'Reservoir Sprogs' } })

    const submitButton = getByText('Add Film');
    submitButton.click();

    expect(inputField.value).toBe('');
});