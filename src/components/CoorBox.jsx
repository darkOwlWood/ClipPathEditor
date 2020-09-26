import React from 'react';
import { useSelector } from 'react-redux';
import { getCoorsById } from '../slices/coordinatesSlice';
import '../assets/style/components/CoorBox.scss';

const CoorBox = ({id}) => {
    
    const coorsState = useSelector(getCoorsById(id)); 

    // useEffect( () => {
    //     setCoorsState(coors);
    // });

    const hableChangeState = (event,coor) => {
        const coorsState__copy = {...coorsState};
        coorsState__copy[coor] = event.target.value;
        setCoorsState(coorsState__copy);
    }

    return (
        <div className="coor-box">
            <span className="coor-box__id">Dot id: {id}</span>
            <label htmlFor="coorX">X</label>
            <input 
                type="text" 
                name="coorX"
                value={Number(coorsState.x).toFixed(3)} 
                onChange={ (event) => setCoorsState({...coorsState, x: event.target.value}) }
            />
            <label htmlFor="coorX">Y</label>
            <input 
                type="text" 
                name="coorY" 
                value={Number(coorsState.y).toFixed(3)}
                onChange={ (event) => setCoorsState({...coorsState, y: event.target.value}) }
            />
        </div>
    );
}

export default CoorBox;