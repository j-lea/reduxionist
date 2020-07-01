import React from 'react';
import { render } from '@testing-library/react';
import List from './List';

test('renders all films given to it', () => {
    const films = ['a', 'bb', 'ccc']
    const wrapper = render(<List films={films} />);

    const filmsShown = wrapper.container.querySelectorAll('.film .name');
    const filmNamesShown = Array.from(filmsShown).map(filmElem => filmElem.textContent)
    expect(filmNamesShown).toEqual(films);
});

test('deleting a film triggers the DeleteFilm callback', () => {
    const films = ['a', 'bb', 'ccc']
    const deleteFilm = jest.fn();
    const wrapper = render(<List
        films={films}
        deleteFilm={deleteFilm}
    />);

    const filmsShown = wrapper.container.querySelectorAll('.film');
    filmsShown[1].querySelector('.delete').click();
    expect(deleteFilm).toHaveBeenCalledWith('bb');
});
