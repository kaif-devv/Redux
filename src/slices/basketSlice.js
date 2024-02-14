import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../Data";
// const [data, setData] = React.useState([]); // State variable to hold the data from the database
// const promise = database.listDocuments(
//     '65cb5293dee6c6f2ebf5',
//     '65cb52a735996806a97e')
//   promise.then(response => {
//     console.log(response.documents);
//     setData(response.documents); // Set the data state variable
//   }).catch(error => {
//     console.log(error);
//   });


const initialState = { // initial state for basket
    products: storeData,
    ammount: 0,
    total: 0,
    auth: false,
    isLoading: true,
}

export const basketSlice = createSlice({        // create slice for basket
    name: "basketSlice",
    initialState,
    reducers: { // reducers for basket
        // This reducer increments the amount of a specific product in the basket
        addAmmount: (state, { payload }) => {
            const item = state.products.find(item => item.name === payload.name);
            item.ammount++
        },
        // This reducer decrements the amount of a specific product in the basket
        removeAmmount: (state, { payload }) => {
            const item = state.products.find(i => i.name === payload.name);
            item.ammount--
        },
        // This reducer removes a specific product from the basket
        removeItem: (state, { payload }) => {
            state.products = state.products.filter(item => item.name !== payload.name)
        },
        // This reducer adds a new product to the basket
        addProduct: (state, action) => {
            state.products.push(action.payload)
        },
        // This reducer updates the total amount and total price of the products in the basket
        updateTotal: (state) => {
            let a = 0;
            let t = 0;
            state.products.forEach(item => {
                a = a + (item.ammount);
                t = t + (item.ammount * item.price);
            });
            state.ammount = a;
            state.total = t;
        },
        // This reducer sets the auth state to true, indicating the user is logged in
        login: (state) => {
            state.auth = true;
            state.isLoading = false;
        },
        // This reducer sets the auth state to false, indicating the user is logged out
        logout: (state) => {
            state.auth = false;
            state.isLoading = true;
        },
    }
})
export const { addAmmount, removeAmmount, removeItem, updateTotal, addProduct, login, logout } = basketSlice.actions;
export default basketSlice.reducer;