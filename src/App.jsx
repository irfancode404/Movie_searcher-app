import { useEffect, useState } from "react"
import Desing from "./componants/Desing"
const App = () => {
  const [input,setinput] = useState("The Boys");
  const [datas,setdatas] = useState({});
   const mydatas = async () => {
     const mydata = `https://www.omdbapi.com/?t=${input}&apikey=8a21bf0`;
     const fetdata =  await fetch(mydata);
     const realdata = await fetdata.json();
     const { Title , Year , Released , Genre ,Director ,Poster , imdbRating , Actors , Language , Country , BoxOffice , Runtime  ,Source, Type} = realdata
     const { Value } =  realdata.Ratings[0]

     const mygodata = {
      Title,
      Year,
      Released,
      Genre,
      Director,
      Poster,
      Value,
      imdbRating,
      Actors,
      Language, 
      Country,
      BoxOffice,
      Runtime,
      Source,
      Type,
     }
     setdatas(mygodata);
   }
   useEffect(() => {
    mydatas();
   },[])
  return(
    <>
      <div className="h-250 border-2 bg-[#050708]">
       
          <div className="border-white border-0 h-30 m-2 flex justify-center items-center">
              <input type="search" 
               className="border-0 border-white outline-white outline-1 p-3 text-white shadow-2xl rounded-md w-60"
               placeholder="Search Movies"
               onChange={(e) => setinput(e.target.value)}
               value={input}
              />
              <button className="border-0 border-white m-2 p-3 rounded-md text-white bg-green-400 cursor-pointer hover:border-2 " onClick={() =>
                mydatas()
              }>Search <i className="fa-solid fa-magnifying-glass"></i></button>
          </div> 
        <Desing datas={datas}/>
      </div>
    </>
  )
}

export default App