import {configureStore} from '@reduxjs/toolkit';
import coordinatesReducer from '../slices/coordinatesSlice';
import operationReducer from '../slices/operationSlice';

export default configureStore({
    reducer:{
        coordinates: coordinatesReducer,
        operation: operationReducer,
    },
});