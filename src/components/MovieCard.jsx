import React from 'react'

function MovieCard({allMovieData, loading}) {
  return (
    <div>
      <div className='flex flex-wrap px-4 lg:px-10 '>
       
       {Array.isArray(allMovieData) ? (
        allMovieData.map((item,index)=>{ 
          const {Poster,Title,Year} =item
          <div className="p-2 md:w-1/4 w-full">
          <div className="bg-[#002e4b] p-3 rounded-2xl shadow-lg hover:-translate-y-1 border-2 border-gray-600">
            <img className='rounded-lg w-full mb-2' src={Poster} alt="" />
            <h2 className='text-xl text-white font-bold'>{Title}</h2>
            <h2 className='text-lg text-white mb-2'>Year:{Year}</h2>
          </div>
          </div>
       
         })
       ) : (
        <div className='text-red-500'>
            <p>all movie data us not mapped </p>
          </div>
       )
       
      
       }
        
        </div>
       </div>
      
    
  )
}

export default MovieCard