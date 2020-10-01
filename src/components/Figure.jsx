import React from 'react';
import { useSelector } from 'react-redux';
import '../assets/style/components/Figure.scss';

const Figure = React.memo(({coorsList}) => {

    const style = {
        clipPath: `polygon(${coorsList.map(obj => `${Number(obj.x)}%  ${Number(obj.y) }%`).join(',')})`,
    };
    
    return (
        <div className="figure" style={style}></div>
    );
});

export default Figure;