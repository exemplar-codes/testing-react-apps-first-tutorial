import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("renders Hello World! as text", () => {
    render(<Greeting />);

    const helloWorldText = screen.getByText("Hello World!", { exact: true });
    expect(helloWorldText).toBeInTheDocument();
  });

  test("renders Good to see you as text when button has NOT been clicked", () => {
    render(<Greeting />);

    const goodToSeeYouText = screen.getByText("good to see you", {
      exact: false,
    });
    expect(goodToSeeYouText).toBeInTheDocument();
  });

  test("does not render 'Changed!' text when button has NOT been clicked", () => {
    render(<Greeting />);

    const changedText = screen.queryByText("Changed!", { exact: true });
    expect(changedText).not.toBeInTheDocument();
  });

  test("renders Changed! text when button has been clicked once", () => {
    render(<Greeting />);

    // click the button
    const changeTextButton = screen.getByText("Change Text!"); // screen.getByRole('button')
    userEvent.click(changeTextButton);

    const changedText = screen.getByText("Changed!", { exact: true });
    expect(changedText).toBeInTheDocument();
  });

  test("does not render 'Good to see you' text when button has been clicked once", () => {
    render(<Greeting />);

    // click the button
    const changeTextButton = screen.getByText("Change Text!"); // screen.getByRole('button')
    userEvent.click(changeTextButton);

    const goodToSeeYouText = screen.queryByText("good to see you", {
      exact: false,
    });
    expect(goodToSeeYouText).not.toBeInTheDocument();
  });

  test("renders Changed! text when button has been clicked once - DIRECTLY", () => {
    render(<Greeting />);

    // click the button
    const changeTextButton = screen.getByText("Change Text!");
    changeTextButton.click(); // works fine, not discussed in the course.

    const changedText = screen.getByText("Changed!", { exact: true });
    expect(changedText).toBeInTheDocument();
  });
});
