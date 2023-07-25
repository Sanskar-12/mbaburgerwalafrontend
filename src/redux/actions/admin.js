import axios from "axios";
import { server } from "../store";


export const getadminStats = () => async (dispatch) => {
    try {
      dispatch({
        type: "getDashboardRequest",
      });
  
      const { data } = await axios.get(`${server}/admin/stats`, {
        withCredentials: true,
      });
  
      dispatch({
        type: "getDashboardSuccess",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "getDashboardFail",
        payload: error.response.data.message,
      });
    }
  };

  export const getadminUsers = () => async (dispatch) => {
    try {
      dispatch({
        type: "getadminUserscountRequest",
      });
  
      const { data } = await axios.get(`${server}/admin/users`, {
        withCredentials: true,
      });
  
      dispatch({
        type: "getadminUserscountSuccess",
        payload: data.users,
      });
    } catch (error) {
      dispatch({
        type: "getadminUserscountFail",
        payload: error.response.data.message,
      });
    }
  };

  export const getadminOrders = () => async (dispatch) => {
    try {
      dispatch({
        type: "getadminOrdersRequest",
      });
  
      const { data } = await axios.get(`${server}/admin/orders`, {
        withCredentials: true,
      });
  
      dispatch({
        type: "getadminOrdersSuccess",
        payload: data.order,
      });
    } catch (error) {
      dispatch({
        type: "getadminOrdersFail",
        payload: error.response.data.message,
      });
    }
  };

  export const processOrders = (id) => async (dispatch) => {
    try {
      dispatch({
        type: "processOrdersRequest",
      });
  
      const { data } = await axios.get(`${server}/admin/order/${id}`, {
        withCredentials: true,
      });
  
      dispatch({
        type: "processOrdersSuccess",
        payload: data.message,
      });
    } catch (error) {
      dispatch({
        type: "processOrdersFail",
        payload: error.response.data.message,
      });
    }
  };
  