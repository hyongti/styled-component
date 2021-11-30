import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";
import { ThemeProvider } from "styled-components";
import "jest-styled-components";

import Button from "./Button";

describe("<App />", () => {
  it("renders component correctly", () => {
    const { container } = render(
      <ThemeProvider
        theme={{
          palette: {
            blue: "#228be6",
            gray: "#495057",
            pink: "#f06595"
          }
        }}
      >
        <Button>hi</Button>
      </ThemeProvider>
    );

    const button = screen.getByText("hi");
    expect(button).toBeInTheDocument();
  });
});
