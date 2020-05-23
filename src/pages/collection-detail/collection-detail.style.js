import styled from 'styled-components';

const CollectionItemContainer = styled.section`
    display: grid;
	grid-template-columns: repeat(3,1fr);
	grid-template-rows: repeat(2,1fr);
	grid-gap: 5rem;
    padding: 0 13.5rem;

	& > div {
		background-color: #FBAB7E;
		background-image: linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%);
		height: 60rem;
		flex: 1 1 auto;
		margin: 0 0.75rem 1.5rem;
		overflow: hidden;
		border-radius: 1rem;
		transition: all 0.2s ease-in-out;
		&:hover{
		transform: translateY(-4px) scale(1.05);
		box-shadow: 0 2rem 4rem rgba(0,0,0,0.5);
		cursor: pointer;
		}
	}


`
export default CollectionItemContainer;