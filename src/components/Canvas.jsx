import React, {useState, useEffect} from 'react';
import '../../assets/styles/components/Canvas.scss';

const Canvas = () => {

    // const [move, setMove] = useState(false);
    const getMouseCordenates = (event) => {
        event.preventDefault();
        if(true){
            document.querySelector('#A1').style.left = `${event.clientX-event.target.offsetLeft}px`;
            document.querySelector('#A1').style.top = `${event.clientY-event.target.offsetTop}px`;
        }
    }

    return (
        <div className="frame">
            <div className="canvas" onMouseMove={ getMouseCordenates }>
                <div className="canvas__figure">
                    <div 
                        id="A1"
                        className="path-dot" 
                    >
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Canvas;