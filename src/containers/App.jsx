import React from 'react';
import '../assets/style/containers/App.scss';
import Frame from '../components/Frame';
import ControlButtons from '../components/ControlButtons'
import CoorListBox from '../components/CoorListBox';
import ClipPathOutputCode from '../components/ClipPathOutputCode';
import ClipPathInputCode from '../components/ClipPathInputCode';
import PolygonListBox from '../components/PolygonListBox';

const App = () => {
    return (
        <div className="app">
            <Frame/>
            <CoorListBox/>
            <ClipPathOutputCode />
            <ClipPathInputCode/>
            <ControlButtons/>
            <PolygonListBox />
        </div>
    );
}

export default App;