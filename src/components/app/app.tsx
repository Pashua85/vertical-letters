import React, {useEffect, useState, useRef, useLayoutEffect} from 'react';
import './app.scss';

type Letters = string[]

const App: React.FC = () => {
  const [letters, setLetters] = useState<Letters>([]);
  const cursorRef = useRef<HTMLDivElement>(null);

  const keyDownHandler = (event: KeyboardEvent) => {
    if (/^[A-Za-zА-Яа-яёЁ]/.test(event.key) && event.key.length === 1) {
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

  useEffect(() => {
    if (cursorRef !== null) {
      cursorRef.current?.scrollIntoView({behavior: `smooth`});
    }
  })

  return (
    <div className="app">
      <p className="word-line">
        {
          letters.map(l => (
            <span className="letter">{l}</span>
          ))
        }
      </p>
      <div className="cursor" ref={cursorRef}></div>
    </div>
  )
};

export default App;
