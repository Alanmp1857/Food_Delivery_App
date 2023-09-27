import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
// import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    const { resId } = useParams();

    // const [resInfo, setResInfo] = useState(null);
    const resInfo = useRestaurantMenu(resId);

    // useEffect(() => {
    //     fetchMenu();
    // }, []); 

    // const fetchMenu = async () => {
    //     console.log(MENU_API + resId);
    //     const data = await fetch(MENU_API + resId);
    //     const json = await data.json();
    //     setResInfo(json.data);
    // }

    if (resInfo === null) return <Shimmer />;
    // console.log(resInfo)
    // console.log(resId)

    const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;

    // const x = resInfo?.cards[2]?.groupedCard.cardGroupMap.REGULAR.cards[1];
    // const { itemCards } =
    //     (resInfo.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[1]?.card?.card) ||
    //     (resInfo.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[2]?.card?.card);

    const { itemCards: itemCards1 } =
        resInfo.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[1]?.card?.card || {};

    const { itemCards: itemCards2 } =
        resInfo.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[2]?.card?.card || {};

    const itemCards = (itemCards1 || []).concat(itemCards2 || []);

    console.log(itemCards);

    return (
        <div className="menu">
            <h1>{name}</h1>
            <h3>{cuisines.join(", ")} - {costForTwoMessage}</h3>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((item) => (
                    <li key={item?.card?.info?.id}> {item?.card?.info?.name} - Rs.{item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100}</li>
                ))}
            </ul>
        </div>
    )
}

export default RestaurantMenu;