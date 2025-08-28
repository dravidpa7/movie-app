import React from 'react'
import MovieCard from '../components/MovieCard';
import { useState, useEffect } from 'react';
import { searchMovies, getPopularMovies } from '../services/api';
import "../css/Home.css"

function Home(){

    const [searchQuery,setSearchQuery] = useState("");

    const [movies, setMovies] = useState([]); 

    const [error,setError] = useState(null);

    const [loading,setLoading] = useState(true);

    useEffect (() => {
        const loadPopularMovies = async () =>{
            try{
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies)
            }
            catch(err){
                console.log(err);
                setError("Failed to Load movies.....")
            }
            finally{
                setLoading(false)
            }

        }
        loadPopularMovies()
    }, [])

    const handleSearch = (e) =>{
        e.preventDefault()
        alert(searchQuery)
    }

    return (
        <div className="home">

            <form  action="" onSubmit={handleSearch} className="search-form">

                <input type="text" 
                    placeholder="Search for movies....." 
                    className="search-input"
                    value={searchQuery}
                    onChange={(e)=>setSearchQuery(e.target.value)}
                />
                <button type='submit' className='search-button'>search</button>
            </form>

            <div className="movies-grid">
                {
                    movies.map((movie)=>(
                        console.log(movie)
                        // movie.#TITLE.toLowerCase().startsWith(searchQuery) 
                        // && <MovieCard movie={movie} key={movie.id}/>
                    ))

                    // instend 
                    // if (movie.title.toLowerCase().startsWith(searchQuery)) {
                    //     return <MovieCard ... />
                    // }

                }
            </div>
        </div>
    )
}

export default Home
