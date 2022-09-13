import {createReducer} from '@reduxjs/toolkit';

const initialState={
    c:0,
}

export const customReducer=createReducer(initialState,{

    increment:(state)=>{   //no need to write action because it will understan what is the action
        state.c +=1;
    },

    incrementByValue:(state,action)=>{   //here we will send a value as paramenter to action is required
        state.c +=action.payload;
    },

    decrement:(state)=>{
        state.c-=1;
    }
});