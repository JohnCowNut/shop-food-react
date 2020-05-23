import { Link } from 'react-router-dom' ; 
import  styled , { css } from 'styled-components';


const getButton = (props) => {
    if(props.sign) {
        return CustomSignInSignUp;
    }
    if(props.addItem) {
        return  CustomAddItemStyle;
    }
    if(props.checkout) {
        return CustomCheckOutStyle;
    }
    return (props.started ? CustomLinkStarted : CustomLinkMored )
}

const CustomCheckOutStyle = css`
        margin-top: auto;
        padding: 1.5rem 0;
        font-size: 1.6rem;
        font-weight: 900;
        background-color: darkorange;
        border: none;
        color: white;
        font-family: inherit;
        
        transition: all 0.2s ease-in-out;
        &:focus{
            outline-color: #ccc;
        }
        &:hover{
            color: #7d7d7d;
            cursor: pointer;
            background-color: #FEE140;
            box-shadow: none;
            background-image: linear-gradient(90deg, #FEE140 0%, #FA709A 100%);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            letter-spacing: 0.3rem;
        }

`
const CustomAddItemStyle = css`
    &,&:link,&:active {
        text-decoration: none;
        padding: 1rem 3.5rem;
        color:white;
        border: none;
        cursor: pointer;
        background-color: #8BC6EC;
        background-image: linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%);
        border-radius: 2.5rem;
        font-size: 1.6rem;
        transition: all 0.2s ease;
    }
    &:hover{
        box-shadow: 0 1rem 2.5rem rgba(0,0,0,0.3);
        transform: translateY(-3px);
    }

`
const CustomLinkMored = css`
    font-size: 2rem;
    font-weight: 600;
    background-image: linear-gradient( 179.9deg,  rgba(217,164,4,1) 10.7%, rgba(242,116,5,1) 113.2% );
    display: inline-block;
    -webkit-text-fill-color: transparent;   
    -webkit-background-clip: text;
    &:link,&:active,&:focus{
        color: currentColor;
    }
    &:hover{
        text-shadow: 0 1rem 4rem rgba(0,0,0,0.5);
        box-shadow: none;
    }
`

const CustomLinkStarted = css`
    font-size: 2rem;
    font-weight: 600;
    letter-spacing: .2rem;
    text-shadow: 0 1rem 2rem rgba(0,0,0,0.2);
    background-color: #FAACA8;
    background-image: linear-gradient(19deg, #FAACA8 0%, #DDD6F3 100%);
    padding: 4rem;
    color: #FA709A;
    clip-path: polygon(0% 20%, 60% 20%, 60% 0%, 100% 50%, 60% 100%, 60% 80%, 0% 80%);
`
const CustomSignInSignUp = css`
    background-color: #8BC6EC;
    background-image: linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%);
    border-radius: 2.5rem;
    font-size: 1.6rem;
    color: white;
    padding:  2rem;
    border:none;
    outline: none;
    box-shadow: 0 1rem 2.5rem rgba(0,0,0,0.3);
    &:hover{
        cursor: pointer;
        transform: translateY(3px) scale(1.05);
    }
`

export const CustomLinkStyleContainer = styled(Link)`
    text-decoration: none;
    display: inline-block;
    outline: none;
    transition:  all 0.2s ease-in-out;
    &:link , &:active{
        text-decoration: none;
    }
    &:hover{
        box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
        text-shadow: 0 1rem 4rem rgba(0,0,0,0.5);
        transform: scale(1.1);
    }
    ${getButton}
`

