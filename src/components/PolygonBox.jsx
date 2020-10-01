import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCoorList, getPolygon } from '../slices/coordinatesSlice';
import '../assets/style/components/PolygonBox.scss';
import Figure from './Figure';

const PolygonBox = ({name}) => {
    
    const coorList = useSelector(getPolygon(name));
    const dispatch = useDispatch();

    const handleOnClick = () => {
        dispatch(setCoorList({coorList}));
    }

    return (
        <div className="polygon-box" onClick={handleOnClick}>
            <div className="polygon-box__wrapper">
                <Figure coorsList={coorList} />
            </div>
        </div>
    );
}

export default PolygonBox;