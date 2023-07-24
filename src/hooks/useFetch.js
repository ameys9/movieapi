import { useEffect, useState } from "react"


export const useFetch = (api, queryTerm="") => {
    const[data , setData] = useState([]);
    const url = `https://api.themoviedb.org/3/${api}?query=${queryTerm}`
    

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMmMwMDg5ZDdiY2E4OTM4Njk1MjA0MTkyZGIzNzgwMCIsInN1YiI6IjY0YjY2ZWVmNzg1NzBlMDBhZDRkMTkyNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6c36ojWqRvsGn0b1rnPOUVFT07CXnUNfRjjti_GE4wY'
        }
      };  
      
      
      useEffect(()=>{
        async function fetchm(){
          const response = await fetch(url, options);
          const json = await response.json();
          setData(json.results);
        }
        fetchm();
      },[url , options])
  return (
    {data}
  )
}
