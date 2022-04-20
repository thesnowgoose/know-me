import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Instructions } from './game/Instructions'
import { Play } from './game/Play'

const initialState = {
  isPlaying: false,
}

function App() {
  const [state, setState] = React.useState(initialState);
  const onPlay = (isPlaying) => setState(state => ({...state, isPlaying}))
  const { isPlaying } = state;
  return (
    <div className="App">
      <header className="App-header">
        {isPlaying ? <Play goBack={() => onPlay(false)} /> : <Instructions onPlay={() => onPlay(true)} />}
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
