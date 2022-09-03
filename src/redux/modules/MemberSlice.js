//Redux import
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../shared/Api";

export const emailCheckThunk = createAsyncThunk(
  "member/emailCheck",
  async (payload, thunkAPI) => {
    const resData = await api
      .post(`/member/emailcheck`, payload)
      .then((res) => res.data.success);
    return thunkAPI.fulfillWithValue(resData.data.data);
  }
);

export const signUpMemberThunk = createAsyncThunk(
  "member/signUpMember",
  async (payload, thunkAPI) => {
    const resData = await api.post(`/member/signup`, payload).then((res) => {
      if (res.data.success === false) {
        return window.alert(res.data.err.message);
      } else {
        return (
          window.alert(`${res.data.data.nickName}님 회원가입을 축하드립니다!`),
          window.location.replace("/login")
        );
      }
    });
    return thunkAPI.fulfillWithValue(resData.data.data);
  }
);

export const loginMemberThunk = createAsyncThunk(
  "member/loginMember",
  async (payload, thunkAPI) => {
    const resData = await api.post(`/member/login`, payload).then((res) => {
      if (res.data.success === false) {
        return window.alert(res.data.err.message);
      } else {
        return (
          window.alert(`${res.data.data.nickName}님 안녕하세요!`),
          window.location.replace("/")
        );
      }
    });
    return thunkAPI.fulfillWithValue(resData.data.data);
  }
);

export const kakaoAuthThunk = createAsyncThunk(
  "member/kakaoLogin",
  async (payload, thunkAPI) => {
    const resData = await api
      .get(`/oauth/kakao/callback?code=${payload.code}`)
      .then((res) => res);
    window.localStorage.setItem(
      "authorization",
      resData.headers["authorization"].split(" ")[1]
    );

    return thunkAPI.fulfillWithValue(resData.data.success);
  }
);

const initialState = {
  member: "",
  isLogin: false,
};

export const memberSlice = createSlice({
  name: "member",
  initialState,
  reducers: {
    loginAction: (state, action) => {
      state.email = action.payload.email;
      state.isLogin = action.payload.isLogin;
    },
    headerAction: (state, action) => {
      state.email = action.payload.email;
      state.isLogin = action.payload.isLogin;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginMemberThunk.fulfilled, (state, action) => {
      state.member = action.payload;
      state.isLogin = true;
    });
  },
});

export const { headerAction, loginAction } = memberSlice.actions;
export default memberSlice.reducer;
