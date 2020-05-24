import  styled  from 'styled-components';

export const CheckOutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid #ccc;
  padding: 1.5rem 0;
  font-size: 20px;
  align-items: center;
`

export const CheckOutImageContainer = styled.div`
 width: 23%;
    padding-right: 1.5rem;

    img {
      width: 100%;
      height: 100%;
    }
`

export const CheckOutOptionContainer = styled.span`
	width: 23%;
`
export const CheckoutQuantityContainer = styled.span`
	width: 23%;
	display: flex;
    .arrow{
      cursor: pointer;
      margin: 0 1rem;
    }
`
export const CheckoutRemoveContainer = styled.span`
	padding-left: 1.2rem;
    cursor: pointer;
`