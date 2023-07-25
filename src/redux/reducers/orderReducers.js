import {createReducer} from "@reduxjs/toolkit"


export const ordersReducer=createReducer({orders:[]},{

    getOrdersRequest:(state)=>{
        state.loading=true
    },
    getOrdersSuccess:(state,action)=>{
        state.loading=false
        state.orders=action.payload
    },
    getOrdersFail:(state,action)=>{
        state.loading=false
        state.error=action.payload
    },
    getOrderDetailsRequest:(state)=>{
        state.loading=true
    },
    getOrderDetailsSuccess:(state,action)=>{
        state.loading=false
        state.order=action.payload
    },
    getOrderDetailsFail:(state,action)=>{
        state.loading=false
        state.error=action.payload
    },
    clearError:(state)=>{
        state.error=null
    },
    clearMessage:(state)=>{
        state.message=null
    },


})