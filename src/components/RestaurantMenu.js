import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
// import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
    const { resId } = useParams();

    const resInfo = useRestaurantMenu(resId);

    if (resInfo === null) return <Shimmer />;

    const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;

    const { itemCards: itemCards1 } =
        resInfo.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[1]?.card?.card || {};

    const { itemCards: itemCards2 } =
        resInfo.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[2]?.card?.card || {};

    const itemCards = (itemCards1 || []).concat(itemCards2 || []);

    // console.log(itemCards);

    const categories = resInfo.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) =>
        c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    // console.log(resInfo.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards);
    // console.log(categories);

    return (
        <div className="m-4 p-4 text-center">
            <h1 className="font-bold text-2xl">{name}</h1>
            <h3 className="mt-2 font-semibold">{cuisines.join(", ")} - {costForTwoMessage}</h3>
            {categories.map((category) => <RestaurantCategory key={category?.card?.card.title} data={category?.card?.card} />)}
        </div>
    )
}

export default RestaurantMenu;