import React from 'react';
import '../assets/style/containers/App.scss';
import Frame from '../components/Frame';
import ControlButtons from '../components/ControlButtons'
import ClipPathOutputCode from '../components/ClipPathOutputCode';
import ClipPathInputCode from '../components/ClipPathInputCode';
import ToolBox from '../components/ToolBox';

const App = () => {
    return (
        <div className="app">
            <Frame/>
            <ClipPathInputCode/>
            <ControlButtons/>
            <ToolBox/>
        </div>
    );
}

export default App;