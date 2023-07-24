import {  Routes, Route } from "react-router-dom";

import { MovieList, MovieDetail, Search, Pagenf } from "../pages";

export const Allroutes = () => {
  return (
    <>
        <Routes>
        <Route path="/" element={<MovieList api="movie/now_playing" title="Cinemate"/>}/>
        <Route path="movie/:id" element={<MovieDetail />}/>
        <Route path="movies/popular" element={<MovieList api="movie/popular" title="Popular"/>}/>
        <Route path="movies/upcoming" element={<MovieList api="movie/upcoming" title="Upcoming Movies"/>}/>
        <Route path="movies/top" element={<MovieList api="movie/top_rated" title="Top Movies"/>}/>
        <Route path="search/movie" element={<Search api="search/movie" title="Search"/>}/>
        <Route path="*" element={<Pagenf title="Page Not Found" />}/>
        </Routes>
    </>
  )
}