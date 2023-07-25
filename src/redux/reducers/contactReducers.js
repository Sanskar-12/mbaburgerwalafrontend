import { createReducer } from "@reduxjs/toolkit";


export const contactReducer=createReducer({},{
    contactRequest:(state)=>{
        state.loading=true
    },
    contactSuccess:(state,action)=>{
        state.loading=false
        state.message=action.payload
    },
    contactFail:(state,action)=>{
        state.loading=true
        state.error=action.payload
    },
    clearError: (state) => {
        state.error = null;
      },
      clearMessage: (state) => {
        state.message = null;
      },

})