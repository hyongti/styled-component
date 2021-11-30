import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import "jest-styled-components";

describe("<App />", () => {
  it("renders component correctly", () => {
    const { container } = render(<App />);

    const regex = /Button/i;
    expect(container).toHaveTextContent(regex);
  });
});
