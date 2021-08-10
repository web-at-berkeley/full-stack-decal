import {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import RandomFact from './RandomFact';
import axios from 'axios';

export default function App() {
  const [count, setCount] = useState(0);
  const [fact, setFact] = useState('');
  const [error, setError] = useState(false);

  useEffect( () => {
      axios.get(`https://uselessfacts.jsph.pl/random.json?language=en`).then((response) => {
        setFact(response.data.text);
      });
  }, [count]);


  /** fetch() version:w
   * 
  useEffect( () => { 
    fetch('https://uselessfacts.jsph.pl/random.json?language=en') 
      .then(resp => resp.json()) 
      .then(response => setFact(response.text)) 
      .catch(() => {
        setError(true)
      });
    //how would we do this with async/await instead of promises?
  }, [count])
   */

  return (
    <div className="App">
      <p> you clicked the button {count} times.</p>
      <button
        onClick= {() => setCount(count+1)}>
        click me!
      </button>
      <hr/>
      <div>
        {error
          ? <p>Too many requests! Wait for a few minutes and refresh</p>
          : <RandomFact fact={fact} />
        }
      </div>
    </div>
  );
}
