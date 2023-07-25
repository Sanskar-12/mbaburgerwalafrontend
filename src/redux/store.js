import {configureStore} from "@reduxjs/toolkit"
import { authReducer } from "./reducers/UserReducers"
import { cartReducer, orderReducer } from "./reducers/CartReducers"
import { ordersReducer } from "./reducers/orderReducers"
import { adminReducer } from "./reducers/adminReducer"
import { contactReducer } from "./reducers/contactReducers"

const store=configureStore({
    reducer:{
        auth:authReducer,
        cart:cartReducer,
        order:orderReducer,
        getorder:ordersReducer,
        admin:adminReducer,
        contact:contactReducer
    }
})

export default store

export const server="https://mbaburgerwala-qht2.onrender.com/api/v1"