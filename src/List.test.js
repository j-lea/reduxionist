import React from 'react';
import { render } from '@testing-library/react';
import List from './List';

test('renders all films given to it', () => {
    const films = ['a', 'bb', 'ccc']
    const wrapper = render(<List films={films} />);

    const filmsShown = wrapper.container.querySelectorAll('.film');
    const filmNamesShown = Array.from(filmsShown).map(filmElem => filmElem.textContent)
    expect(filmNamesShown).toEqual(films);
});
