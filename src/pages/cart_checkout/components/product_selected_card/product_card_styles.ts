import styled from "styled-components";

export const CardContainer = styled.div`
    //background-color: black;

    @media (max-width: 1700px) {
        //background-color: black;
        width: 100%;
        object-fit: contain;
        
        #img {
            width: 20%;
            height: 20%;
        }

        .Main {
            width: 100%;
            display: flex;
            justify-content: space-around;
        }

        #DeleteButtonContainer {
            width: 100%;
            button {
                font-size: small;
                font-weight: 100;
            }
        }
        
        #price {
            display: block;
            align-self: self-start;
        }

        .Description {
            width: 100%;
            display: flex;
        }

        .Buttons {
            width: 100%;
        }
    }
    
    display: flex;
    width: 100%;
    height: 30%;
    //justify-content: space-between;
    align-items: center;
    gap: 20px;
    padding: 15px 0 30px;
    margin-bottom: 0px;

    border-bottom: 0.5px solid rgba(0, 0, 0, 0.3);

    .Main {
        width: 100%;
        display: flex;
        flex-direction: row;
        gap: 15px;
    }

    img {
        width: 30%;
        height: 30%;
    }

    .Description {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 5px;

        p {
            font-family: 'Arial';
            font-size: 17px;
            font-weight: 100;
        }

        .Buttons {
            width: 100%;
            display: flex;
            align-items: center;

            gap: 5px;

            button {
                outline: none;
                border: none;
                color: ${props => props.theme['purple-dark']};
                background-color: ${props => props.theme['base-button']};
                }

            .buttonsFormQuantity {
                width: auto;
                //height: 100%;
                display: flex;
                justify-content: space-evenly;
                text-align: center;
                align-items: center;
                
                background-color: ${props => props.theme['base-button']};
                border-radius: 5px;
                padding: 3px;

                span {
                    margin: 0 5px;
                }
            }

            #DeleteButtonContainer {
                width: auto;
                display: flex;
                text-align: center;
                align-items: center;
                
                background-color: ${props => props.theme['base-button']};
                border-radius: 5px;
                padding: 3px;

                button {
                    align-items: center;
                    outline: none;
                    display: flex;
                    gap: 5px;
                }
            }
        }
    }

    #price {
        font-family: 'Arial';
        font-size: medium;
        font-weight: bold;
    }
`