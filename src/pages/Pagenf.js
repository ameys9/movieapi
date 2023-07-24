import { Link } from "react-router-dom"
import pgnf from "../asset/pgnf.jpg"
import { useEffect } from "react"

export const Pagenf = ({title}) => {
  useEffect(()=>{
    document.title = `${title}`
  })
    return (
      <main>
        <section className="flex flex-col justify-center px-2">
          <div className="flex flex-col items-center my-4">
            <p className="text-7xl text-gray-700 font-bold my-10 dark:text-white"></p>
            <div className="w-2xl ">
              <img className="rouned object-contain" src={pgnf} alt="404 Page Not Found"/>
            </div>
          </div>
          <div className="flex justify-center my-6">
            <Link to='/'>
             <button type="button" class=" my-6 w-60 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Back To Home Page</button>
            </Link>
          </div>
        </section>
      </main>
    )
  }