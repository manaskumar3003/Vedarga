import React, { useCallback } from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from 'reactflow';
 
import 'reactflow/dist/style.css';
import TextUpdaterNode from './main';
import Heading from './heading';
import HeadingLeft from './headingLeft';
 
const initialNodes = [
  { id: '1', type:'main', position: { x: 850, y: 300 }, data: { label: 'StartUp' } },
  { id: '2', type:'heading', position: { x: 500, y: 100 }, data: { label: 'Idea and Market Research' }, },
  { id: '3', type:'heading', position: { x: 500, y: 200 }, data: { label: 'Business Plan and Strategy' }, },
  { id: '4', type:'heading', position: { x: 470, y: 300 }, data: { label: 'Legal and Administrative Setup' }, },
  { id: '5', type:'heading', position: { x: 570, y: 400 }, data: { label: 'Building a Team' }, },
  { id: '6', type:'heading', position: { x: 530, y: 500 }, data: { label: 'Product Development' }, },

  //heading left side
  { id: '7', type:'headingleft', position: { x: 1200, y: 100 }, data: { label: 'Fundraising' }, },
  { id: '8', type:'headingleft', position: { x: 1200, y: 200 }, data: { label: 'Marketing and Sales' }, },
  { id: '9', type:'headingleft', position: { x: 1200, y: 300 }, data: { label: 'Operations and Scaling' }, },
  { id: '10', type:'headingleft', position: { x: 1200, y: 400 }, data: { label: 'Risk Management' }, },
  { id: '11', type:'headingleft', position: { x: 1200, y: 500 }, data: { label: 'Continuous Improvement and Innovation' }, },
  

];
const initialEdges = [
  { id: 'e1-2', source: '1',sourceHandle: 'a', target: '2' },
  { id: 'e1-3', source: '1',sourceHandle: 'a', target: '3' },
  { id: 'e1-4', source: '1',sourceHandle: 'a', target: '4' },
  { id: 'e1-5', source: '1',sourceHandle: 'a', target: '5' },
  { id: 'e1-6', source: '1',sourceHandle: 'a', target: '6' },
  //left side main to heading


  { id: 'e1-7', source: '1',sourceHandle: 'b', target: '7' },
  { id: 'e1-8', source: '1', sourceHandle: 'b',target: '8' },
  { id: 'e1-9', source: '1', sourceHandle: 'b',target: '9' },
  { id: 'e1-10', source: '1', sourceHandle: 'b',target: '10' },
  { id: 'e1-11', source: '1', sourceHandle: 'b',target: '11' },
  




];

const nodeTypes = { main: TextUpdaterNode,heading:Heading,headingleft:HeadingLeft };


 
export default function Roadmap() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  
 
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

 
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
      >
        <Controls />
        <MiniMap />
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}