import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { getCoorsList } from '../slices/coordinatesSlice';
import '../assets/style/components/ClipPathOutputCode.scss';

const ClipPathOutputCode = () => {

    const divElement = useRef(null);
    const clipPathCode = useSelector(getCoorsList)
                            .map( obj => `${Number(obj.x)}% ${Number(obj.y)}% `)
                            .join(',');

    const handleOnClick = () => {
        window.getSelection().selectAllChildren(divElement.current);
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
    }

    return (
        <div 
            ref={divElement}
            className="clip-path-output-code" 
            onClick={handleOnClick}
        >
            {`polygon(${clipPathCode})`}
        </div>
    );
}

export default ClipPathOutputCode;