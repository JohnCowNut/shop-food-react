import { createSelector } from 'reselect';

const shopDetailSelector = state => state.shopDetail;



export const selectoFoods = createSelector(
    [shopDetailSelector],
    shopDetail => shopDetail.foods
)