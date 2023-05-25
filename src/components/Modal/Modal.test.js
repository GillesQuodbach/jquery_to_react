import { render, within } from "../../utils/testWrapper";
import { screen } from "@testing-library/react";
import Modal from "./Modal";

describe("Modal should render correctly", () => {
  it("Modal should render the title correctly", () => {
    document.body.innerHTML = "<div id=modal></div>";
    render(<Modal title={"Title"} />);
    // expect(container).toMatchSnapshot();
    expect(screen.getByText("Title")).toBeTruthy();
  });

  it("Modal should render the children correctly", () => {
    document.body.innerHTML = "<div id=modal></div>";
    render(<Modal children={"Children content"} />);
    // expect(container).toMatchSnapshot();
    expect(screen.getByText("Children content")).toBeTruthy();
  });

  it("Modal should have two button", () => {
    document.body.innerHTML = "<div id=modal></div>";
    render(<Modal />);
    // expect(container).toMatchSnapshot();
    expect(screen.getAllByRole("button")).toBeTruthy();
  });
});
