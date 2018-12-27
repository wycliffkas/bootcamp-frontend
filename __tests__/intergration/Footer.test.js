import React from "react";
import {shallow } from "enzyme";
import Footer from "../../src/components/pages/Footer";

describe("<Content />", () => {
  it("should render without crashing", () => {
    const editor = shallow(<Footer />);
    expect(editor).toMatchSnapshot();
  });
});