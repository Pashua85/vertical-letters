import React, {useEffect, useState} from 'react';
import './app.scss';

type Letters = string[]

const App: React.FC = () => {
  const [letters, setLetters] = useState<Letters>([]);

  const keyDownHandler = (event: KeyboardEvent) => {
    if (/^[A-Za-zА-Яа-я]/.test(event.key) && event.key.length === 1) {
      setLetters(prevState => [...prevState, event.key]);
    } else if (event.key === `Backspace`) {
      setLetters(prevState => [...prevState].slice(0, prevState.length - 1))
    }
  }

  useEffect(() => {
    document.addEventListener(`keydown`, keyDownHandler);

    return (() => {
      document.removeEventListener(`keydown`, keyDownHandler);
    })
  }, [])

  return (
    <div className="app">
      <p className="word-line">
        {
          letters.map(l => (
            <span className="letter">{l}</span>
          ))
        }
      </p>
      <div className="cursor"></div>
    </div>
  )
};

export default App;
