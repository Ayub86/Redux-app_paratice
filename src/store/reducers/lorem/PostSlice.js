import { createAsyncThunk, createSlice,current } from "@reduxjs/toolkit";
import axios from "axios";

export const getPost = createAsyncThunk(
  "getPost",
  async () => {
   try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts" );
      return response;
    } catch (error) {
      console.log(error)
    }
  }
);
export const deletePost = createAsyncThunk(
  "post/deleteDFDPost",
  async ({id}) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    }).then((res) => res.json());
    
  }
);

const postSlice = createSlice({
  name: "post",
  initialState: {
    data: [],
    loading: false,
    isSuccess: false,
    message: "",
  },
  reducers: {},
  extraReducers: {
    [getPost.pending]: (state, action) => {
      state.loading = true;
   
    },
    [getPost.fulfilled]: (state, { payload }) => {
      console.log("state>>",state)
      state.loading = false;
      state.data = payload.data;
      state.isSuccess = true;
    },
    [getPost.rejected]: (state, { payload }) => {
      state.loading = false;
      state.isSuccess = false;
      state.message = "failed";
    },
    [deletePost.pending]: (state, action) => {
      state.loading = true;
    },
    [deletePost.fulfilled]: (state, action) => {
      state.loading = false;
      state.data =  current(state).data.filter((data)=>data.id !== action.meta.arg.id);
      
    },
    [deletePost.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    }
  },
});

export default postSlice;
