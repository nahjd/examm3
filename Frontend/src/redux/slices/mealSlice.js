import { createSlice, current } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";
const initialState = {
  data: [],
  wishlist: [],
  basket: [],
};

export const fetchData = createAsyncThunk("user/fetchData", async () => {
  const response = await axios.get("http://localhost:5050/meal").then((res) => {
    return res.data;
  });
  return response;
});

export const deleteData = createAsyncThunk("user/deleteData", async (id) => {
  const response = await axios.delete("http://localhost:5050/meal", +id);

  return response.data;
});

export const postData = createAsyncThunk("user/postData", async (obj) => {
  const response = await axios.post("http://localhost:5050/meal", obj);

  return response.data;
});

export const mealsSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addBasket: (state, action) => {
      let foundIndex = state.basket.findIndex(
        (item) => item._id == action.payload._id
      );
      if (foundIndex !== -1) {
        state.basket = current(state.basket).map((item, index) => {
          if (index == foundIndex) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          } else {
            return item;
          }
        });
        console.log(state.basket);
      } else {
        state.basket = [
          ...current(state.basket),
          { ...action.payload, quantity: 1 },
        ];
        console.log(state.basket);
      }
      console.log(state.basket);
    },

    deleteBasket: (state, action) => {
      state.basket = current(state.basket).filter(
        (item) => item._id != action.payload._id
      );
      console.log(state.basket);
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });

    builder
      .addCase(deleteData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteData.fulfilled, (state, action) => {
        state.status = "succeeded";
        console.log(action.payload);
        state.data = state.data.filter(
          (item) => item._id != action.payload._id
        );
      })
      .addCase(deleteData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });

    builder
      .addCase(postData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(postData.fulfilled, (state, action) => {
        state.status = "succeeded";
        console.log(action.payload);
        state.data = [...state.data, action.payload];
        console.log(state.data);
      })
      .addCase(postData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { addBasket, deleteBasket } = mealsSlice.actions;

export default mealsSlice.reducer;
