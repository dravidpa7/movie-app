import React from 'react'
import MovieCard from '../MovieCard';
import { useState } from 'react';

function Home(){

    const [searchQuery,setSearchQuery] = useState("");

    const movies =[
        {id:1, title:"John Wick", release_date:"2020"},
        {id:2, title:"Stan Wick", release_date:"2021"},
        {id:3, title:"Ban Wick", release_date:"2023"},
        {id:4, title:"Man Wick", release_date:"2024"},
    ];

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

            <div className="movie-grid">
                {
                    movies.map((movie)=>(
                        <MovieCard movie={movie} key={movie.id}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Home
