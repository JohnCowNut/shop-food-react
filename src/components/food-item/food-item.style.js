import styled from 'styled-components';

export const FoodItemsContainer = styled.div`
	display: flex;
	justify-content : space-between;
    align-items: center;
    font-size: 1.8rem;
    height: 10rem;
    ul {
		li {
			list-style: none;
		}
	}
	& > div:last-child { 
		color: white;
		background-color: #daa1a1;
		padding: 0 0.25rem;
		align-self: self-end;
		margin-top: 1rem;
		cursor: pointer;
		transition : all 0.2s ease-in-out;
		&:hover {
			
			transform: scale(1.1);
		}
	}
`
export const FoodPhotoContainer = styled.div`
	background-size: cover;
	height: 80%;
	width: 40%;
	margin-right: 2rem;
`