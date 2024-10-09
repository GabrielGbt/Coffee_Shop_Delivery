import { MenuProductCard } from "./menu_card_styles";

import { Minus, Plus, ShoppingCartSimple } from "@phosphor-icons/react";
import { useContext, useState } from "react";
import { DataStateContext, Product } from "../../../../contexts/state/coffees";


export function MenuFormCard( value: Product ) {
    const [quantityValue, setQuantityValue] = useState<number>(0);
    const { setCartQuantity } = useContext(DataStateContext);

    const price: number = parseInt(value.price)

    function lessQuantity() {
        if (quantityValue > 0) {
            const value = quantityValue - 1;
            setQuantityValue(value);
        } else {
            return
        }
    }

    function moreQuantity() {
        if (quantityValue < 5) {
            const value = quantityValue + 1;
            return setQuantityValue(value);
        } else {
            return;
        }
    }

    function AddToCart() {
        const updatedProduct: Product = {
            id: value.id,
            description: value.description,
            name: value.name,
            price: value.price,
            image: value.image,
            quantity: quantityValue,
        }
        if (quantityValue > 0) {
            setCartQuantity(updatedProduct)
            setQuantityValue(0);
        } else {
            return
        }
    }
    return (
        <>
            <MenuProductCard>
            <div id="mainContainer">
                <div className="productForm">
                    </div>
                <div className="Product">
                       <div  className="IconAndAboutProd">
                            <div id="iconArea">
                                    <img src={value.image} />
                                </div>
                            <div id="aboutProduct">
                                <div  id="adjetivos">
                                    <p>TRADICIONAL</p>
                                </div>
                                <div  id="description">
                                    <h2>{value.name}</h2>
                                    <p>{value.description}</p>
                                </div>
                            </div>
                       </div>
                    <div className="priceAndButtons">
                        <div id="value">
                            <p>R$</p>
                            <p id="price">{price}</p>
                        </div>
                        <div className="buttonsFooterCard">
                            <div className="buttonsFormQuantity">
                                <button onClick={() => lessQuantity()}> <Minus /> </button>

                                <span id="quantity">{quantityValue ?? 0}</span>

                                <button onClick={() => moreQuantity()}> <Plus /> </button>
                            </div>
                            <div id="buttonAddToCartContainer">
                                <button onClick={() => AddToCart()}> <ShoppingCartSimple id="insertToCartButton" size={20} /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </MenuProductCard>
        </>
    )
        
}