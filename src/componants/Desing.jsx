const Desing = ({datas}) => {
  const { Title, Year , Released  , Genre , Director , Poster , Value ,imdbRating , Actors, Language, Country, BoxOffice , Runtime , Source , Type} = datas
    return(
     <> 
       <div className="border-0 border-white m-2 h-110 flex justify-evenly items-center flex-wrap">
           <div className="border-0 border-white w-100 h-120 flex justify-center items-center">
               <img src={Poster} alt="" className="w-100 h-120"/>
           </div>
           <div className="border-0 border-white w-240 h-120 text-white p-7">
              <h1 className="text-6xl m-2">Title :  {Title}</h1>
              <p className="text-3xl m-3">Year :  {Year} , Released date : {Released}</p>
              <p className="text-3xl m-3">Runtime {Runtime}</p>
              <p className="m-3">Genre :  {Genre} </p>
              <p className="m-3">Director : {Director} </p>
              <p className="m-3">Actors : {Actors} </p>
              <p className="m-3">Language : {Language} Country :{Country}</p>
              <p className="text-3xl m-3">BoxOffice collection {BoxOffice}</p>
              <p className="text-3xl m-3 text-white">Type : {Type}</p>
               <div className="border-0 border-white w-50 h-15 flex justify-center items-center text-white bg-red-500 rounded-md m-2">
                imdb rating {imdbRating} / 10
               </div>
           </div>
       </div>
     </>
    )
}

export default Desing