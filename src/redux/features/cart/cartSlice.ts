import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { TProduct } from '../../../types/globalTypes';

type TCart = {
    products: TProduct[];
};

const initialState: TCart = {
    products: [],
};
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<TProduct>) => {
            const existing = state.products.find((product) => product._id === action.payload._id);

            if (existing) {
                existing.quantity = existing.quantity! + 1;
            } else {
                state.products.push({ ...action.payload, quantity: 1 });
            }
        },
    },
});
export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
