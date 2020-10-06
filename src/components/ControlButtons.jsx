import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {activateDeleteDot, deactivateDeleteDot, getDeleteDotState,
        activateAddDot, deactivateAddDot, getAddDotState } from '../slices/operationSlice';
import plusIcon from '../assets/static/plus-icon.png';
import minusIcon from '../assets/static/minus-icon.png';
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
            <button 
                className={`control-buttons__add-button ${addDotState && 'control-buttons__add-button--selected'}`} 
                onClick={handleAddDotState}
            >
                <img src={plusIcon} alt="add dot to canvas"/>
            </button>
            <button 
                className={`control-buttons__del-button ${deleteDotState && 'control-buttons__del-button--selected'}`} 
                onClick={handleDeleteDotState}
            >
                <img src={minusIcon} alt="remove dot from the canvas"/>
            </button>
        </div>
    );
}

export default ControlButtons;