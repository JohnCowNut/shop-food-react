import styled from 'styled-components';


export const CheckOutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid #ccc;
  padding: 1.5rem 0;
  font-size: 20px;
  align-items: center;
`

export const CheckOutPageContainer = styled.section`
	width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5rem auto 0;
  color: #FA709A;
  font-size: 2rem;
`

export const CheckOutPageHeader = styled.div`
	width: 100%;
    padding: 1rem 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;
    .header-block {
      text-transform: capitalize;
      width: 23%;

      &:last-child {
        width: 8%;
      }
    }
`
export const TotalContainer = styled.div`

margin-top: 3rem;
    margin-left: auto;
    font-size: 3.6rem;
`

