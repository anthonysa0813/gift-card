import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import GifsGrid from "../../components/GifsGrid";

describe("Pruebas en GifsGrid", () => {
  test("GifsGrid debe de estar correctamente", () => {
    const wrapper = shallow(<GifsGrid />);
    expect(wrapper).toMatchSnapshot();
  });
});
