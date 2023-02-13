import React from 'react';

const SideBar = () => {
    const onDragStart = (event, nodeType) => {
        event.dataTransfer.setData('application/reactflow', nodeType);
        event.dataTransfer.effectAllowed = 'move';
    };


    return (
        <aside>
            <div class="row ">
                <div className="dndnode input" onDragStart={(event) => onDragStart(event, 'input')} draggable>
                </div>
                <div className="dndnode" onDragStart={(event) => onDragStart(event, 'default')} draggable>
                </div>
                <div className="dndnode output" onDragStart={(event) => onDragStart(event, 'output')} draggable>
                </div>
            </div>
        </aside>
    );
};

export default SideBar;
