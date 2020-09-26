import React from 'react';
import { useSelector } from 'react-redux';
import { getCoorsList } from '../slices/coordinatesSlice';
import '../assets/style/components/Figure.scss';

const Figure = () => {

    const coorsList = useSelector(getCoorsList);
    const style = {
        clipPath: `polygon(${coorsList.map(obj => `${obj.x}% ${obj.y}%`).join(',')})`,
    };


    return (
        <div className="figure" style={style}></div>
    );
}

export default Figure;