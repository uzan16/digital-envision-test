import React from 'react';
import HomeScreen from '../home';
import {fireEvent, render} from '@testing-library/react-native';

import {Provider} from 'overmind-react';
import {store} from '../../states/index';

describe("Home screen", () => {
  it('Should change from order by name to order by number of cats', () => {
    const page = render(<Provider value={store}><HomeScreen /></Provider>);
    page.getByText("Name");
    const sortButton = page.getByTestId('sortButton');
    fireEvent.press(sortButton);
    const numberOfCatItem = page.getByText('Number of Cats');
    fireEvent.press(numberOfCatItem);
    page.getByText("Number of Cats");
  });
});