import { render, within } from "../../utils/testWrapper";
import { screen } from "@testing-library/react";
import Modal from "./Modal";
import userEvent from "@testing-library/user-event";
import CreateEmployee from "../../views/CreateEmployee/CreateEmployee";

describe("Modal should render correctly", () => {
  it("Modal should render the title correctly", () => {
    document.body.innerHTML = "<div id=modal></div>";
    render(<Modal title={"Title"} />);
    expect(screen.getByText("Title")).toBeTruthy();
  });

  it("Modal should render the children correctly", () => {
    document.body.innerHTML = "<div id=modal></div>";
    render(<Modal children={"Children content"} />);
    expect(screen.getByText("Children content")).toBeTruthy();
  });

  it("Modal should have two button", () => {
    document.body.innerHTML = "<div id=modal></div>";
    render(<Modal />);
    expect(screen.getAllByRole("button")).toBeTruthy();
  });
});
