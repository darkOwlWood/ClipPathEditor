import { createSlice } from '@reduxjs/toolkit';

export const coordnateSlice = createSlice({
    name: 'coordinates',
    initialState: {
        quantity: 3,
        coorList: [{x:'50', y:'20'}, {x:'80', y:'80'}, {x:'60', y:'95'}],     
    },
    reducers: {
        addCoorToList : (state, action) => {
            state.quantity += 1;
            state.coorList.push(action.payload);
        },

        removeCoorFromList : (state, action) => {
            state.quantity -= 1;
            state.coorList.splice(action.payload.id,1);
        },

        updateCoorsInList : (state, action) => {
            state.coorList[action.payload.ndx] = action.payload.coors;
        },

        setCoorList: (state, action) => {
            state.quantity = action.payload.quantity;
            state.coorList = action.payload.coorList;
        }
    }
});

export const {addCoorToList, removeCoorFromList, updateCoorsInList, setCoorList} = coordnateSlice.actions;

export const getCoorsById = id => state => state.coordinates.coorList[id];

export const getCoorsList = state => state.coordinates.coorList;

export const getCoorsQuantity = state => state.coordinates.quantity;

export default coordnateSlice.reducer;