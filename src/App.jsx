import MovieCard from "./MovieCard"
import Home from "./pages/Home"


function App() {
  const movieNumber = 1;


  return (
    <>

      {/* or we can use && short Circuit for conditional rendering */}
      
      {/* {movieNumber === 1 ? (<MovieCard movie={{title:"Dravid Film",release_date:"2024"}}/>)
      :(<MovieCard movie={{title:"Indu Film",release_date:"2024"}}/>)} */}
  
      <Home/>
    </>
  )
}


export default App
