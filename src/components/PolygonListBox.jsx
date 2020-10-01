import React from 'react';
import { useSelector } from 'react-redux';
import { getPolygonsNames } from '../slices/coordinatesSlice';
import '../assets/style/components/PolygonListBox.scss';
import PolygonBox from './PolygonBox';


const PolygonListBox = () => {

    return (
        <div className="polygon-list-box">
            {
                useSelector(getPolygonsNames).map( (name,ndx) => (
                    <PolygonBox key={ndx} name={name} />
                ))
            }
        </div>
    );
}

export default PolygonListBox;