import styled from "styled-components";

export const ProductListing = styled.div`
    width: 100%;
    display: flex;
    flex: 1;
    
    @media (max-width: 768px) {
        ul {
            display: flex;
            justify-content: space-evenly;
            gap: 0;
        }
    }

    ul{
        list-style: none;
        padding: 0;
        
        display: flex;
        
        flex: 1;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 3.2rem;
    }
`