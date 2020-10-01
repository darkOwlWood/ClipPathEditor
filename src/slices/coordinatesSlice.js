import { createSlice } from '@reduxjs/toolkit';

export const coordnateSlice = createSlice({
    name: 'coordinates',
    initialState: {
        mainCoorList: [{x:'50', y:'20'}, {x:'80', y:'80'}, {x:'60', y:'95'}],
        polygons: {
            'Triangle':  [{x: "50", y: "0"}, {x: "0", y: "100"}, {x: "100", y: "100"}],
            'Trapezoid': [{x: "20", y: "0"}, {x: "80", y: "0"}, {x: "100", y: "100"}, {x: "0", y: "100"}],
            'Parallelogram': [{x: "25", y: "0"}, {x: "100", y: "0"}, {x: "75", y: "100"}, {x: "0", y: "100"}],
            'Rhombus':  [{x: "50", y: "0"}, {x: "100", y: "50"}, {x: "50", y: "100"}, {x: "0", y: "50"}],
            'Pentagon': [{x: "50", y: "0"}, {x: "100", y: "38"}, {x: "82", y: "100"}, {x: "18", y: "100"}, {x: "0", y: "38"}],
            'Hexagon':  [{x: "25", y: "0"}, {x: "75", y: "0"}, {x: "100", y: "50"}, {x: "75", y: "100"}, {x: "25", y: "100"}, {x: "0", y: "50"}],
            'Heptagon': [{x: "50", y: "0"}, {x: "90", y: "20"}, {x: "100", y: "60"}, {x: "75", y: "100"}, {x: "25", y: "100"}, {x: "0", y: "60"}, {x: "10", y: "20"}],
            'Octagon':  [{x: "30", y: "0"}, {x: "70", y: "0"}, {x: "100", y: "30"}, {x: "100", y: "70"}, {x: "70", y: "100"}, {x: "30", y: "100"}, {x: "0", y: "70"}, {x: "0", y: "30"}],
            'Nonagon':  [{x: "50", y: "0"}, {x: "83", y: "12"}, {x: "100", y: "43"}, {x: "94", y: "78"}, {x: "68", y: "100"}, {x: "32", y: "100"}, {x: "6", y: "78"}, {x: "0", y: "43"}, {x: "17", y: "12"}],
            'Decagon':  [{x: "50", y: "0"}, {x: "80", y: "10"}, {x: "100", y: "35"}, {x: "100", y: "70"}, {x: "80", y: "90"}, {x: "50", y: "100"}, {x: "20", y: "90"}, {x: "0", y: "70"}, {x: "0", y: "35"}, {x: "20", y: "10"}], 
        }     
    },
    reducers: {
        addCoorToList : (state, action) => {
            state.mainCoorList.push(action.payload);
        },

        removeCoorFromList : (state, action) => {
            state.mainCoorList.splice(action.payload.id,1);
        },

        updateCoorsInList : (state, action) => {
            state.mainCoorList[action.payload.ndx] = action.payload.coors;
        },

        setCoorList: (state, action) => {
            console.log(action)
            state.mainCoorList = action.payload.coorList;
        }
    }
});

export const {addCoorToList, removeCoorFromList, updateCoorsInList, setCoorList} = coordnateSlice.actions;

export const getCoorsById = id => state => state.coordinates.mainCoorList[id];

export const getCoorsList = state => state.coordinates.mainCoorList;

export const getCoorsQuantity = state => state.coordinates.mainCoorList.length;

export const getPolygon = name => state => state.coordinates.polygons[name];

export const getPolygonsNames = state => Object.keys(state.coordinates.polygons);

export default coordnateSlice.reducer;