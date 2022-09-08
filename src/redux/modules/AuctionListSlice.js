import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../shared/Api";

const initialState = {
  auctionList: [],
};

export const auctionItemList = createAsyncThunk(
  "getAuctionItemList",
  async (payload, thunkAPI) => {
    try {
      const response = await api.get(`/auction`);
      return thunkAPI.fulfillWithValue(response.data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addAuctionItem = createAsyncThunk(
  "addAuctionItem",
  async (payload, thunkAPI) => {
    try {
      const response = await api.post("/auction", payload, {
        "Content-Type": "multipart/form-data",
      });
      console.log("배돌배돌배돌이add응답", response);

      // return thunkAPI.fulfillWithValue(response);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const editAuctionItem = createAsyncThunk(
  "editAuctionItem",
  async (payload, thunkAPI) => {
    try {
      const response = await api.put(
        `auction/${payload.actionId}`,
        payload.formData,
        {
          "Content-Type": "multipart/form-data",
        }
      );
      return thunkAPI.fulfillWithValue(response.data);
      // return console.log("3333333333", response);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteAuctionItem = createAsyncThunk(
  "deleteAuctionItem",
  async (payload, thunkAPI) => {
    try {
      const response = await api.delete(`auction/${payload}`);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const auctionListSlice = createSlice({
  name: "auctionList",
  initialState,
  // reducers: {
  //   onModalHandler: (state, action)=>{
  //     state.auctionList.map((post)=>{
  //       if(post)
  //       (post.isModalMode = !post.isModalMode)
  //     })
  //   }
  //   ,
  // },
  extraReducers: {
    [auctionItemList.fulfilled]: (state, action) => {
      state.auctionList = action.payload;
    },
    [auctionItemList.rejected]: (state, action) => {
      console.log(action);
    },
    [addAuctionItem.fulfilled]: (state, action) => {
      state.auctionList = [...state.auctionList, action.payload];
    },
    [addAuctionItem.rejected]: (state, action) => {
      console.log(action);
    },
    [editAuctionItem.fulfilled]: (state, action) => {
      state.auctionList = state.auctionList.map((item, index) => {
        if (item.auctionId === action.payload.postId) {
          return {
            ...item,
            content: action.payload.content,
            imgUrl: action.payload.imgUrl,
          };
        } else {
          return { ...item };
        }
      });
    },
    [editAuctionItem.rejected]: (state, action) => {
      console.log(action);
    },
    [deleteAuctionItem.fulfilled]: (state, action) => {
      state.auctionList = state.auctionList.filter(
        (post) => post.auctionId != action.payload
      );
    },
    [deleteAuctionItem.rejected]: (state, action) => {
      console.log(action);
    },
  },
});

export default auctionListSlice.reducer;
