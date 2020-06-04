import { createGlobalStyle } from 'styled-components';


export const GlobalStyle  = createGlobalStyle`

*,*::after,*::before{
    margin: 0;
    padding : 0;
    box-sizing: border-box;
}
html {
    margin: 0;
    padding : 0;
    box-sizing: border-box;
}
body { 
    background-image: url("https://i.postimg.cc/9QqtCCFp/brooke-lark-08b-OYn-H-r-E-unsplash-1.jpg");
    background-size: cover;
    background-position-y: -5rem;
    
}
@keyframes moveInLeft {
    0% {
        opacity: 0;
        transform: translateX(-5rem);
    }

    80% {
        transform: translateX(1rem);
    }

    100% {
        opacity: 1;
        transform: translate(0);
    }
}
@keyframes moveInRight {
    0% {
        opacity: 0;
        transform: translateX(5rem);
    }

    80% {
        transform: translateX(-1rem);
    }
    
    100% {
        opacity: 1;
        transform: translate(0);
    }
}
@keyframes moveInBottom {
    0% {
        opacity: 0;
        transform: translateY(3rem);
    }

    100% {
        opacity: 1;
        transform: translate(0);
    }
}
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
html {
    font-size: 62.5%;
}
body {
    font-family: 'Roboto', sans-serif;
}
.heading__primary { 
    font-size: 3.9rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1.5rem;
    background-color: #FF9A8B;
    background-image: linear-gradient(90deg, #FF9A8B 0%, #FF6A88 55%, #FF99AC 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    cursor: pointer;
    transition: all 0.2s ease;
    &:hover{
        transform: scale(1.05);
        text-shadow: .5rem 1rem 2rem rgba(0,0,0,0.2);
    }

}
.heading__secondary{
    font-size: 3rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1rem;
    background-color: #FBAB7E;
    background-image: linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all 0.2s ease;
    cursor: pointer;
    &:hover{
        text-shadow: .5rem 1rem 2rem rgba(0,0,0,0.2);
        transform: scale(1.3);
    }
}
.mb-sm {margin-bottom: 2rem !important;}
.mb-md {margin-bottom: 4rem !important;}
.mb-bg {margin-bottom: 6rem !important;}
.mb-lg {margin-bottom: 8rem !important;}
.text-center {text-align: center;}

.hot{
    width: 4.5rem;
    height: 4.5rem;
	position: absolute;
	z-index: 2;
	top: -5.4%;
	right: 0;
}
.over-scroll{
   overflow-y: scroll;
}
`