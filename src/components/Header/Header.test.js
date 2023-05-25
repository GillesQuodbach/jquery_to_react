import { renderWithPathHome } from "../../utils/testWrapperPathHome";
import { render as customRender } from "../../utils/testWrapper";

import { screen, waitFor, findByText } from "@testing-library/react";
import Header from "./Header";
import { MemoryRouter, Routes, Route } from "react-router";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";

describe("Header should render correctly", () => {
  test("Header should render the title correctly", () => {
    customRender(<Header />);
    expect(screen.getByText("HRnet")).toBeInTheDocument();
  });

  test("Header home render correclty", async () => {
    render(<Header />, { wrapper: BrowserRouter });
    const user = userEvent.setup();
    expect(screen.getByText(/view current employees/i)).toBeInTheDocument();
    await user.click(screen.getByText(/view current employees/i));
    expect(screen.getByText(/home/i)).toBeInTheDocument();
  });

  test("Header home button render correclty", async () => {
    renderWithPathHome(<Header />, { wrapper: BrowserRouter });
    const user = userEvent.setup();
    expect(screen.getByText(/view current employees/i)).toBeInTheDocument();
    await user.click(screen.getByText(/view current employees/i));
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
  });
});
