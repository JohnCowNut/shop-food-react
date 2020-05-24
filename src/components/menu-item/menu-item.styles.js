import styled from 'styled-components';



export const MenuItemContainer = styled.div`
    font-size: 1.6rem;
    position: relative;
    transition: all 0.2s ease-in-out;
    cursor:pointer;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
    &:hover{
		transform: scale(1.1);
		box-shadow: 0 2rem 4rem rgba(0,0,0,0.5);

	}
`


export const ImageContainer = styled.img`
    position: relative;
    z-index: 3;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    height: 58%;
`
export const ContainerMenuBody = styled.div`
    h5 {
        display: inline;
        font-size: 2.5rem;
        background-color: #FF9A8B;
        background-image: linear-gradient(90deg, #FF9A8B 0%, #FF6A88 55%, #FF99AC 100%);

        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    ul {
        display: flex;
        flex-wrap: wrap;
        padding: 4rem 2.5rem;
            li{ 
                flex:0 0 50%;
                list-style: none;
                margin-bottom: 2.5rem;
                color: darkorange;
                font-size: 1.6rem;
                transition: all 0.2s ease-in-out;
                &:hover{
                    cursor: pointer;
                    transform: scale(1.05);

                }
            }
        }
    }
  

`