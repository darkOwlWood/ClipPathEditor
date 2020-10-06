import React from 'react';
import '../../assets/style/components/TabComponent/TabItem.scss';

const TabItem = ({name, onClick, isSelected}) => (
    <li 
        className={`tab-item ${isSelected && 'tab-item--selected'}`} 
        onClick={onClick}
    >
        {name}
    </li>
);

export default TabItem;