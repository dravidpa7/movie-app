import MovieCard from "./components/MovieCard"
import NavBar from "./components/NavBar";
import Favourites from "./pages/Favourites";
import Home from "./pages/Home";
import "./css/App.css";
import { Routes, Route } from "react-router-dom";
import "./services/api.js"

function App() {
  const movieNumber = 1;


  return (
    <>

      {/* or we can use && short Circuit for conditional rendering */}
      
      {/* {movieNumber === 1 ? (<MovieCard movie={{title:"Dravid Film",release_date:"2024"}}/>)
      :(<MovieCard movie={{title:"Indu Film",release_date:"2024"}}/>)} */}
      <NavBar></NavBar>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/favourites" element={<Favourites/>}></Route>
        </Routes>
      </main>
    </>
  )
}


export default App
