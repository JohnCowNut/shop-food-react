export const addFoodToCart = (foodState, foodNext) => {
	const exitsFood = foodState.find( food => food.id === foodNext.id);
	if(exitsFood) {
		return foodState.map ( food => 
			food.id === foodNext.id 
			? ({...food, quantity : food.quantity + 1}) 
			: food
	)}
	return [...foodState,{...foodNext,quantity : 1}]
}

export const decreaseFoodCart = (foodState , foodNext) => {
	const exitsFood = foodState.find(food =>  food.id === foodNext.id);
	if(exitsFood.quantity === 1) {
		return foodState.filter(food => food.id !== foodNext.id);
	}

	return foodState.map(food => food.id === foodNext.id ?
		 ({...food,quantity: food.quantity -1}) : food)
}