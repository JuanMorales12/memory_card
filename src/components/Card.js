import React, {useEffect, useState} from 'react';
import ReactCardFlip from 'react-card-flip';
import backFace from '../images/question-mark-card.png'

const Card = ({name,number,frontFace,flipCard,unFlippedCards,finish}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(()=>{
    if(unFlippedCards?.includes(number)){
      setTimeout(() => {
       setIsFlipped(false); 
      }, 700);
    }
  },[unFlippedCards])
  useEffect(()=>{
    if(finish){
      setTimeout(() => {
       setIsFlipped(false); 
      }, 700);
    }
  },[finish])
  const handleClick = () =>{
    const value = flipCard(name,number);
    if(value === 1){
      setIsFlipped(!isFlipped);
    }
  }
  return (
    <div className='card'>
      <ReactCardFlip isFlipped={isFlipped}>
        <img className='card-image' src={backFace} alt='backface' onClick={handleClick}/>
        <img className='card-image' src = {frontFace} alt='frontface' onClick={handleClick}/>
      </ReactCardFlip>
    </div>
  )
}

export default Card
