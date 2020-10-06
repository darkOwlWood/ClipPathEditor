import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateCoorsInList, getCoorsById } from '../slices/coordinatesSlice';
import '../assets/style/components/CoorBox.scss';

const validateOnlyNumbers = string => {
    let resp = '';

    if(RegExp(/^0\d+\.?\d{0,2}$/).test(string)){ //0Number[.Number]
        resp = string.slice(1);
    }else if(RegExp(/^\.\d{0,2}$/).test(string)){//.[Number]
        resp = `0${string}`;
    }else if(RegExp(/^\d+\.?\d{0,2}$/).test(string)){//Number[.Number]
        resp = string;
    }else if(!string.trim()){// Blank Space
        resp = '0';
    }

    return resp;
}

const CoorBox = ({id}) => {
    
    const dipatch = useDispatch();
    const coorsState = useSelector(getCoorsById(id)); 

    const hableChangeState = (event) => {

        const resp = validateOnlyNumbers(event.target.value);

        if(resp && Number(resp) <= 100){
            const coor = event.target.name === 'coorX'? 'x' : 'y';
            const coors = { ...coorsState, [coor] : resp }
            dipatch(updateCoorsInList({ coors, ndx: id}));
        }
    }

    return (
        <div className="coor-box">
            <span className="coor-box__id">Dot: {id}</span>
            <label htmlFor="coorX">X</label>
            <input 
                type="text" 
                name="coorX"
                value={coorsState.x} 
                onChange={hableChangeState}
            />
            <label htmlFor="coorX">Y</label>
            <input 
                type="text" 
                name="coorY" 
                value={coorsState.y}
                onChange={hableChangeState}
            />
        </div>
    );
}

export default CoorBox;