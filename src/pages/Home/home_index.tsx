import { useContext } from "react";

import { HomePageHeader } from "./components/apresentation/home_header";
import { MenuFormCard } from "./components/menu_card/menu_card_index";

import { ProductListing } from './home_styles';
import { DataStateContext } from "../../contexts/state/coffees";



export function HomePage() {
    const { products } = useContext(DataStateContext);

    return (
        <article>
        <HomePageHeader />
        <ProductListing>
            <ul>
                {
                    products.map(value => {
                        return <li key={value.id}>
                            <MenuFormCard
                                 {...value}
                                /> 
                            </li>
                    })
                }
            </ul>
        </ProductListing>
        </article>
    )
}