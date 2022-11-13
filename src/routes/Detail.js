import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../css/Detail.modul.css"
// import "/Users/drizzle/movie-app/src/css/reset.css"

const Detail = () => {
    const [detailLoading, setDetailLoading] = useState(true) ; 
    const [detailMovies, setdetailMovies] = useState([]) ; 

    const {id} = useParams()
    const getMovie = async() => {
        const response = await 
            fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`) ;
            const json = await response.json() ; 
            setdetailMovies(json.data.movie) ; 
            setDetailLoading(false) ; 
    } ; 

    useEffect(() => {
        getMovie() ;
    }, []) ;

    return (
        <div className="LoadingDiv">
            {detailLoading ? 
            (<h1 className="Loading"> Loading... </h1>) : (
            
            <div  className="DetailAll">
                <img className="BackgroundImg" src={detailMovies.large_cover_image} />

                <div className="DivIn">
                    <h1 className="title"> 
                        {detailMovies.title} ({detailMovies.language}) 
                        <span> {detailMovies.year}</span> 
                    </h1>

                    <form className="ImgSript">
                        <img className="img" src={detailMovies.medium_cover_image}/>
                        <p className="script"> {detailMovies.description_full} </p>
                    </form>
                    
                </div>
            </div>
            )}
        </div>
    ) ; 
} ;

export default Detail ; 