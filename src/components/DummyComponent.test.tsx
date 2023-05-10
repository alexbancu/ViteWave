import { render, screen } from "@testing-library/react";
import DummyComponent from "./DummyComponent";

test("renders DummyComponent", () => {
  render(<DummyComponent />);
  const linkElement = screen.getByText(/Dummy Component/i);
  const linkElement2 = screen.getByText(/Dummy Componentt/i);
  expect(linkElement).toBeInTheDocument();
  expect(linkElement2).toBeInTheDocument();
});
