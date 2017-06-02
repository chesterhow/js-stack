import React from 'react';
import Tool from './Tool';
import data from './json/data.json';
import './stylesheets/styles.scss';

const App = () => {
  const renderTools = () => (
    data.map(tool => (
      <Tool key={tool.name} tool={tool} />
    ))
  );

  return (
    <div className="app">
      <h1 className="app--title">JS Stack</h1>
      {renderTools()}
    </div>
  );
};


export default App;
