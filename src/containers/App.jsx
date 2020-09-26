import React from 'react';
import '../assets/style/containers/App.scss';
import Frame from '../components/Frame';
import ControlButtons from '../components/ControlButtons'
import CoorListBox from '../components/CoorListBox';

const App = () => {
    return (
        <div className="app">
            <Frame/>
            <CoorListBox/>
            <ControlButtons/>
        </div>
    );
}

export default App;