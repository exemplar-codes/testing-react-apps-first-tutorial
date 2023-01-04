import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />); // simulate

  // do something - mimick events

  const linkElement = screen.getByText(/learn react/i); // inspect

  expect(linkElement).toBeInTheDocument(); // assert
});
