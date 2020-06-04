import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import CollectionDetail from '../collection-detail/collection-detail.component';
import CollectionOverView from '../../components/collection-overview/collection-overview.component';
import { firestore , convertCollectionSnapshotToMap} from "../../firebase/firebase.utilis";
import {getDataFromFirebase} from '../../redux/shop_detail/shop_detail.action';
import WithSpiner from '../../components/with-spinner/with-spinner.component';


const WrapCollectionDetailSpiner = WithSpiner(CollectionDetail);
const WrapCollectionOverView = WithSpiner(CollectionOverView);
class  CollectionPage extends React.Component {
	state = {
		isLoading : true
	}
	componentDidMount() {
		const { getDataFromFirebase }  = this.props;
		document.body.style.backgroundImage = "none";
		const collectionRef = firestore.collection("foods");
		collectionRef.onSnapshot( async snapShot => {
			let dataObject = convertCollectionSnapshotToMap(snapShot);
			getDataFromFirebase(dataObject);
			this.setState({isLoading: false})
		})
	}
	componentWillUnmount() {
		document.body.style.backgroundImage = "url('https://i.postimg.cc/9QqtCCFp/brooke-lark-08b-OYn-H-r-E-unsplash-1.jpg')"
	}
	render() {
		const {match} = this.props;
		return (
			<div>
				<Switch>
					<Route  exact 
							path = {`${match.url}`} 
							render = {(props) => <WrapCollectionOverView
							isLoading ={this.state.isLoading} {...props}/>}
							
					/>	
					<Route exact 
						   path = {`${match.url}/:id`} 
						   render ={(props) => <WrapCollectionDetailSpiner  
						   isLoading ={this.state.isLoading} {...props}/>}
					/>
				</Switch>
			</div>
		);
	}
}
const mapDispatchToProps = dispatch => ({
    getDataFromFirebase : foods => dispatch(getDataFromFirebase(foods))
})
export default connect(null,mapDispatchToProps)(CollectionPage);