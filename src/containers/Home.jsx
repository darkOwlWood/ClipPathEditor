import React from 'react';
import '../../assets/styles/containers/Home.scss';
import Canvas from '../components/Canvas';
import PathCode from '../components/PathCode';
import ToolSection from '../components/ToolsSection';

const Home = () => {
    return (
        <div className="home">
            <Canvas />
            <ToolSection />
            <PathCode />
        </div>        
    );
};

export default Home;