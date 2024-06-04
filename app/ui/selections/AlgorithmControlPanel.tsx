import React from 'react';

const AlgorithmControlPanel: React.FC = () => {
  return (
    <div className="p-4 bg-gray-100 border border-black">
      <h2 className="font-bold mb-4">Algorithm Control Panel</h2>
      <div className="flex flex-col space-y-4">
        <button className="px-4 py-2 border rounded bg-white hover:bg-gray-200">RUN</button>
        <button className="px-4 py-2 border rounded bg-white hover:bg-gray-200">STOP</button>
        <button className="px-4 py-2 border rounded bg-white hover:bg-gray-200">CLEAR</button>
      </div>
    </div>
  );
};

export default AlgorithmControlPanel;

