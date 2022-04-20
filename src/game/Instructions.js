
export function Instructions({ onPlay }) {
  return ( 
    <>
     <div className='title'>Instrucciones:</div>
      <p className='initial-text'>
        <strong>1.</strong> Presiona el boton. Te tocara un juego al azar.<br />
        <strong>2.</strong> Si no quieres cumplir el reto presiona el boton <strong>SKIP</strong>.<br/>
        <strong>3.</strong> Saldra un segundo reto que tienes que cumplir, si no lo logras te toca castigo.
      </p>
      <button className="Play-button" onClick={() => onPlay()} >
        Click me
      </button>
    </>
  )
}