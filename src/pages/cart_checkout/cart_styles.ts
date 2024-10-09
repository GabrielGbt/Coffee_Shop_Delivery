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
        height: 25rem;
        background-color: ${props => props.theme['base-card']};
        border-top-right-radius: 35px;
        border-bottom-left-radius: 35px;

        .SidebarItemsContainer {
            //background-color: pink;
            
        }
    }
`

