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

  test("renders posts if request succeeds - mocked", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [
        {
          userId: 1,
          id: 1,
          title:
            "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
          body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        },
      ],
    }); // Keep mock consistent -  fetch returns an object than has an async function called `json`.

    render(<Async />);

    const listItems = await screen.findAllByRole("listitem");

    expect(listItems).not.toHaveLength(0);
  });
});
