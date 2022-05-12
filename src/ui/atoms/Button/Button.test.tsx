/* eslint-disable testing-library/no-node-access */
import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "./Button";
import userEvent from "@testing-library/user-event";
import withTheme from "src/hocs/withTheme";

const ThemedButton = withTheme(Button);
describe("Button", () => {
  test("renders a default button with text", () => {
    const { baseElement } = render(
      <ThemedButton id="mybutton" label={"Click me"} />
    );
    const button = baseElement.querySelector("#mybutton");
    // const text = screen.getByText('Click Me');
    expect(button).toBeInTheDocument();
    // expect(text).toBeInTheDocument();
    expect(button).toHaveStyle({
      backgroundColor: "primary",
      color: "white",
    });
    // expect(text).toHaveStyle({
    //     color: 'white',
    //     fontSize: "1.125rem"
    // });
    expect(baseElement).toMatchSnapshot();
  });
  test("renders a primary button", () => {
    const { baseElement } = render(
      <ThemedButton id="mybutton" variant="primary" label={"Click me"} />
    );
    const button = baseElement.querySelector("#mybutton");
    // const text = screen.getByText('Click Me');
    // console.log("button style is", button.style)
    expect(button).toHaveStyle({
      backgroundColor: "primary",
      color: "white",
    });
    // expect(text).toHaveStyle({
    //     backgroundColor: 'primary',
    //     color: 'white',
    // });
    expect(baseElement).toMatchSnapshot();
  });

  test("renders a primary overriden button", () => {
    const { baseElement } = render(
      <ThemedButton
        id="mybutton"
        variant="primary"
        backgroundColor="blue"
        label={"Click me"}
      />
    );
    const button = baseElement.querySelector("#mybutton");
    // const text = screen.getByText('Click Me');
    // console.log("button style is", button.style)
    expect(button).toHaveStyle({
      backgroundColor: "blue",
      color: "white",
    });
    // expect(text).toHaveStyle({
    //     backgroundColor: 'primary',
    //     color: 'white',
    // });
    expect(baseElement).toMatchSnapshot();
  });
  test("handles onClick", () => {
    const mockOnClick = jest.fn();
    const { baseElement } = render(
      <ThemedButton id="mybutton" label={"Click Me"} onClick={mockOnClick} />
    );
    const button = baseElement.querySelector("#mybutton");
    userEvent.click(button!);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
    expect(baseElement).toMatchSnapshot();
  });
});

