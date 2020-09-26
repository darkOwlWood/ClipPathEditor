import { createSlice } from '@reduxjs/toolkit';

export const operationSlice = createSlice({
    name:'operation',
    initialState:{
        currentDot: -1,
        deleteDot: false,
        addDot: false,
    },
    reducers:{
        activateAddDot : state => {
            state.addDot = true;
        },

        deactivateAddDot : state => {
            state.addDot = false;
        },

        activateDeleteDot: state => {
            state.deleteDot = true;
        },

        deactivateDeleteDot: state => {
            state.deleteDot = false;
        },

        setCurrentDot: (state,actions) => {
            state.currentDot = actions.payload;
        },
    },
});

export const {activateAddDot, deactivateAddDot, activateDeleteDot, deactivateDeleteDot, setCurrentDot} = operationSlice.actions;

export const getDeleteDotState = state => state.operation.deleteDot;

export const getAddDotState = state => state.operation.addDot;

export const getCurrentDot = state => state.operation.currentDot;

export default operationSlice.reducer;