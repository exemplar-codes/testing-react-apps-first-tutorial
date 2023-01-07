import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async component", () => {
  test("renders posts if request succeeds", async () => {
    render(<Async />);

    const listItems = await screen.findAllByRole(
      "listitem",
      {
        /** exact etc */
      },
      {
        /* wait options - default wait time is 1 second, can be changed */
      }
    ); // re-inspects virtual UI for specified wait conditions

    expect(listItems).not.toHaveLength(0);
  });
});
