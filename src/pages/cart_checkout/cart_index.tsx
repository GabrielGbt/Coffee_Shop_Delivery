import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "@phosphor-icons/react";
import { AdressAndPayment, CartCheckoutContainer, CheckoutSidebar, PaymentContainer } from "./cart_styles";
import { CoffeeCardSelected } from "./components/product_selected_card/product_card_index";
import { DataStateContext } from "../../contexts/state/coffees";
import { useContext, useEffect, useState } from "react";


export function CartPage() {
    const { cartParam } = useContext(DataStateContext)

    const [ priceTotalItems, setPriceTotalItems ] = useState(0);
    const [ deliveryFee, setDeliveryFee ] = useState(0);
    const [ totalPrice, setTotalPrice ] = useState(0);

    useEffect(() => {
        const priceValues: number[] = cartParam.map((e) => e.price)
        const total: number = priceValues.reduce((acc, current) => acc + current, 0);
        setPriceTotalItems(total);

        setDeliveryFee(3.07);

        const totalValue: number = deliveryFee + priceTotalItems;
        setTotalPrice(totalValue);
    }, [cartParam, deliveryFee, priceTotalItems])

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

                <PaymentContainer>
                    <div className="TitlePayment">
                        <CurrencyDollar id="iconMoney" size={24}/>
                        <div>
                            <h1>Pagamento</h1>
                            <p>Escolha uma das opções de pagamento</p>
                        </div>
                    </div>
                    <div className="ButtonsPayment">
                        <button><CreditCard size={24}/> CARTÃO DE CRÉDITO</button>
                        <button><Bank size={24}/> CARTÃO DE DÉBITO</button>
                        <button><Money size={24}/>DINHEIRO</button>
                    </div>
                </PaymentContainer>
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
                    { // FIZ UM TERNÁRIO BEM AQUIII AAAAAAAAAAAA
                        cartParam ? <div className="ConfirmOrderContainer">
                        <div className="AllPrices">
                            <div>
                                <p>Total de itens</p>
                                <p>Entrega</p>
                                <h1>Total</h1>
                            </div>
                            <div id="priceValues">
                                <p>R$ {priceTotalItems}</p>
                                <p>R$ {deliveryFee}</p>
                                <h1>R$ {totalPrice}</h1>
                            </div>
                        </div>
                        <button >Confirmar Pedido</button>
                    </div> : <div>Parece que você não tem nenhum item por aqui! Volte e escolhe ao seu desejo!</div>
                    }
                </div>
            </CheckoutSidebar>
        </CartCheckoutContainer>
        </>
    )
}