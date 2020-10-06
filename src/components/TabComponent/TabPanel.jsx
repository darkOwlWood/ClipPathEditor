import React from 'react';
import '../../assets/style/components/TabComponent/TabPanel.scss';

const TabPanel = ({children}) => {
    return (
        <div className="tab-panel">
            {children}
        </div>
    );
}

export default TabPanel;