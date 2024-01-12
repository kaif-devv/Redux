import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../Data";
const initialState = {
    products: storeData,
    ammount: 0,
    total: 0
}
export const basketStyle = createSlice({
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
            let ammount = 0;
            let total = 0;
            state.products.forEach(item => {
                ammount = ammount + item.ammount;
                total = total + item.ammount * item.price;
            });
            state.ammount = ammount;
            state.total = total;

        }

    }
})
export const { addAmmount, removeAmmount, removeItem ,updateTotal} = basketStyle.actions;
export default basketStyle.reducer;