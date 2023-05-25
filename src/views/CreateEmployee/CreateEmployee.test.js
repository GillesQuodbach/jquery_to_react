import { renderWithPathHome } from "../../utils/testWrapperPathHome";
import { render as customRender } from "../../utils/testWrapper";

import { screen, waitFor, findByText } from "@testing-library/react";

import { MemoryRouter, Routes, Route } from "react-router";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import CreateEmployee from "./CreateEmployee";

describe("Create Employee should render correctly", () => {
  test("Title should render correctly", () => {
    document.body.innerHTML = "<div id=modal></div>";
    customRender(<CreateEmployee />);
    expect(screen.getByText("Create Employee")).toBeInTheDocument();
  });

  test("Save button should render correctly", () => {
    document.body.innerHTML = "<div id=modal></div>";
    customRender(<CreateEmployee />);
    expect(screen.getByText("Save")).toBeInTheDocument();
  });

  test("Modal should open correctly when clic on save button", async () => {
    document.body.innerHTML = "<div id=modal></div>";
    customRender(<CreateEmployee />);
    const user = userEvent.setup();
    expect(screen.getByText(/save/i)).toBeInTheDocument();
    await user.click(screen.getByText(/save/i));
    expect(screen.getByText(/ok/i)).toBeInTheDocument();
  });
});
