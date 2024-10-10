import styled from "styled-components";

export const CartCheckoutContainer = styled.div`
    display: flex;
    align-items: start;
    justify-content: space-between;
    margin: 20px 0 0;
    gap: 20px;
`

export const AdressAndPayment = styled.div`

    width: 65%;
    display: flex;
    flex-direction: column;

    p {
        font-family: 'baloo 2';
        font-weight: bold;
        font-size: 20px;
        color: ${props => props.theme['base-subtitle']};
        margin-bottom: 10px;
    }

    .AdressContainer {
        display: flex;
        flex-direction: column;
        width: 100%;
        border-radius: 8px;
        padding: 20px;
        
        background-color: ${props => props.theme['base-card']};
        gap: 20px;
    }

    #title {
        display: flex;
        gap: 5px;
        justify-content: start;
        align-items: center;
        color: ${props => props.theme['yellow-dark']};

        span {
            color: black;
            font-family: 'Arial';
            font-size: small;
            font-weight: 100;

            p {
                font-family: 'Arial';
                font-size: 15px;
                font-weight: 500;
                margin-bottom: 3px;
            }
        }
    }

    .Labels-Line {

        input {
            margin: 8px 0;
            padding: 10px;

            border-radius: 0.4rem;
            outline: none;
            border: none;

            &:active:focus {
                outline: none;
                border: none;
            }
        }

        #L1-2 {
            display: flex;
            flex-direction: column;
        }

        #L3-4 {
            display: flex;
            flex-direction: column;
        }

        #L3 {
            display: flex;
            gap: 10px;
        }

        #L4 {
            display: flex;
            gap: 10px;
        }

    }

    #CepInput {
        width: 10rem;
        
    }

    #RuaInput {
        width: 100%;
    }

    #NumberInput {
        width: 10rem;
    }

    #ComplementInput {
        width: 100%;
    }

    #NeighborhoodInput {
        width: 10rem;
    }

    #CityInput {
        width: 100%;
    }

    #DistrictInput {
        width: 4rem;
    }

`

export const PaymentContainer = styled.div`

    margin-top: 20px;
    padding: 40px;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme['base-card']};
    border-radius: 8px;
    gap: 30px;

    .TitlePayment {
        display: flex;
        gap: 10px;
        justify-content: start;

        #iconMoney {
            color: ${props => props.theme['purple']};
        }

        h1 {
            font-family: 'arial';
            font-weight: bold;
            font-size: medium;
        }

        p {
            font-family: 'arial';
            font-weight: 200;
            font-size: medium;
        }
    }

    .ButtonsPayment {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 30px;

        button {
            display: flex;
            flex: 1;
            height: 60px;
            background-color: ${props => props.theme['base-button']};
            border: none;
            border-radius: 5px;
            gap: 20px;
            align-items: center;
            text-align: start;
            flex-direction: row;
            padding: 30px;

            p {
                font-family: 'Arial';
                font-weight: 300;
                font-size: 20px;
                text-align: center;
            }

            &:hover {
                background-color: ${props => props.theme['yellow']};
                color: white;
            }
        }
    }
`




export const CheckoutSidebar = styled.div`
    
    @media (max-width: 1700px) {
        width: 30%;
        
        .SidebarContainer {
            width: 100%;
            background-color: black;
            padding: 30px 25px;
            object-fit: cover;
        }
    }

    @media (min-width: 1700px) {
        .SidebarContainer {
            padding: 30px 45px;
        }
    }

    display: flex;
    flex-direction: column;
    width: 30%;

    p {
        font-family: 'baloo 2';
        font-weight: bold;
        font-size: 20px;
        color: ${props => props.theme['base-subtitle']};
        margin-bottom: 10px;
    }

    .SidebarContainer {
        width: 100%;
        height: 100%;
        background-color: ${props => props.theme['base-card']};
        border-top-right-radius: 35px;
        border-bottom-left-radius: 35px;

        .SidebarItemsContainer {}
    }

    .ConfirmOrderContainer {
        
        margin-top: 20px;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 30px;

        .AllPrices {
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            //background-color: black;
            p {
                font-family: 'Arial';
                font-size: 15px;
                font-weight: 500;
            }

            #priceValues {
                text-align: end;
            }
        }

        button {
            width: 100%;
            height: 2.5rem;
            color: white;
            background-color: ${props => props.theme['yellow']};
            border: none;
            border-radius: 5px;

            &:hover {
                background-color: ${props => props.theme['yellow-dark']};
            }
        }

    }
`

