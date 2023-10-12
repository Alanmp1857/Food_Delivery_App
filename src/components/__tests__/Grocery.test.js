import { render, screen } from "@testing-library/react";
import Grocery from "../Grocery";
import "@testing-library/jest-dom";

it("Should render the grocery page", () => {
    render(<Grocery />);

    const loadPage = screen.getByRole("button", { name: "Submit" });
    expect(loadPage).toBeInTheDocument();
})