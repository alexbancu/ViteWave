import { render, screen } from "@testing-library/react";
import DummyComponent from "./DummyComponent";

test("renders DummyComponent", () => {
  render(<DummyComponent />);
  const linkElement = screen.getByText(/Dummy Component/i);
  expect(linkElement).toBeInTheDocument();
});
