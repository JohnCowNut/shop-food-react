import React from 'react';
import {CheckOutPageContainer,
		CheckOutPageHeader,
		TotalContainer} from './checkout-page.styles';

class CheckoutPage extends React.Component {
	componentDidMount() {
		document.body.style.backgroundImage = "none";
	}
	componentWillUnmount() {
		document.body.style.backgroundImage = "url('https://i.postimg.cc/9QqtCCFp/brooke-lark-08b-OYn-H-r-E-unsplash-1.jpg')"
	}
	render() {
		return (
			<CheckOutPageContainer >
	            <CheckOutPageHeader  >
		            <div className="header-block">
		                <span>Food</span>
		            </div>
		            <div className="header-block">
		                <span>Title</span>
		            </div>
		            <div className="header-block">
		                <span>Quantity</span>
		            </div>
		            <div className="header-block">
		                <span>Price</span>
		            </div>
		            <div className="header-block">
		                <span>Remove</span>
		            </div>
	        	</CheckOutPageHeader>	
	        	<TotalContainer >
            		<span>TOTAL: 0$</span>
        		</TotalContainer>
	        </CheckOutPageContainer>
		);
	}
}

export default CheckoutPage;