import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import toast from "react-hot-toast";
import { useReducerAsync } from "use-reducer-async";
import Router from "next/router";
import http from "@/services/httpService";
const AuthContext = createContext();
const AuthContextDispather = createContext();

const initialState = { user: null, loading: true, error: null };

// const reduce = (state, action) => {
//   switch (action.type) {
//     case "signin":
//       {
//         axios
//           .post("http://localhost:5000/api/user/signin", action.payload, {
//             withCredentials: true,
//           })
//           .then(({ data }) => {
//             toast.success(`${data.name} خوش آمدی!`);
//             Router.push("/");
//           })
//           .catch((err) => {
//             toast.error(err?.response?.data?.message);
//           });
//       }
//       break;
//     case "signup":
//       {
//         axios
//           .post("http://localhost:5000/api/user/signup", action.payload, {
//             withCredentials: true,
//           })
//           .then(({ data }) => {
//             toast.success(`${data.name}با موفقیت وارد شدید!`);
//             Router.push("/");
//           })
//           .catch((err) => {
//             toast.error(err?.response?.data?.message);
//           });
//       }
//       break;
//     default:
//       return { ...state };
//   }
// };

const reducer = (state, action) => {
  switch (action.type) {
    case "SIGNIN_PENDING":
      return { user: null, error: false, loading: true };
    case "SIGNIN_SUCCESS":
      return { loading: false, error: null, user: action.payload };
    case "SIGNIN_REJECT":
      return { error: action.error, loading: false, user: null };
    default:
      return { ...state };
  }
};

const asyncActionHandlers = {
  SIGNIN:
    ({ dispatch }) =>
    (action) => {
      dispatch({ type: "SIGNIN_PENDING" });
      axios
        .post("http://localhost:5000/api/user/signin", action.payload, {
          withCredentials: true,
        })
        .then(({ data }) => {
          toast.success(`${data.name} خوش آمدی!`);
          dispatch({ type: "SIGNIN_SUCCESS", payload: data });
          Router.push("/");
        })
        .catch((err) => {
          dispatch({
            type: "SIGNIN_REJECT",
            error: err?.response?.data?.message,
          });
          toast.error(err?.response?.data?.message);
        });
    },
  SIGNUP:
    ({ dispatch }) =>
    (action) => {
      dispatch({ type: "SIGNIN_PENDING" });
      axios
        .post("http://localhost:5000/api/user/signup", action.payload, {
          withCredentials: true,
        })
        .then(({ data }) => {
          toast.success(`${data.name} خوش آمدی!`);
          dispatch({ type: "SIGNIN_SUCCESS", payload: data });
          Router.push("/");
        })
        .catch((err) => {
          dispatch({
            type: "SIGNIN_REJECT",
            error: err?.response?.data?.message,
          });
          toast.error(err?.response?.data?.message);
        });
    },
  LOAD_USER:
    ({ dispatch }) =>
    (action) => {
      dispatch({ type: "SIGNIN_PENDING" });
      axios
        .get("http://localhost:5000/api/user/load", { withCredentials: true })
        .then(({ data }) => {
          dispatch({ type: "SIGNIN_SUCCESS", payload: data });
        })
        .catch((err) => {
          dispatch({
            type: "SIGNIN_REJECT",
            error: err?.response?.data?.message,
          });
        });
    },
  SIGNOUT:
    ({ dispatch }) =>
    (action) => {
      axios
        .get("http://localhost:5000/api/user/logout", { withCredentials: true })
        .then(({ data }) => {
          window.location.href = "/";
        })
        .catch();
    },
};

const AuthProvider = ({ children }) => {
  // const [user, dispatch] = useReducer(reduce, initialState);
  const [user, dispatch] = useReducerAsync(
    reducer,
    initialState,
    asyncActionHandlers
  );
  useEffect(() => {
    dispatch({ type: "LOAD_USER" });
  }, []);
  return (
    <AuthContext.Provider value={user}>
      <AuthContextDispather.Provider value={dispatch}>
        {children}
      </AuthContextDispather.Provider>
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
export const useAuthAction = () => useContext(AuthContextDispather);
