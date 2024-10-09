import styled from "styled-components";

export const MenuProductCard = styled.div`  //NEW COMPONENT
    height: 100%;

    @media (max-width: 1300px) {
        .priceAndButtons {
            display: flex;
            flex-direction: column;
        }
    }

    @media (max-width: 768px) {
    width: 100%;

        .values {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
    }

    #mainContainer{
        height: 100%;
        margin-top: 1.3rem;
        position: relative;
        overflow: hidden;
        border-bottom-left-radius: 30px;
        
        width: 15rem;
    }


    .productForm {
        width: 100%;
        
        position: absolute;
        
        bottom: 0;
        top: 3rem;
        left: 0;
        right: 0;

        background-color: ${props => props.theme['base-card']};
        border-top-right-radius: 30px;

    }
    
    #iconArea {
        padding: 1rem;
        text-align: center;
    }

    #adjetivos {
        width: fit-content;
        padding: 0.3rem;
        margin-right: auto;
        margin-left: auto;
        border-radius: 0.7rem;

        background-color: ${props => props.theme['yellow-light']};

        p {
            font-size: small;
            color: ${props => props.theme['yellow-dark']};
        }
    }


    .Product {
        display: flex;
        flex-direction: column;
        
        height: 100%;
        width: 100%;
        position: relative;
        text-align: center;
        justify-content: space-between;
    }

    #description {
        height: 100%;
        font-size: small;
        h2 {
            font-family: 'baloo 2';
            color: ${props => props.theme['base-subtitle']};
            margin: 0.4rem 0;
        }

        p {
            padding: 0 0.7rem;
            color: ${props => props.theme['base-label']};
        }
    }

    .priceAndButtons {
        margin: 1rem 0;
        display: flex;
        
        justify-content: space-evenly;
        align-items: center;

        //background-color: pink;

        #value {
            display: flex;
            align-items: center;

            font-family: 'baloo 2';
            color: ${props => props.theme['base-text']};
            
            #value > p {
                font-size: 12px;
            }

            #price {
                font-size: 24px;
                font-weight: bold;
            }
        }

        .buttonsFooterCard {
            display: flex;
            
            flex-direction: row;
            gap: 10px;
        }


        .buttonsFormQuantity {
            display: flex;
            justify-content: space-evenly;
            text-align: center;
            align-items: center;
            
            
            background-color: ${props => props.theme['base-button']};
            border-radius: 5px;
            padding: 5px;

            #quantity {
                margin: 0 5px;
            }

            button {
                outline: none;
                border: none;
                background-color: transparent;
                color: ${props => props.theme['purple-dark']};
            }

            button:focus,
            button:active {
                outline: none;        /* Remove o contorno no clique */
                //border: none;         /* Remove mudanças de borda no clique */
                transform: none;      /* Impede mudanças de escala */
                box-shadow: none;     /* Remove sombra que pode ser aplicada em alguns navegadores */
            }
        }

        #buttonAddToCartContainer {
            height: auto;
            background-color: ${props => props.theme['purple-dark']};
            border-radius: 5px;

            #insertToCartButton {
                color: white;
            }

            button {
                color: white;
                background-color: transparent;
                padding: 5px;
                height: 100%;
                width: height;
                border: none;
            }

            &:hover, &:active {
                background-color: ${props => props.theme['yellow-dark']};
            }
        }
    }
`