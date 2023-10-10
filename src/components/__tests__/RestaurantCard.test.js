import { render, screen } from "@testing-library/react"
import RestaurantCard from "../RestaurantCard"
import MOCK_DATA from '../mocks/resCardMock.json'
import "@testing-library/jest-dom"

it("Should render RestaurantCard component with props data", () => {
    render(<RestaurantCard resData={MOCK_DATA} />);

    const name = screen.getByText("Leon's - Burgers & Wings (Leon Grill)");
    expect(name).toBeInTheDocument();
});

// it("Should render RestaurantCard component with Promoted label", () => {
//     render(
//         <RestaurantCard resData={MOCK_DATA} />
//     );

//     const promotedLabel = screen.getByText("Promoted");
//     expect(promotedLabel).toBeInTheDocument();
// })