import React from "react";
import{ useEffect, useState } from "react";
import Movie from "../components/Movie";
import "../css/Home.modul.css" ;

const Home = () => {
    const [loading, setLoading] = useState(true) ; 
    const [movies, setMovies] = useState([]) ; 

    const getMovies = async() => {
        const response = await 
            fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8&sort_by=year`) ; 
            const json = await response.json() ;
            setMovies(json.data.movies) ; 
            setLoading(false) ;
    } ; 

    useEffect(() => {
        getMovies() ; 
    }, []) ; 


    return  (
        <div className="LoadingDiv">
            {loading ?
            (<h1 className="Loading"> Loading... </h1>) : (
            <div className="movieAll">
                {/* <h1 className="movie"> Movie </h1> */}
            {movies.map((mapp) => (
                <Movie key={mapp.id}
                        id={mapp.id}
                        title={mapp.title}
                        coverImg={mapp.medium_cover_image}
                        genres={mapp.genres}
                        />
                ))}  
            </div>)} 
        </div>
    ) ;
} ; 

export default Home ; 