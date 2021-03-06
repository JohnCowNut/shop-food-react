import styled from 'styled-components';

 const HeaderContainer = styled.header`
    height: 80vh;
    position: relative;
    & > * {
        position: absolute;
    }
    h1{
        top: 15%;
        left: 52%;
        transform: translate(-50%, -50%);    
        animation: moveInLeft 2s ease-in-out;
    }
    h2{
        top: 45%;
        right: 25%;
        transform: translate(50%);
        animation: moveInRight 2s ease-in-out  ;
    }
    a{
        top: 75%;
        right: 5%;
        animation: moveInBottom 2s ease-in-out  ;
    }

`
export default HeaderContainer;