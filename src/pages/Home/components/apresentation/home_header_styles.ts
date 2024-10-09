import styled from "styled-components";

export const HomeContainer = styled.main`
    margin-top: 2rem;

    @media (max-width: 1290px) {
        div {
            display: flex;
            flex-direction: column;
        }

        #img {
            order: 1;
            img {
                height: 100%;
                width: 100%;
                
                justify-content: center;
                align-items: center;
            }
        }

        .description {
            margin-bottom: 50px;
            order: 2;
            justify-content: end;
            align-items: end;
        }
    }

    div {
        display: flex;
        align-items: center;
        justify-content: space-between;

        gap: 30px;
    }

    #img {
        object-fit: cover;
        justify-content: end;
        align-items: end;
    }

    .title {
        display: inline;
        padding: 0;
        margin: 0;
        
        //text-indent: 0%;
        text-align: left;
        color: ${props => props.theme['base-title']};

        h1 {
            display: inline;
            font-family: 'baloo 2';
            font-optical-sizing: auto;
            font-size: 2rem;
            font-weight: 700;
            font-style: bold;
        }
    }

    div div {
        display: flex;
        flex-direction: column;
    }

    .main {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        

        div {
            display: flex;
            flex-direction: column;
        }

        .x1 {
            height: 7.5rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        .x2 {
            height: 7.5rem;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: space-between;
        }
        

        #x1 {
            margin-left: 5px;
            display: flex;
            flex-direction: row;
            
            color: ${props => props.theme['base-text']};

            span {
                padding: 5px;
                border-radius: 50px;
                align-items: center;
            
                background-color: ${props => props.theme['yellow-dark']};
                color: #fff;
            }
        }

        #x2 {
            margin-left: 5px;
            display: flex;
            flex-direction: row;
            
            color: ${props => props.theme['base-text']};

            span {
                border-radius: 50%;
                padding: 5px;
                align-items: center;
            
                background-color: ${props => props.theme['yellow']};
                color: #fff;
            }
        }

        #x3 {
            margin-left: 5px;
            display: flex;
            flex-direction: row;

            
            color: ${props => props.theme['base-text']};

            span {
                padding: 5px;
                border-radius: 50px;
                align-items: center;
            
                background-color: ${props => props.theme['base-text']};
                color: #fff;
            }
        }

        #x4 {
            margin-left: 5px;
            display: flex;
            flex-direction: row;

            
            color: ${props => props.theme['base-text']};

            span {
                padding: 5px;
                border-radius: 50px;
                align-items: center;
            
                background-color: ${props => props.theme['purple']};
                color: #fff;
            }
        }
    }

`