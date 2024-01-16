import { useEffect, useState } from 'react';
import Card from './components/Card';
import { images } from './import';
import './app.css';
import Congratulations from './components/Congratulations';

function App() {
  const [cards, setCards] = useState([]);
  const [firstCard, setFirstCard] = useState({});
  const [secondCard, setSecondCard] = useState({});
  const [disabledCards, setDisabledCards] = useState([]);
  const [unFlippedCards, setUnflippedCards] = useState([]);
  const [finish, setFinish] = useState(false);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  };

  function flipCard(name, number) {
    if (
      (firstCard.name === name && firstCard.number === number) ||
      (secondCard.name === name && secondCard.number === number) ||
      disabledCards?.includes(number)
    ) {
      return 0;
    }
    if (!firstCard.name) {
      setFirstCard({ name, number });
    } else if (!secondCard.name) {
      setSecondCard({ name, number });
    }
    return 1;
  }

  function checksForMatch() {
    if (firstCard.name && secondCard.name) {
      const idems = firstCard.name === secondCard.name;
      idems ? disableCards() : unflipCards();
    }
  }

  function disableCards() {
    setDisabledCards([...disabledCards, firstCard.number, secondCard.number]);
    if(disabledCards?.length === 10){
      setFinish(true);
    }
    resetCards();
  }
  function unflipCards() {
    setUnflippedCards([firstCard.number, secondCard.number]);
    resetCards();
  }

  function resetCards() {
    setFirstCard({});
    setSecondCard({});
  }

  function restart() {
    setCards([]);
    setFirstCard({});
    setSecondCard({});
    setDisabledCards([]);
    setUnflippedCards([]);
    setFinish(false);
    shuffleArray(images);
    setCards(images);
  }

  function flipAllCards() {
    setCards((cards) => cards.map((card) => ({ ...card, flipped: false })));
  }

  useEffect(() => {
    shuffleArray(images);
    setCards(images);
  }, []);

  useEffect(() => {
    if (secondCard?.name) {
      checksForMatch();
    }
  }, [secondCard]);

  return (
    <div className="app">
      <div className="cards-container">
        {cards.map((card, index) => (
          <Card
            key={index}
            name={card.player}
            number={index}
            frontFace={card.src}
            flipCard={flipCard}
            unFlippedCards={unFlippedCards}
            finish = {finish}
          />
        ))}
      </div>
      <Congratulations restart={restart} finish = {finish}/>
    </div>
  );
}

export default App;
