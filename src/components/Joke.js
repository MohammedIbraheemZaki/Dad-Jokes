import Axios from 'axios'
import React, {useEffect, useState} from 'react'
import axios from 'axios'
export default function Joke() {
  
  const [joke, setJoke] = useState('')

  useEffect( () => {
    axios
      .get('https://icanhazdadjoke.com/', {headers: {Accept: 'application/json'}})
      .then(res => setJoke(res.data))
      .catch(err => console.log(err))
  }, []);

  const fetchJoke = () => {
    axios
    .get('https://icanhazdadjoke.com/', {headers: {Accept: 'application/json'}})
    .then(res => setJoke(res.data))
    .catch(err => console.log(err))
  }

  return (
    <div>
      <div className="card mb-2">
        <div className="card-header">
          <h5 className="card-title">Dad Joke</h5>
        </div>
        <div className="card-body">
          <p className="card-text">{joke.joke}</p>
          <a className="btn btn-primary" onClick={fetchJoke} >Get Another Joke ... </a>
        </div>
      </div>
    </div>
  )
}
