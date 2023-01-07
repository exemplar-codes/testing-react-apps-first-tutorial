import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("renders Hello World! as text", () => {
    render(<Greeting />);
    const helloWorldText = screen.queryByText("Hello World!", { exact: true });
    expect(helloWorldText).toBeInTheDocument();
  });

  test("renders Good to see you as text when button has NOT been clicked", () => {
    render(<Greeting />);

    const goodToSeeYouText = screen.queryByText("good to see you", {
      exact: false,
    });
    expect(goodToSeeYouText).toBeInTheDocument();
  });

  test("renders Changed! text when button has been clicked once", () => {
    render(<Greeting />);

    // click the button
    const changeTextButton = screen.queryByText("Change Text!"); // screen.getByRole('button')
    userEvent.click(changeTextButton);

    const changedText = screen.queryByText("Changed!", { exact: true });
    expect(changedText).toBeInTheDocument();
  });
});
