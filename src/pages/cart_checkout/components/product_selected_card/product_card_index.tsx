
import { useState } from "react";
import { CardContainer } from "./product_card_styles";

import { Minus, Plus, Trash } from "@phosphor-icons/react";
import { Product } from "../../../../contexts/state/coffees";

export function CoffeeCardSelected(value: Product) {
    const [ quantityValue , setQuantityValue ] = useState(0);
    

    function lessQuantity() {
        if (quantityValue > 0) {
            return setQuantityValue(quantityValue - 1);
        } else {
            return
        }
    }

    function moreQuantity() {
        if (quantityValue < 5) {
            return setQuantityValue(quantityValue + 1);
        } else {
            return;
        }
    }

    return (
        <CardContainer>
            <div className="Main">
                <img id="img" src={value.image} />
                <div className="Description">
                    <p>{value.name}</p>
                    <div className="Buttons">
                        <div className="buttonsFormQuantity">
                            <button onClick={(lessQuantity)}> <Minus size={20} /> </button>

                            <span id="quantity">{quantityValue ?? '0'}</span>

                            <button onClick={(moreQuantity)}> <Plus size={20} /> </button>
                        </div>
                        <div id="DeleteButtonContainer">
                            <button > <Trash size={24} /></button>
                        </div>
                    </div>
                </div>
                <span id="price">
                    R$ 9.90
                </span>
            </div>
        </CardContainer>
    )
}