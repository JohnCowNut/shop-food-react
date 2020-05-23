import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CollectionDetail from '../collection-detail/collection-detail.component';
import CollectionOverView from '../../components/collection-overview/collection-overview.component';



class  CollectionPage extends React.Component {
	componentDidMount() {
		document.body.style.backgroundImage = "none";
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
							component = {CollectionOverView}
					/>	
					<Route exact 
						   path = {`${match.url}/:id`} 
						   component ={CollectionDetail}
					/>
				</Switch>
			</div>
		);
	}
}
export default CollectionPage;