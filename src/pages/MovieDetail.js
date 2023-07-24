import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Backup from "../asset/movieposterr.jpg"

export const MovieDetail = () => {
  const[data,setData] = useState([]); 
  const mid= useParams();
  const img = data.poster_path ? `https://image.tmdb.org/t/p/original/${data.poster_path}` : Backup;
  useEffect(()=>{
    document.title = `${data.title}`
  })
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMmMwMDg5ZDdiY2E4OTM4Njk1MjA0MTkyZGIzNzgwMCIsInN1YiI6IjY0YjY2ZWVmNzg1NzBlMDBhZDRkMTkyNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6c36ojWqRvsGn0b1rnPOUVFT07CXnUNfRjjti_GE4wY'
    }
  };
 
  useEffect(()=>{
    
    async function fetchm(){
      const response = await fetch(`https://api.themoviedb.org/3/movie/${mid.id}`, options);
      const json = await response.json();
      setData(json);
      console.log(json);
    }
    fetchm();
  },[mid, options])
  
    

    return (
      <main>
        <section className="flex justify-around flex-wrap py-5">
          <div className="max-w-sm">
            <img className="rounded" src={img} alt ="amey"></img>
          </div>
          <div className="max-w-2xl text-gray-700 text-lg">
            <h1 className="text-4xl font-bold my-3">{data.title}</h1>
            <p className="my-4">{data.overview}</p>
            {data.genres ? (
              <p className="my-7 flex flex-wrap gap-2">
              { data.genres.map((genres) => (
                <span className="mr-2 border border-gray-200 rounded" key={genres.id}>{genres.name}</span>
              ))}
            </p>
            ):""}
            <p className="my-4">
              <span className="mr-2 font-bold">Runtime:</span>
              <span>{data.runtime} min.</span>
            </p>
            <p className="my-4">
              <span className="mr-2 font-bold">Budget</span>
              <span>{data.budget}</span>
            </p>
            <p className="my-4">
              <span className="mr-2 font-bold">Revenue</span>
              <span>{data.revenue}</span>
            </p>
            <p className="my-4">
              <span className="mr-2 font-bold">Release Date:</span>
              <span>{data.release_date}</span>
            </p>
            <p className="my-4">
              <span className="mr-2 font-bold">IMDB:</span>
              <a href={`https://www.imdb.com/title/${data.imdb_id}`}>{data.imdb_id}</a>
            </p>
                        
          </div>
        </section>
        <section>
          
        </section>
      </main>
    )
  }