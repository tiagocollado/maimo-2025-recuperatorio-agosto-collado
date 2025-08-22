import Image from 'next/image';
import Link from 'next/link';
export default function Card({movie}) {
  return (
       <div
        key={movie.id}
        className='col_3 flex flex-col justify-center items-center gap-3 bg-white p-4 rounded-lg text-black'
      >
        <Image
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          width={500}
          height={200}
          alt={movie.title}
          className='rounded-lg'
        />
        <h2 className='text center'>{movie.title}</h2>
       <h2 className='text-center'> ⭐Puntuacion: {Math.round(movie.vote_average)}</h2>
        <Link className='text-blue-500 underline' href={`/movie/${movie.id}`}>Ver detalle</Link>
      </div>
  )
}
