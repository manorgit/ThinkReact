import React from 'react';
import './App.css';
import InheritenceVSComposition from './InheritenceVSComposition/InheritenceVSComposition'
import SharedStateFormik from'./Patterns/FoundationalCB/SharedStateFormik'
import {MyHoCToggle, MyToggle} from './Patterns/FoundationalCB/SharedStateToggle'


function App() {
  return (
    <div className="App">
      {/* Inheritence vs Composition*/}
      {/* {<InheritenceVSComposition/>} */}
      <SharedStateFormik></SharedStateFormik>
      <MyToggle></MyToggle>
      <MyHoCToggle></MyHoCToggle>
    </div>
  );
}

export default App;
