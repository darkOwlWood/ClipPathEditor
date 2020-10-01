import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeCoorFromList } from '../slices/coordinatesSlice';
import { setCurrentDot, getDeleteDotState } from '../slices/operationSlice';
import '../assets/style/components/Cross.scss';

const Cross = React.memo(({id, x, y}) => {

    console.log('Render child ',id)

    const dispatch = useDispatch();
    const deleteDotState =  useSelector(getDeleteDotState);

    const style = {
        width: `${x}%`,
        height: `${y}%`,
    }

    const handleDeleteDotFromCoorList = () => {
        deleteDotState && dispatch(removeCoorFromList({id}));
    }

    return (
        <div className="cross" style={style}>
            <span 
                className="cross__dot" 
                onMouseDown={() => dispatch(setCurrentDot(id))}
                onClick={handleDeleteDotFromCoorList}
            ></span>
        </div>
    )
});

export default Cross;