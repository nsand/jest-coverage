import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Button from '../Button';

describe('Button', () => {
	it('should have an icon', () => {
		const button = shallow(<Button></Button>);
		expect(button.find('Icon').length).toBe(1);
	})
})