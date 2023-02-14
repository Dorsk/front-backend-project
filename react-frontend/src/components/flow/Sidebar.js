import React from 'react';
import DownloadButton from './DownloadButton.jsx';

const SideBar = () => {
    const onDragStart = (event, nodeType) => {
        event.dataTransfer.setData('application/reactflow', nodeType);
        event.dataTransfer.effectAllowed = 'move';
    };


    return (
        <aside>
            <div class="row ">
                <div className="dndnode input" onDragStart={(event) => onDragStart(event, 'start')} draggable>
                </div>
                <div className="dndnode action" onDragStart={(event) => onDragStart(event, 'hexagon')} draggable>
                </div>
                <div className="dndnode output" onDragStart={(event) => onDragStart(event, 'stop')} draggable>
                </div>
                <div className="dndnode database" onDragStart={(event) => onDragStart(event, 'database')} draggable>
                </div>
                <div className="dndnode question" onDragStart={(event) => onDragStart(event, 'diamond')} draggable>
                </div>
                <div className="dndnode parallelogram" onDragStart={(event) => onDragStart(event, 'parallelogram')} draggable>
                </div>
                <div class="downloadbutton">
                    <DownloadButton />
                </div>
            </div>
        </aside>
    );
};

export default SideBar;
