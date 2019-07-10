import React from 'react';
import {shallow} from 'enzyme';
import Counter from '../src/Counter';

describe('Counter suite tests', () => {
    it('Counter rendered properly', () => {
            const component = shallow(<Counter />);
            expect(component.getElements()).toMatchSnapshot();
    });
});