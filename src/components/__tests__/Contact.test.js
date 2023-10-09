import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom";

describe("Contact Us Page Test Case", () => {
    //it is an alias of test => Note
    // test("Should load contact us component", () => {
    it("Should load contact us component", () => {
        render(<Contact />);

        const heading = screen.getByRole("heading");

        //Assertion(our expected answer)
        expect(heading).toBeInTheDocument();
    });

    it("Should load button inside Contact Component", () => {
        render(<Contact />);
        const button = screen.getByRole("button");
        // const button = screen.getByText("Submit");
        expect(button).toBeInTheDocument();
    });

    test("Should load input name inside Contact component", () => {
        render(<Contact />);
        const inputName = screen.getByPlaceholderText("Name");
        expect(inputName).toBeInTheDocument();
    })

    test("Should load 2 input boxes on the Contact Component", () => {
        render(<Contact />);
        const inputBoxes = screen.getAllByRole("textbox");
        console.log(inputBoxes.length);
        expect(inputBoxes.length).toBe(2);
    })
})