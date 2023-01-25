import {
  SET_ERROR,
  SET_ISAUTH,
  SET_LOADING,
  SET_REGISTER,
} from "./actionTypes";

export const set_login = (payload) => {
  return {
    type: SET_ISAUTH,
    payload: payload,
  };
};

export const set_register = (payload) => {
  return {
    type: SET_REGISTER,
    payload: payload,
  };
};
export const set_loading = () => {
  return {
    type: SET_LOADING,
  };
};
export const set_error = () => {
  return {
    type: SET_ERROR,
  };
};
export const handleRegister = (data) => async (dispatch) => {
  try {
    dispatch(set_loading());
    let res = await fetch("http://localhost:8000/user/register", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
    });
    if (res.status == 200) {
      dispatch(set_register(true));
    } else {
      dispatch(set_register(false));
    }
  } catch (error) {
    dispatch(set_error());
  }
};
export const handleLogin = (data) => async (dispatch) => {
  try {
    dispatch(set_loading());
    let res = await fetch("http://localhost:8000/user/login", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
    });
    if (res.status == 200) {
      dispatch(set_login(true));
    } else {
      dispatch(set_login(false));
    }
  } catch (error) {
    dispatch(set_error());
  }
};
