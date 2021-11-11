import React, { useState } from 'react';

import Nav from './Nav';
import Download from './Download';
import { useDownloader } from './Api';

const App = () => {
  const [selected, setSelected] = useState('download');
  const [test, setTest] = useState("default");
  

  const handleSetSelection = (val) => {
    setSelected(val);
  }

  

  const renderChildren = () => {
    if(selected === 'download') {
      return <Download />
    }
  }

  

  return (
    <div className="App">
    {test}
      <Nav 
        changeSelection={handleSetSelection}
      />
      <div className="container">
        {renderChildren()}
      </div>
    </div>
  );
}

export default App;
