import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addCoorToList, updateCoorsInList, getCoorsList } from '../slices/coordinatesSlice';
import { setCurrentDot, getDeleteDotState, getAddDotState, getCurrentDot } from '../slices/operationSlice';
import '../assets/style/components/Canvas.scss';
import Cross from './Cross';
import Figure from './Figure';


const getMouseCoorsRelativeTo = (event, element) => {
    const {x, y, width, height} = document.querySelector(element).getBoundingClientRect();
    let coorX = ((event.clientX - x) * 100) / width;
    let coorY = ((event.clientY - y) * 100) / height;
    
    return {coorX, coorY};
}

const Canvas = () => {

    const coorsList = useSelector(getCoorsList);
    const currentDot = useSelector(getCurrentDot);
    const deleteDotState = useSelector(getDeleteDotState);
    const addDotState = useSelector(getAddDotState);
    const dispatch = useDispatch();

    const handleMouseClick = (event) => {
        if(addDotState){
            const { coorX, coorY } = getMouseCoorsRelativeTo(event,'.canvas');
            dispatch(addCoorToList({x: coorX.toFixed(2), y: coorY.toFixed(2)}));
        }
    }    

    useEffect( () => {
        const handleMousePosition = (event) => {
            event.preventDefault(); 
    
            if(currentDot !== -1 && !deleteDotState && !addDotState){
                let { coorX, coorY } = getMouseCoorsRelativeTo(event,'.canvas');
    
                coorX = coorX<0? 0 : coorX>100? 100 : coorX;
                coorY = coorY<0? 0 : coorY>100? 100 : coorY;
                
                dispatch(updateCoorsInList({ ndx:currentDot, coors:{x: coorX.toFixed(2), y: coorY.toFixed(2)}}))
            }
        }
     
        const setCurrentDotToNull = () => {
            dispatch(setCurrentDot(-1));
        }
        
        window.addEventListener('mouseup', setCurrentDotToNull);
        window.addEventListener('mousemove', handleMousePosition);
        return () => {
            window.removeEventListener('mouseup', setCurrentDotToNull);
            window.removeEventListener('mousemove', handleMousePosition);
        }
    },[currentDot,deleteDotState,addDotState]);

    return (
      <div className="canvas" onClick={handleMouseClick}>
        {coorsList.map( (coors,ndx) => 
            <Cross key={ndx} id={ndx} y={coors.y} x={coors.x}/> 
        )}
        <Figure coorsList={coorsList}/>
      </div>
    );
}

export default Canvas;