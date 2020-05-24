import React from 'react';
import {CheckOutPageContainer,
		CheckOutPageHeader,
		TotalContainer,
		} from './checkout-page.styles';
import { connect } from 'react-redux';
import {selectCartFood} from '../../redux/cart/cart.selectors';
import CheckOutItem from '../../components/checkout-item/checkout-item.component';
class CheckoutPage extends React.Component {
	componentDidMount() {
		document.body.style.backgroundImage = "none";
	}
	componentWillUnmount() {
		document.body.style.backgroundImage = "url('https://i.postimg.cc/9QqtCCFp/brooke-lark-08b-OYn-H-r-E-unsplash-1.jpg')"
	}
	render() {
		const {cartFood} = this.props;

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
	        
	        		{
	        			cartFood.map( food => 
	        			(<CheckOutItem key={food.id} food={food} />))
	        		}
	        	
	        	<TotalContainer >
            		<span>TOTAL: 0$</span>
        		</TotalContainer>
	        </CheckOutPageContainer>

		);
	}
}
 
const mapStateToProps = state => ({
	cartFood : selectCartFood(state)
})

export default connect(mapStateToProps)(CheckoutPage);