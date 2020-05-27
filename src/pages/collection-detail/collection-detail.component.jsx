import React from 'react';
import { connect } from 'react-redux'
import CollectionItemContainer from './collection-detail.style';
import CollectionItem from "../../components/collection-item/collection-item.component";
import {selectorFoods} from '../../redux/shop_detail/shop_detail.selectors';

import { firestore , convertCollectionSnapshotToMap} from "../../firebase/firebase.utilis";


class CollectionDetail extends React.Component { 
	componentDidMount() {
			const collectionRef = firestore.collection("foods");
			collectionRef.onSnapshot( async ( snapShot) => {
				convertCollectionSnapshotToMap(snapShot)
			})
	}
	render(){
		const food = this.props.match.params.id;
		const { foods } = this.props;
		let foodDisplay = foods.find(el => el.title === food).extend
		return (
			<div>
				<h2 className ="heading__primary mb-lg text-center">My Collection {food} </h2>
				<CollectionItemContainer>
					{
						foodDisplay.map((food) => 
							<CollectionItem key = {food.id}  food = {food}/>)
					}
				</CollectionItemContainer>
			</div>
			
		)
	}
}


const mapStateToProps = state => ({
	foods : selectorFoods(state)
})

export default connect(mapStateToProps)(CollectionDetail);