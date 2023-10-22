// 378ddf8e
import { useEffect } from "react"

import './App.css'
import SearchIcon from './search.svg'

const API_URL = 'http://www.omdbapi.com?apikey=378ddf8e'

function App() {

  const searchMovies =async (title:string) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()

    console.log(data.Search);
  }

  useEffect(() => {
    searchMovies('Spiderman')
  }, [])
  return (
    <>
      <h1>MovieLand</h1>

      <div className="search">
        <input 
          type="text"
          placeholder="Search for movies"
          value="Superman"
          onChange={() => {}}
        />
        <img 
          src={SearchIcon} 
          alt="search"
          onClick={() => {}}
        />
      </div>

      <div className="container">
        
      </div>
    </>
  )
}

export default App
