import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  registerAuthThunk,
  loginAuthThunk,
  verifyEmailAuthThunk,
  logoutAuthThunk,
  resetPasswordAuthThunk,
  forgotPasswordAuthThunk,
} from "./authThunk";

import {
  attachAuthToLocalStorage,
  getAuthFromLocalStorage,
} from "../../utils/localStorage";
import { toastError, toastSuccess } from "../../utils/toast";
const initialState = {
  user: getAuthFromLocalStorage(),
  isLoading: false,
  isError: false,
};
export const registerAuth = createAsyncThunk(
  "user/registerAuth",
  async (inputs, thunkAPI) => {
    return registerAuthThunk("/auth/register", inputs, thunkAPI);
  }
);
export const loginAuth = createAsyncThunk(
  "user/loginAuth",
  async (inputs, thunkAPI) => {
    return loginAuthThunk("/auth/login", inputs, thunkAPI);
  }
);
export const logoutAuth = createAsyncThunk(
  "user/logoutAuth",
  async (inputs, thunkAPI) => {
    return logoutAuthThunk("/auth/logout", thunkAPI);
  }
);
export const verifyEmailAuth = createAsyncThunk(
  "user/verifyEmailAuth",
  async (inputs, thunkAPI) => {
    return verifyEmailAuthThunk("/auth/verify-email", inputs, thunkAPI);
  }
);
export const forgotPasswordAuth = createAsyncThunk(
  "user/forgotPasswordAuth",
  async (inputs, thunkAPI) => {
    return forgotPasswordAuthThunk("/auth/forgot-password", inputs, thunkAPI);
  }
);
export const resetPasswordAuth = createAsyncThunk(
  "user/resetPasswordAuth",
  async (inputs, thunkAPI) => {
    return resetPasswordAuthThunk("/auth/reset-password", inputs, thunkAPI);
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Register
    builder.addCase(registerAuth.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(registerAuth.fulfilled, (state, action) => {
      const { message } = action.payload;
      toast(message);
      state.isLoading = false;
    });
    builder.addCase(registerAuth.rejected, (state, action) => {
      const { message } = action.payload;
      toastError(message);
      state.isLoading = false;
      state.isError = true;
    });

    // Login
    builder.addCase(loginAuth.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(loginAuth.fulfilled, (state, action) => {
      const { data } = action.payload;
      state.user = data;
      attachAuthToLocalStorage(data);
      state.isLoading = false;
    });
    builder.addCase(loginAuth.rejected, (state, action) => {
      const { message } = action.payload;
      toastError(message);
      state.isLoading = false;
      state.isError = true;
    });

    // logout
    builder.addCase(logoutAuth.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(logoutAuth.fulfilled, (state, action) => {
      const { message } = action.payload;
      state.user = null;
      attachAuthToLocalStorage(null);
      toastSuccess(message);
      state.isLoading = false;
    });
    builder.addCase(logoutAuth.rejected, (state, action) => {
      const { message } = action.payload;
      toastError(message);
      state.isLoading = false;
      state.isError = true;
    });
    // verify email
    builder.addCase(verifyEmailAuth.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(verifyEmailAuth.fulfilled, (state, action) => {
      const { message } = action.payload;
      toastSuccess(message);

      state.isLoading = false;
    });
    builder.addCase(verifyEmailAuth.rejected, (state, action) => {
      const { message } = action.payload;
      toastError(message);
      state.isLoading = false;
      state.isError = true;
    });

    // forgot password
    builder.addCase(forgotPasswordAuth.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(forgotPasswordAuth.fulfilled, (state, action) => {
      const { message } = action.payload;
      toastSuccess(message);

      state.isLoading = false;
    });
    builder.addCase(forgotPasswordAuth.rejected, (state, action) => {
      const { message } = action.payload;
      toastError(message);
      state.isLoading = false;
      state.isError = true;
    });
    // reset password
    builder.addCase(resetPasswordAuth.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(resetPasswordAuth.fulfilled, (state, action) => {
      const { message } = action.payload;
      toastSuccess(message);

      state.isLoading = false;
    });
    builder.addCase(resetPasswordAuth.rejected, (state, action) => {
      const { message } = action.payload;
      console.log(action.payload);
      toastError(message);
      state.isLoading = false;
      state.isError = true;
    });
  },
});
export const {} = userSlice.actions;
export default userSlice.reducer;