import React from 'react';
import {getByText, render} from '@testing-library/react';
import ListItem from './ListItem';

test('renders the text given to it', () => {
    const { getByText} = render(<ListItem itemName="I am an item" />);

    expect(getByText('I am an item')).toBeTruthy();
});

test('lets you delete an item', () => {
    const deleteItem = jest.fn();
    const wrapper = render(<ListItem
        itemName="I am an item"
        onDelete={deleteItem}
    />);

    wrapper.container.querySelector('.delete').click();

    expect(deleteItem).toHaveBeenCalledTimes(1);
});
