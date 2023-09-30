import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
// import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

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

    console.log(itemCards);

    return (
        <div className="m-4 p-4">
            <h1 className="font-bold text-2xl">{name}</h1>
            <h3 className="mt-2 font-semibold">{cuisines.join(", ")} - {costForTwoMessage}</h3>
            <h2 className="mt-4 text-lg font-semibold">Menu</h2>
            <ul className="mt-2">
                {itemCards.map((item) => (
                    <li key={item?.card?.info?.id}> {item?.card?.info?.name} - Rs.{item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100}</li>
                ))}
            </ul>
        </div>
    )
}

export default RestaurantMenu;