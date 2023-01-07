import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

describe("Greeting component root", () => {
  test("Hello World! is shown as text", () => {
    render(<Greeting />);
    const helloWorldText = screen.queryByText("Hello World!", { exact: true });
    expect(helloWorldText).toBeInTheDocument();
  });
});
