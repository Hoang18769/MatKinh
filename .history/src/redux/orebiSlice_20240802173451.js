import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axios from "axios";
import swal from "sweetalert";
const POSTS_URL = 'https://matkinhcaolo.io.vn/api/products';

export const fetchPosts = createAsyncThunk('products/fetchPosts', async () => {
  const response = await axios.get(POSTS_URL)
  return response.data
})
const initialState = {
  //userInfo: [],
  products: [],
  //checkedBrands: [],
  checkedCategorys: [],
};

export const orebiSlice = createSlice({
  name: "mat kinh",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.products.filter(
        (item) => item.id_product === action.payload.id_product
      );
      let subItem =item.find((item)=>(
        item.id_variant.id_variant === action.payload.id_variant.id_variant
      ))
      if(subItem)
       {
        swal("Thất bại", "mỗi sản phẩm chỉ được mua với số lượng là 1", "error");
        //subItem.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
      // Dispatch a success toast
      toast.success("products added to cart");
    },
    increaseQuantity: (state, action) => {
      const item = state.products.filter(
        (item) => item.id_product === action.payload.id_product
      );
       let subItem =item.find((subitem)=>(
        subitem.id_variant?.id_variant === action.payload?.id_variant
       ))
      if (subItem) 
        swal("Thất bại", "mỗi sản phẩm chỉ được mua với số lượng là 1", "error");
        //subItem.quantity++;
      //   // Dispatch a success toast
      // }
      // if(item){
      //   item.quantity++;
      // }
    },
    drecreaseQuantity: (state, action) => {
      const item = state.products.filter(
        (item) => item.id_product === action.payload.id_product
      );
      let subItem =item.find((subitem)=>(
        subitem.id_variant.id_variant === action.payload.id_variant
       ))
      if (subItem.quantity === 1) {
        subItem.quantity = 1;
        //delete
      } else {
        subItem.quantity--;
        // Dispatch a success toast
      }
    },
    deleteItem: (state, action) => {
      let sameItem = state.products.filter(
        (item) => (
          ((item.id_product === action.payload.id_product) 
          &&(item.id_variant.id_variant!==action.payload.id_variant)))
      );
      let difItem=state.products.filter((item)=>(
        item.id_product!==action.payload.id_product
      ))
      let item=state.products.find((item)=>(
        item.id_product=action.payload.id_product
      ))
      if(state.products.indexOf(item)===0)
        state.products=difItem.concat(sameItem)
      else
        state.products=sameItem.concat(difItem)
      
      // Dispatch a success toast
      toast.error("products removed from cart");
    },
    resetCart: (state) => {
      state.products = [];
      // Dispatch a success toast
    },

    toggleBrand: (state, action) => {
      const fetchPosts = action.payload;
      const isBrandChecked = state.checkedBrands.some(
        (b) => b.id_product === fetchPosts.id_product
      );

      if (isBrandChecked) {
        state.checkedBrands = state.checkedBrands.filter(
          (b) => b.id_product !== fetchPosts.id_product
        );
      } else {
        state.checkedBrands.push(fetchPosts);
      }
    },

    toggleCategory: (state, action) => {
      const category = action.payload;
      const isCategoryChecked = state.checkedCategorys.some(
        (b) => b.id_category === category.id_category
      );

      if (isCategoryChecked) {
        state.checkedCategorys = state.checkedCategorys.filter(
          (b) => b.id_category !== category.id_category
        );
      } else {
        state.checkedCategorys.push(category);
      }
console.log()
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  drecreaseQuantity,
  deleteItem,
  resetCart,
  toggleBrand,
  toggleCategory,
} = orebiSlice.actions;
export default orebiSlice.reducer;