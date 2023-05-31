import { renderWithPath404 } from "../../utils/testWrapperPath404";
import React from "react";
import PageNotFound from "./PageNotFound";

describe("Invalid route should display error page", () => {
  it("should pass", () => {
    renderWithPath404(<PageNotFound />);
  });
});
