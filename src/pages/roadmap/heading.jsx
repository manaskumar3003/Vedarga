import { useCallback } from 'react';
import { Handle, Position } from 'reactflow';
 
const handleStyle = { left: 10 };
 
function Heading({ data }) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);
 
  return (
    <>
      <Handle type="target" position={Position.Right} />
      <div className="!bg-blue-300 shadow-md rounded-md p-4 px-30 border border-gray-300">
        
        <label>{data.label}</label>
      </div>
      <Handle type="source" position={Position.Left} id="a" />
      
    </>
  );
}

export default Heading;