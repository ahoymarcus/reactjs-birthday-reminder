import React, { useState } from 'react';
import data from './data';
import List from './List';



function App() {
  const [ people, setPeople ] = useState(data);

  
  return (

   <h2>Project setting</h2>
  );
}



export default App;



