import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getservice = createAsyncThunk("service/get", async (req, res) => {
  try {
    let result = axios.get("http://localhost:5000/service/");
    return result;
  } catch (error) {
    console.log(error);
  }
});

export const addservice = createAsyncThunk("service/add", async (newservice) => {
  try {
    let result = axios.post("http://localhost:5000/service/add", newservice);
    return result;
  } catch (error) {
    console.log(error);
  }
});

export const deleteservice = createAsyncThunk("service/delete", async (id) => {
  try {
    let result = axios.delete(`http://localhost:5000/service/${id}`);
    return result;
  } catch (error) {
    console.log(error);
  }
});

export const editservice = createAsyncThunk("service/edit", async ({ id, edit }) => {
  try {
    let result = axios.put(`http://localhost:5000/service/${id}`, edit);
    return result;
  } catch (error) {
    console.log(error);
  }
});

const initialState = {
  serviceList: null,
  status: null,
};

export const serviceSlice = createSlice({
  name: "service",
  initialState,
  reducers: {},
  extraReducers: {
    [getservice.pending]: (state) => {
      state.status = "pending";
    },
    [getservice.fulfilled]: (state, action) => {
      state.status = "success";
      state.serviceList = action.payload.data.services;
    },
    [getservice.rejected]: (state) => {
      state.status = "fail";
    },
    [addservice.pending]: (state) => {
      state.status = "pending";
    },
    [addservice.fulfilled]: (state, action) => {
      state.status = "success";
    },
    [addservice.rejected]: (state) => {
      state.status = "fail";
    },
    [deleteservice.pending]: (state) => {
      state.status = "pending";
    },
    [deleteservice.fulfilled]: (state, action) => {
      state.status = "success";
    },
    [deleteservice.rejected]: (state) => {
      state.status = "fail";
    },
    [editservice.pending]: (state) => {
      state.status = "pending";
    },
    [editservice.fulfilled]: (state, action) => {
      state.status = "success";
    },
    [editservice.rejected]: (state) => {
      state.status = "fail";
    },
  },
});

// Action creators are generated for each case reducer function
//export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default serviceSlice.reducer;