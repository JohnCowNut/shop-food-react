import { Link } from "react-router-dom";

import  styled , {css}  from 'styled-components';


const getNavigationStyle = (type) => {
    if(type.icon) {
        return  NavIcon
    }
    return (type.link ? Navlink : NavBrand)
}

const NavIcon = css`
    position: relative;
    -webkit-text-fill-color: unset;
    span {
        position: absolute;
        z-index: 6;
        top: 50%;
        color:#FA709A;
        font-size: 1.3rem;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    svg{
        fill: #FA709A;
        width: 5.5rem;
        height: 5.5rem;
    }
`

const Navlink = css`
    &:hover{
        background-image: linear-gradient(45deg, #FBDA61 0%, #FF5ACD 100%);
        -webkit-text-fill-color:transparent;
        transform: scale(1.05);
    }
    
`
const NavBrand = css`
    letter-spacing: 2rem;
    font-size: 5rem;
    &:hover{
        font-weight: 600;
        letter-spacing: 2.5rem;
        -webkit-text-fill-color: transparent;
        transform: scale(1.05);
    }
`
export const NavigationContainerList = styled.ul`
    display: flex;
    list-style: none;
`
export const NavigationContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    font-size: 4.5rem;
    padding: 2rem 0;
`
export const NavStyle = styled(Link)`
    text-decoration: none;
    display: inline-block;
    padding: 1rem 5rem;
    text-shadow: 0 1rem 2.5rem rgba(0,0,0,0.2);
    background-color: #FEE140;
    background-image: linear-gradient(90deg, #FEE140 0%, #FA709A 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    transition:  0.5s all ease-in-out;
    margin-right: 2rem;
    ${getNavigationStyle}
`
