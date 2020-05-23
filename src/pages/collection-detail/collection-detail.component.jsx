import React from 'react';
import FOOD_DATA from './collection-detail.data';
import CollectionItemContainer from './collection-detail.style';
import CollectionItem from "../../components/collection-item/collection-item.component";
class CollectionDetail extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			foods : FOOD_DATA
		}
	}
	render() {
		const food = this.props.match.params.id;
		const {foods} = this.state;
		
		let foodDisplay = Object.keys(foods).reduce((prev,next) => (prev = foods[food]),[])
		return (
			<div>
				<h2 className ="heading__primary mb-lg text-center">My Collection {food} </h2>
				<CollectionItemContainer>
					{
						foodDisplay.map(({id, ...othersProps}) => 
							<CollectionItem key = {id}  {...othersProps}/>)
					}
				</CollectionItemContainer>
			</div>
		)
	}
}

export default CollectionDetail;