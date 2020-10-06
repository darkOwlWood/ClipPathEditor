import React from 'react';
import Tab from '../components/TabComponent/Tab';
import CoorListBox from './CoorListBox';
import PolygonListBox from './PolygonListBox';
import '../assets/style/components/ToolBox.scss';

const ToolTab = () => {
    return (
        <div className="tool-box">
            <Tab nameList={['Coordinates','Figures']}>
                <CoorListBox />
                <PolygonListBox />
            </Tab>
        </div>
    );
}

export default ToolTab;
