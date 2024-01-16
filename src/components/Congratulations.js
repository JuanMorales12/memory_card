import React from 'react';

const Congratulations = ({restart,finish}) => {

  function handleClick (){
    restart();
  }

  return (
    <div className={`congratulations${finish ? ' visible' : ''}`}>
      <div className="balloons top-balloons">
        <div className="balloon">
          <div className="string"></div>
        </div>
        <div className="balloon">
          <div className="string"></div>
        </div>
        <div className="balloon">
          <div className="string"></div>
        </div>
        <div className="balloon">
          <div className="string"></div>
        </div>
        <div className="balloon">
          <div className="string"></div>
        </div>
      </div>
      <p className="congrats-message">🎉 ¡Felicidades! 🎉</p>
      <div className="balloons bottom-balloons">
        <div className="balloon">
          <div className="string"></div>
        </div>
        <div className="balloon">
          <div className="string"></div>
        </div>
        <div className="balloon">
          <div className="string"></div>
        </div>
        <div className="balloon">
          <div className="string"></div>
        </div>
        <div className="balloon">
          <div className="string"></div>
        </div>
      </div>
      <button className="play-again-button" onClick={handleClick}>Jugar de nuevo</button>
    </div>
  );
};

export default Congratulations;
