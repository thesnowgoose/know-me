import React from 'react';
import data from '../data/challenges.json';

const initState = {
  showElse: false,
  selected: {}
}

export function Play({ goBack }) {
  const [state, setState] = React.useState(initState);
  
  React.useEffect(() => {
    const selected = getRandomChallenge();
    setState(state => ({...state, selected }));
  }, []);
  
  const { selected, showElse } = state;
  return (
    <>
      <div style={{ marginLeft: '2rem', marginBottom: '3rem', alignSelf: 'flex-start' }}>
        <a class="App-link" onClick={goBack}>{`<- regresar`}</a>
      </div>
      {!showElse && (
        <>
          <p className='initial-text'>{selected.text}</p>
          {selected.country === "text" && <span className='initial-text'>{randomCountry()}</span>}
        </>
      )}
      <div>
        {showElse ? (
          <>
            <p className='initial-text'>
              <div className='title'>Reto de consolación:</div>
              {selected.else}
              {selected.country === "else" && <span className='initial-text'>{randomCountry()}</span>}
            </p>
            {selected.punishment && <Punishment />}
          </>
        ) : ( 
          <>
            {selected.else && (
              <button className="Play-button"
                onClick={() => setState(state => ({...state, showElse: true}))}>
                SKIP
              </button>
            )}
          </>
        )}
      </div>
    </>
  )
}

const getRandomChallenge = () => {
  const { challenges } = data;
  const max = challenges.length;
  const n = Math.floor(Math.random() * max)
  return challenges[n];
}

const Punishment = () => {
  const { punishments } = data;
  const max = punishments.length;
  const n = Math.floor(Math.random() * max)

  const [showPunishment, setShoePunishment] = React.useState(false);

  return (
    <>
      {showPunishment ? (<p className='initial-text'>{punishments[n]}</p>) : (
        <button className="Play-button Else-button" 
          onClick={() => setShoePunishment(true)}
          style={{ marginTop: '3rem' }}>
          Click si no logró el reto
        </button>
      )}
    </>
  )
}

const randomCountry = () => {
  const { countries } = data;
  const max = countries.length;
  const n = Math.floor(Math.random() * max)

  return countries[n];
}