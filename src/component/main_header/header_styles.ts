import styled from "styled-components";

export const HeaderContainer = styled.div`
    
    
    margin: 15px auto 0;
    
    align-items: center;
    justify-content: center;
    //margin-right: 40px;
    height: 50px;

    nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .botons {
        display: flex;
        align-items: center;
        gap: 1rem;

        .locationContainer {
            display: flex;
            justify-content: center;
            align-items: center;

            gap: 0.2rem;
            padding: 5px;
            background-color: ${props => props.theme['purple-light']};
            border-radius: 8px;

            span {
                color: ${props => props.theme['purple-dark']};
            }
        }

        .cartLink {
            padding: 5px;
            border-radius: 8px;
            color: ${props => props.theme['yellow-dark']};
            background-color: ${props => props.theme['yellow-light']};

            &:hover {
                background-color: ${props => props.theme['yellow-dark']};
                color: ${props => props.theme['yellow-light']};
            }
        }
    }
    
`