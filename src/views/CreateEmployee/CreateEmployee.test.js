import { useSelector } from "react-redux";
import { renderWithPathHome } from "../../utils/testWrapperPathHome";
import { render as customRender } from "../../utils/testWrapper";
import {
  screen,
  waitFor,
  findByText,
  getByLabelText,
  fireEvent,
  within,
} from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import CreateEmployee from "./CreateEmployee";
import React from "react";

describe("Create Employee should render correctly", () => {
  test("Title should render correctly", () => {
    document.body.innerHTML = "<div id=modal></div>";
    customRender(<CreateEmployee />);
    expect(screen.getByText("Create Employee")).toBeInTheDocument();
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

describe("Form should render correctly", () => {
  test("inputs should be render correctly", () => {
    document.body.innerHTML = "<div id=modal></div>";
    customRender(<CreateEmployee />);
    expect(
      screen.getByRole("textbox", { name: /first name/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("textbox", { name: /last name/i })
    ).toBeInTheDocument();

    expect(screen.getByRole("group", { name: /address/i })).toBeInTheDocument();
    expect(
      screen.getByRole("textbox", { name: /street/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: /city/i })).toBeInTheDocument();

    expect(
      screen.getByRole("spinbutton", { name: /zip code/i })
    ).toBeInTheDocument();
  });

  test("Save button should render correctly", () => {
    document.body.innerHTML = "<div id=modal></div>";
    customRender(<CreateEmployee />);
    expect(screen.getByText("Save")).toBeInTheDocument();
  });

  test("Error messages should render correclty", async () => {
    customRender(<CreateEmployee />);
    // expect(screen.getByText("Department")).toBeInTheDocument();
    const submitButton = screen.getByTestId("submit-button");
    expect(submitButton).toBeInTheDocument();
    userEvent.click(submitButton);
    await screen.findByText("First name is required");
    await screen.findByText("Last name is required");
    await screen.findByText("Birth date is required");
    await screen.findByText("Start date is required");
    await screen.findByText("Street is required");
    await screen.findByText("City is required");
    await screen.findByText("State is required");
    await screen.findByText("Zip code is required");
    await screen.findByText("Department is required");
  });

  test("Submit should not trigger if form is empty", async () => {
    const mockOnSubmit = jest.fn();
    document.body.innerHTML = "<div id=modal></div>";
    customRender(<CreateEmployee onSubmit={mockOnSubmit} />);
    expect(screen.getByText("Save")).toBeInTheDocument();
    const submitButton = screen.getByTestId("submit-button");
    await userEvent.click(submitButton);
    expect(mockOnSubmit).not.toHaveBeenCalled();
  });
});
