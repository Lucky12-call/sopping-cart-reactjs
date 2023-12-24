import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  productArr: [],
  itemObj: {},
  searchItem: "",
  quantityArr: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      let preventDefaultAddItem = true;
      state.productArr.map((obj) => {
        if (obj.id === action.payload.id) {
          obj.price += action.payload.price;
          preventDefaultAddItem = false;
        }
      });
      if (preventDefaultAddItem) {
        state.productArr.push(action.payload);
      }
    },
    showItem: (state, action) => {
      state.itemObj = action.payload;
    },
    searchItems: (state, action) => {
      state.searchItem = action.payload;
    },
    deleteProduct: (state, action) => {
      state.productArr.splice(action.payload, 1);
      state.quantityArr.splice(action.payload, 1);
    },
    setQuantity: (state, action) => {
      let preventAddDefaultQuantity = true;
      state.quantityArr.map((item) => {
        if (item.id === action.payload.id) {
          item.quantity += 1;
          preventAddDefaultQuantity = false;
        }
      });
      if (preventAddDefaultQuantity) {
        state.quantityArr.push(action.payload);
      }
    },
  },
});

export const { addProduct, showItem, searchItems, deleteProduct, setQuantity } =
  productSlice.actions;
export default productSlice.reducer;
