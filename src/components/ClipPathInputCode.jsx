import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector }from 'react-redux';
import { getCoorsList,  setCoorList } from '../slices/coordinatesSlice';
import '../assets/style/components/ClipPathInputCode.scss';
import Cross from './Cross';

const ClipPathInputCode = () => {
    
    const dispatch = useDispatch();
    
    const coorList = `polygon(${useSelector(getCoorsList)
                                    .map( obj => `${Number(obj.x)}% ${Number(obj.y)}% `)
                                    .join(',')})`;
    const [coorListState, setCoorListState] = useState(coorList);

    useEffect( () => {
        setCoorListState(coorList);
    },[coorList]);

    const handleOnChange = ({target: {value}}) => {

        const isMatch = RegExp(/polygon\(\s*(((\d|[1-9][0-9])(\.\d{1,2})?|(100)(\.0{1,2})?)%\s*){2}(,\s*(((\d|[1-9][0-9])(\.\d{1,2})?|(100))%\s*){2})*\)/)
                            .test(value);
        setCoorListState(value);


        if(isMatch){
            const coorList = value
                                .match(/\d{1,3}(\.\d{1,2})?/g)
                                .map( (val,ndx,arr) => ({x:arr[ndx], y:arr[ndx+1]}) )
                                .filter( (val,ndx) => ndx%2 === 0 )
            dispatch(setCoorList({ coorList }));
        }
    }

    return (
        <div className="clip-path-input-code">
            <input 
                type="text" 
                value={coorListState}
                onChange={handleOnChange}
            />
        </div>
    );
}

export default ClipPathInputCode;