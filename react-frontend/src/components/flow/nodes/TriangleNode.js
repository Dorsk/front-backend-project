import { useCallback } from 'react';
import { Handle, Position } from 'reactflow';


function Triangle({ data, isConnectable }) {
    const onChange = useCallback((evt) => {
        console.log(evt.target.value);
    }, []);

    return (
        <div className="triangle-right">
            {/* <Handle type="target" position={Position.Right} />*/}
            <div>
                {/* <label htmlFor="text">Text:</label> */}
                {/* <input id="text" name="text" onChange={onChange} /> */}
            </div>
            <Handle type="source" position={Position.Right} isConnectable={isConnectable} />
        </div>
    );
}

export default Triangle;