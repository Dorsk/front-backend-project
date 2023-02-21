import { useCallback } from 'react';
import { Handle, Position } from 'reactflow';

const handleStyle = { left: 10 };

function Triangle({ data }) {
    const onChange = useCallback((evt) => {
        console.log(evt.target.value);
    }, []);

    return (
        <div className="triangle-right">
            <Handle type="target" position={Position.Right} />
            <div>
                {/* <label htmlFor="text">Text:</label> */}
                {/* <input id="text" name="text" onChange={onChange} /> */}
            </div>
            {/* <Handle type="source" position={Position.Bottom} id="a" style={handleStyle} /> */}
        </div>
    );
}

export default Triangle;