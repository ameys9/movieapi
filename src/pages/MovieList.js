
import { useEffect } from "react";
import { Card } from "../components/Card"
import { useFetch } from "../hooks/useFetch";

export const MovieList = ({api, title}) => {
  
  useEffect(()=>{
    document.title = `${title}`
  })
const { data } = useFetch(api);
    return (
      <main >
        <section className=" max-w-7xl m-4 ">
          <div className="flex justify-start flex-wrap other:justify-evenly">
            { data.map((movie) => (
              <Card key={movie.id} movie={movie}/>
            )) }
          </div>
        </section>
      </main>
    )
  }