import styled from 'styled-components';



export const MenuItemContainer = styled.section`
    display: grid;
    grid-template-rows: repeat(3,1fr);
    grid-template-columns: repeat(3,1fr);
    padding: 0 5rem;
    grid-gap: 8rem;

    & > div {
        height: 50rem;
        border-radius: 0.3rem;
        
        img {
            width:100%;
        }
    }
`