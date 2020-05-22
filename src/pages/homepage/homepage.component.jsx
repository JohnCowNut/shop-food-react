import React from 'react';
import HeaderContainer from './homepage.styles';
import ButtonLink from '../../components/custom-link/custom-link.component';
const HomePage = () => (
    <div>
        <HeaderContainer>
            <h1 className="heading__primary">Welcome To COWNUT</h1>
            <h2 className= "heading__secondary">Faster Than Light <span role="img" aria-label="icon">⚡⚡</span></h2>
            <ButtonLink to="/overview" started="true">Get Started <span role="img" aria-label="icon">🍔🌮🍛🥟</span> </ButtonLink>
        </HeaderContainer>
    </div>
)

export default HomePage;  