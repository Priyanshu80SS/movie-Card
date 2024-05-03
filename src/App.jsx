 import  {useState} from 'react';
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import MovieCard from './components/MovieCard'

function App(){

  const [allMovieData, setallMovieData] = useState([]);
  const [searchMovie , setsearchMovie ] = useState('')
  
  const [loading , setloading] = useState(false);
  const fetchMovieData = async () =>{
    try{
      setloading(true);
      const res= await fetch(`http://www.omdbapi.com/?s=${searchMovie}&apikey=cf1e1c17`);
      const data = await res.json();
      setallMovieData(data.Search);
      console.log(data.Search);
      setloading(false);
    }catch (error){
        console.log(error);
        setloading(false);
    }
  }

  return(
    <div>
      <Navbar/>
      <div className="bg">
      <SearchBar searchMovie={searchMovie}
      setsearchMovie={setsearchMovie}
      fetchMovieData={fetchMovieData}/>
      <MovieCard allMovieData={allMovieData}
      loading={loading}/>
      </div>
    </div>
  )
}

export default App