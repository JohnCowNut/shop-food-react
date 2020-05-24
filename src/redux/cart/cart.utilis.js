export const addFoodToCart = (foodState, foodNext) => {
	console.log(foodNext)
	const exitsFood = foodState.find( el => el.id === foodNext.id);
	if(exitsFood) {
		return foodState.map ( food => 
			food.id === foodNext.id 
			? ({...food, quantity : food.quantity + 1}) 
			: food
	)}
	return [...foodState,{...foodNext,quantity : 1}]
}