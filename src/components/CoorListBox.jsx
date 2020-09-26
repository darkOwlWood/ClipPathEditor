import React from 'react';
import { useSelector } from 'react-redux';
import { getCoorsQuantity } from '../slices/coordinatesSlice';
import '../assets/style/components/CoorListBox.scss';
import CoorBox from './CoorBox';

const CoorListBox = () => {
    console.log('Each render of the box')

    return (
        <div className="coor-list-box">
            {Array(useSelector(getCoorsQuantity)).fill(0).map( (val, ndx) =>  
                <CoorBox id={ndx} key={ndx}/>)
            }
        </div>
    )
}

export default CoorListBox;