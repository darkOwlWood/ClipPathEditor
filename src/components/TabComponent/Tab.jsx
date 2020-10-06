import React, { useState } from 'react';
import '../../assets/style/components/TabComponent/Tab.scss';
import TabItem from './TabItem';
import TabPanel from './TabPanel';

const Tab = ({nameList, children}) => {

    const [currentTab, setCurrentTab] = useState(0);

    console.log(currentTab);

    const handleClick = (event) => {

    }

    return (
        <div className="tabs">
            <ul>
                {
                    nameList.map( (name,ndx) =>(
                            <TabItem  
                                key={ndx}
                                name={name}
                                onClick={() => { setCurrentTab(ndx) }}
                                isSelected={ndx === currentTab}
                            /> 
                        )
                    )
                }
            </ul>
            
            <TabPanel>
                {children[currentTab]}
            </TabPanel>
        </div>
    );
}

export default Tab;