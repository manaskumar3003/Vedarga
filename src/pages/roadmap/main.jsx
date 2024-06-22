import { useCallback } from 'react';
import { Handle, Position } from 'reactflow';
 
const handleStyle = { left: 10 };
 
function TextUpdaterNode({ data }) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);
 
  return (
    <>
      <Handle id="b" type="source" position={Position.Right} />
      <Handle id="a" type="source" position={Position.Left} />
      <div className="!bg-yellow-200 shadow-md rounded-md p-4 px-20 border border-gray-300">
        
        <label>{data.label}</label>
      </div>
      <Handle type="target" position={Position.Left} id="a" />
      
    </>
  );
}

export default TextUpdaterNode;