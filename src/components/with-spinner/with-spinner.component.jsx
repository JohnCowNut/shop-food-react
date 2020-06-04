import React from 'react';
import  {SpinnerContainer , Spinner } from './with-spinner.styles';


 const WithSpiner = (WrapComponent) => 
	({isLoading  , ...othersProps}) => (
		isLoading ? (
			<SpinnerContainer>
				<Spinner></Spinner>
			</SpinnerContainer>
		) : (
			<WrapComponent {...othersProps} />
		)

)
export default WithSpiner;