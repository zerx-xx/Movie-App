import PropTypes from "prop-types" ; 
import { Link } from "react-router-dom";
import "../css/Movie.modul.css"

const Movie = ({id, title, coverImg, genres}) => {
    return (
        <div className="card">
            <form className="All">
                <div className="titleUl">
                    <h1 className="movieTitle"> {title} </h1>
                    <ul className="genresUl"> 
                    {genres.map((h) => (
                        <li key={h}> {h} </li>
                    ))}
                    </ul>
                </div>
                <div className="imgDiv">
                    <Link to={`/movie/detail/${id}`} >
                    <img src={coverImg} alt={title} className="coverImg" />
                    </Link>
                </div>
            </form>
        </div>
    )
} ;

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired, 
}

export default Movie ; 