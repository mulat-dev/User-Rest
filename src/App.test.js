import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the restaurant brand and menu section", () => {
  render(<App />);

  expect(
    screen.getByRole("heading", { name: /chanolly noodles/i, level: 1 })
  ).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /our menu/i, level: 2 })).toBeInTheDocument();
});
