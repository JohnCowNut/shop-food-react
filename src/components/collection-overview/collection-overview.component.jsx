import React from 'react';
import MenuItem from '../menu-item/menu-item.components';
import shopData_OVERVIEW from './dataOverview';
import {MenuItemContainer} from './collection-overview.styles';
class  CollectionOverView  extends React.Component  {
	constructor(props) {
		super(props);
		
		this.state = {
			menu : shopData_OVERVIEW
		}
	}

	render() {
		 const { menu } = this.state;
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


export default CollectionOverView;