import React from 'react';
import { connect } from 'react-redux'
import CollectionItemContainer from './collection-detail.style';
import CollectionItem from "../../components/collection-item/collection-item.component";
import {selectoFoods} from '../../redux/shop_detail/shop_detail.selectors';

import { firestore } from "../../firebase/firebase.utilis";


class CollectionDetail extends React.Component { 
	componentDidMount() {
			const collectionRef = firestore.collection("foods");
			collectionRef.onSnapshot( async ( snapShot) => {
				console.log(snapShot.docs[0].data())
			})
	}
    
	render(){
		const food = this.props.match.params.id;
		const {foods} = this.props;
		
		let foodDisplay = Object.keys(foods).reduce((prev,next) => (prev = foods[food]),[])
		console.log(foodDisplay)
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
	foods : selectoFoods(state)
})

export default connect(mapStateToProps)(CollectionDetail);