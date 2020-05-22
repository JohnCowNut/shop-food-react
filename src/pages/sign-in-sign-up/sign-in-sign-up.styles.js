import styled from 'styled-components';


const SIGN_IN_SIGN_UP_CONTAINER = styled.div`
    display: flex;
    justify-content:space-around;
    & > div {
        padding: 2rem ;
        box-shadow: 0 1rem 1.25rem rgba(0,0,0,0.2);
        background-color: #8BC6EC;
        border-radius: 1rem;
        background-image: linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%);
    }
    & > div h2 {
        font-size: 3.2rem;
        color: black;
        font-weight: 400;
        transition: 0.2s all ease-in-out;
        padding-left: 1.5rem;
        background-color: #FBDA61;
        background-image: linear-gradient(45deg, #FBDA61 0%, #FF5ACD 100%);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        &:hover{
            color:#FFA902 ;
            cursor: pointer;
        }
    }

    & > div form div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        
    }
    & > div form input {
        width: 100%;
        border: none;
        background-color: transparent;
        border-bottom: 3px solid #ccc;
        padding: 1.5rem 2rem;
        font-size: 2rem;
        font-family: inherit;
        display: block;
        outline: none;
        color: white;
        border-radius: 1rem;
        box-sizing: inherit;
        transition: all .3s;
        &:focus:invalid {
            border-bottom: 3px solid #FFA902;
        }
        &:focus {
            outline: none;
            box-shadow: 0 1rem 2rem rgba(0,0,0, .1);
            border-bottom:  3px solid cornflowerblue;
        }
        &::-webkit-input-placeholder {
            background-image: linear-gradient(45deg, #FBDA61 0%, #FF5ACD 100%);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }
`

export default SIGN_IN_SIGN_UP_CONTAINER;