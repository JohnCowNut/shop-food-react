import { Link } from 'react-router-dom' ; 
import  styled , { css } from 'styled-components';


const getButton = (props) => {
    if(props.sign) {
        return CustomSignInSignUp;
    }
    return (props.started ? CustomLinkStarted : CustomLinkMored )
}

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

