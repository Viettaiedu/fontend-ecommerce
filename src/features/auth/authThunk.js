import httpRequest from "../../services/httpRequest";

export const registerAuthThunk = async (url, inputs, thunkAPI) => {
  try {
    const { data } = await httpRequest.post(url, inputs);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
};
export const loginAuthThunk = async (url, inputs, thunkAPI) => {
  try {
    const { data } = await httpRequest.post(url, inputs);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
};
export const logoutAuthThunk = async (url, thunkAPI) => {
  try {
    const { data } = await httpRequest.post(url);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
};
export const verifyEmailAuthThunk = async (url, inputs, thunkAPI) => {
  try {
    const { data } = await httpRequest.post(url, inputs);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
};
export const forgotPasswordAuthThunk = async (url, inputs, thunkAPI) => {
  try {
    const { data } = await httpRequest.post(url, inputs);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
};
export const resetPasswordAuthThunk = async (url, inputs, thunkAPI) => {
  try {
    const { data } = await httpRequest.post(url, inputs);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
};
export const getUserThunk = async (url, thunkAPI) => {
  try {
    const { data } = await httpRequest.get(url);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
};
