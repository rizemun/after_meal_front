import React, {useEffect} from 'react';
import './App.css';
// @ts-ignore
const tg = window.Telegram.WebApp;

function App() {

  useEffect(() => {
    tg.ready();
  }, []);
  const handleCloseClick = () => {
    tg.close();
  }

  return (
    <div className="App">
      work
      <button onClick={handleCloseClick}>Закрыть</button>
    </div>
  );
}

export default App;
