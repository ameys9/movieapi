import { useEffect } from "react";
import { Card } from "../components/Card"
import { useFetch } from "../hooks/useFetch";
import { useSearchParams } from "react-router-dom";

export const Search = ({api}) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("query");
  const { data } = useFetch(api, queryTerm);
  useEffect(()=>{
    document.title = `Results for ${queryTerm}`
  })

    return (
      <main >
        <section>
          <p className="">Results for {queryTerm}</p>
        </section>
        <section className=" max-w-7xl m-4 ">
          <div className="flex justify-start flex-wrap ">
            { data.map((movie) => (
              <Card key={movie.id} movie={movie}/>
            )) }
          </div>
        </section>
      </main>
    )
  }
