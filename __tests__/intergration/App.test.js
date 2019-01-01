import React from 'react';
import { shallow } from "enzyme";
import App from '../../src/components/App';

describe("<App />", () => {
    it("it should render without crashing", () => {
        expect(shallow(<App />)).toMatchSnapshot();
    });
});