import { Link } from "react-router-dom"
import Logo  from "../asset/movieposterr.jpg"

export const Card = ({movie}) => {
    const img = movie.poster_path ? `https://image.tmdb.org/t/p/original/${movie.poster_path}` : Logo;
    return (
      <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-3">
         <Link to={`/movie/${movie.id}`}>
          <img className="rounded-t-lg" src={img} alt="" />
         </Link>
        <div className="p-5">
        <Link to="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{movie.original_title}</h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{movie.overview}</p>        
        </div>
      </div>
    )
  }