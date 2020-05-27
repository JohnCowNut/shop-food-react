import React from 'react';
import MenuItem from '../menu-item/menu-item.components';
import {MenuItemContainer} from './collection-overview.styles';
import { connect } from 'react-redux';
import { selectorFoods } from '../../redux/shop_detail/shop_detail.selectors';
class  CollectionOverView  extends React.Component  {
	render() {
		const { menu } = this.props;
 		return (
			 <div>
				<h1 className="heading__primary mb-lg text-center"> Overview My Restaurant</h1>
				<MenuItemContainer>
					{
						menu.map(({id , ...othersProps}) =>
							<MenuItem key = {id} {...othersProps}/>)
					}
				</MenuItemContainer>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	menu : selectorFoods(state)
})

export default connect(mapStateToProps)(CollectionOverView) ;