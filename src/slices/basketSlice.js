import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../Data";
const initialState = {
    products: storeData,
    ammount: 0,
    total: 0
}
export const basketSlice = createSlice({
    name: "basketSlice",
    initialState,
    reducers: {
        addAmmount: (state, { payload }) => {
            const item = state.products.find(item => item.name === payload.name);
            item.ammount++
        },
        removeAmmount: (state, { payload }) => {
            const item = state.products.find(i => i.name === payload.name);
            item.ammount--
        },
        removeItem: (state, { payload }) => {
            state.products = state.products.filter(item => item.name !== payload.name)
        },
        updateTotal: (state) => {
            let a = 0;
            let t = 0;
            state.products.forEach(item => {
                a = a + item.ammount;
                t = t + item.ammount * item.price;
            });
            state.ammount = a;
            state.total = t;

        }

    }
})
export const { addAmmount, removeAmmount, removeItem ,updateTotal} = basketSlice.actions;
export default basketSlice.reducer;