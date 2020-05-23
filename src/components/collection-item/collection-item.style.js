import styled from 'styled-components';


export const CartPhotoContainer = styled.div`
    background-size: cover;
    height: 60%;
`

export const CartBodyContainer  = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:  2rem;
    flex-direction: column;
    height: 40%;
    color: white;
    ul{
        li {
            list-style: none;
            padding: 0.25rem 0.5rem;
            margin-bottom: 0.5rem;
            font-size: 1.6rem;
            line-height: 3rem;
            text-align: center;
        }
    }
    h5{
        font-size: 2.25rem;
        letter-spacing: 3px;
        color: #d8604e;
        font-weight: 600;
        text-shadow: 0 1rem 2.5rem rgba(0,0,0,0.25)

    }
`