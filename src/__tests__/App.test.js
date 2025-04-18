import { render, screen } from "@testing-library/react";
import App from "../App";
import '@testing-library/jest-dom';

test("renders App component", () => {
  render(<App />);
  const heading = screen.getByText(/select pizza toppings/i);
  expect(heading).toBeInTheDocument();
});
