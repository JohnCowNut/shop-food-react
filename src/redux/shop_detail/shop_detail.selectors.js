import { createSelector } from 'reselect';

const shopDetailSelector = state => state.shopDetail;


export const selectorFoods = createSelector(
    [shopDetailSelector],
    shopDetail => shopDetail.foods ?  Object.keys(shopDetail.foods).map(el => shopDetail.foods[el]) : []
)

