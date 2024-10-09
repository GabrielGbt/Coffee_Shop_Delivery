import { MapPinLine } from "@phosphor-icons/react";
import { AdressAndPayment, CartCheckoutContainer, CheckoutSidebar } from "./cart_styles";
import { CoffeeCardSelected } from "./components/product_selected_card/product_card_index";
import { DataStateContext } from "../../contexts/state/coffees";
import { useContext } from "react";


export function CartPage() {
    const { cartParam } = useContext(DataStateContext)

    return (
        <>
        <CartCheckoutContainer>
            <AdressAndPayment>
                <p>Complete seu pedido</p>
                <div className="AdressContainer">
                    <div id="title">
                        <MapPinLine size={24}/>
                        <span>
                            <p>Endereço de Entrega</p>
                            Informe o endereço onde deseja receber seu pedido
                        </span>
                    </div>

                    <div className="Labels-Line">
                        <div id="L1-2">
                            <input id="CepInput" type="text" placeholder="CEP" />
                            <input id="RuaInput" type="text" placeholder="Rua" />
                        </div>
                        <div id="L3-4">
                            <div id="L3">
                                <input id="NumberInput" type="text" placeholder="Número" />
                                <input id="ComplementInput" type="text" placeholder="Complemento" />
                            </div>
                            <div id="L4">
                                <input id="NeighborhoodInput" type="text" placeholder="Bairro"/>
                                <input id="CityInput" type="text" placeholder="Cidade"/>
                                <input id="DistrictInput" type="text" placeholder="UF"/>
                            </div>
                        </div>
                    </div>
                
                </div>
            </AdressAndPayment>

            <CheckoutSidebar>
                <p>Cafés selecionados</p>
                <div  className="SidebarContainer">
                    <div  className="SidebarItemsContainer">
                    {
                        cartParam ? cartParam.map((value) => {
                            return (
                                <CoffeeCardSelected key={value.id} {...value} />
                            );
                        }) : <div>Você não tem produtos</div>
                    }
                    </div>
                </div>
            </CheckoutSidebar>
        </CartCheckoutContainer>
        </>
    )
}