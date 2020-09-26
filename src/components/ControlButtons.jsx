import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {activateDeleteDot, deactivateDeleteDot, getDeleteDotState,
        activateAddDot, deactivateAddDot, getAddDotState } from '../slices/operationSlice';
import '../assets/style/components/ControlButtons.scss';

const ControlButtons = () => {

    const dispatch = useDispatch();
    const deleteDotState = useSelector(getDeleteDotState);
    const addDotState = useSelector(getAddDotState);

    const handleDeleteDotState = () => {
        addDotState && dispatch(deactivateAddDot());

        deleteDotState? 
            dispatch(deactivateDeleteDot())
            : dispatch(activateDeleteDot()); 
    }

    const handleAddDotState = () => {
        deleteDotState && dispatch(deactivateDeleteDot());

        addDotState?
            dispatch(deactivateAddDot())
            :dispatch(activateAddDot())
    }

    return (
        <div className="control-buttons">
            <button className="control-buttons__add-button" onClick={handleAddDotState}>Add dot</button>
            <button className="control-buttons__delete-button" onClick={handleDeleteDotState}>Delete dot</button>
        </div>
    );
}

export default ControlButtons;