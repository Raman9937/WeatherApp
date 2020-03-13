import React, { createContext, useReducer } from "react";

const initialState = {
  isAuth: false,
  user: {}
};

//reducers
export default function reducer(state, action) {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        user: action.payload
      };
    case "SET_USER":
      return {
        ...state,
        isAuth: true
      };
    case "SET_CURRENT_USER":
      return {
        ...state,
        user: action.payload,
        isAuth: localStorage.isAuth ? true : false
      };

    default:
      return state;
  }
}

//create context
export const AuthContext = createContext(initialState);

const { Provider } = AuthContext;

export const AuthProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //actions
  //register user
  const registerUser = user => {
    localStorage.setItem("user", JSON.stringify(user));
    dispatch({
      type: "ADD_USER",
      payload: user
    });
  };

  //login user
  const login = loginData => {
    console.log("login", state);
    if (
      state.user.email === loginData.email &&
      state.user.password === loginData.password
    ) {
      localStorage.setItem("isAuth", true);
      dispatch({
        type: "SET_USER"
      });
    } else {
      alert("invalid username or password");
    }
  };

  //set current user

  const setCurrentUser = user => {
    console.log("setcurrent user");
    dispatch({
      type: "SET_CURRENT_USER",
      payload: user
    });
  };

  // const value = { state, dispatch };
  return (
    <Provider
      value={{
        user: state.user,
        isAuth: state.isAuth,
        registerUser,
        login,
        setCurrentUser
      }}
    >
      {props.children}
    </Provider>
  );
};
